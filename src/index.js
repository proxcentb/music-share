import WithTooltip from './Tooltip';
import {tags as allTags, getTagByName, getModifiedTag} from "./config/tags";
import { getVideosByTags } from "./config/videos";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import { useTags, usePage, useDidMountEffect, useModal } from "./hooks";
import { memo } from "preact/compat";
import "./style";

function getTagStyles(tagState, initialStyle, initialClassName) {
  switch(tagState) {
    case true: return {
      className: `tag selected ${initialClassName ?? ''}`,
    };
    case false: return {
      className: `tag deselected ${initialClassName ?? ''}`,
    };
    default: return {
      style: initialStyle ?? {},
      className: `tag ${initialClassName ?? ''}`,
    }
  }
}

const YoutubeEmbed = ({ embedId, onLoad }) => (
  <iframe
    src={`https://www.youtube.com/embed/${embedId}`}
    onLoad={onLoad}
    width="100%"
    height="100%"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
)

const Tag = ({ 
  name,
  description,
  tagState,
  style: initialStyle,
  className: initialClassName,
  ...restProps
}) => {
  const { style, className } = getTagStyles(tagState, initialStyle, initialClassName);
  const children = <div {...restProps} style={style} className={className}>{name}</div>;
  
  return description
    ? <WithTooltip content={description}>{children}</WithTooltip>
    : children;
}

const Video = ({ tags, description, embedId, onLoad: _onLoad }) => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(() => {
    setLoaded(true);
    _onLoad();
  }, [_onLoad]);

  const descriptionNode = useMemo(() => {
    return description !== null
      ? <Tag {...getTagByName('ⓘ')} description={description} />
      : <></>
    }, [description]);
  const tagsNodes = useMemo(() => tags.map(tag => <Tag {...getTagByName(tag)} />), [tags]);

  return (
    <div className={`video-wrapper ${loaded ? 'loaded' : ''}`}>
      <div className="tags">{[descriptionNode, ...tagsNodes]}</div>
      <YoutubeEmbed embedId={embedId} onLoad={onLoad} />
    </div>
  );
}

const Videos = memo(({ videos }) => {
  const [videosToDisplay, setVideosToDisplay] = useState(videos[0] ? [videos[0]] : []);

  const loadVideo = useCallback((index) => {
    if (index < videos.length) 
      setVideosToDisplay(prevState => [...prevState, videos[index]]);
  }, [videos]);
  
  const renderVideo = useCallback((video, index) => {
    return <Video {...video} key={index} onLoad={() => loadVideo(index + 1)} />
  }, [loadVideo]);
  
  const videosToDisplayNodes = useMemo(() => videosToDisplay.map(renderVideo), [videosToDisplay, renderVideo]);

  useDidMountEffect(() => {
    // workaround to LOAD first video, not replace it
    setVideosToDisplay([]);
    setTimeout(() => setVideosToDisplay(videos[0] ? [videos[0]] : []), 1);
  }, [videos]);
  
  return <div className="videos">{videosToDisplayNodes}</div>;
})

const Tags = memo(({ toggleTag, tags }) => {
  const renderTag = useCallback(tag => {
    const { name } = tag;
    const onClick = () => toggleTag(name);
    
    return <Tag {...tag} tagState={tags[name]} onClick={onClick} />;
  }, [toggleTag, tags]);
  
  const tagsNodes = useMemo(() => allTags.map(renderTag), [renderTag]);
  
  return <div className="tags">{tagsNodes}</div>;
})

const Navigation = memo(({ totalPages, activePage, setPage }) => {
  const renderButton = useCallback(pageNumber => {
    const isActive = pageNumber === activePage;
    const onClick = () => setPage(pageNumber);
    
    return <button className={isActive ? 'active' : ''} onClick={onClick}>{pageNumber}</button>;
  }, [activePage, setPage]);
  
  const buttonsNodes = useMemo(() => {
    return Array.from(
      { length: totalPages }, 
      (_, i) => renderButton(i + 1),
    );
  }, [totalPages, renderButton]);
  
  return <div className="navigation">{buttonsNodes}</div>;
})

const Modal = memo(({ closeModal, setSkipIntroTrueToQuery }) => {
  const [ nodes, setNodes ] = useState(null);
  const toggleHighlightNode = useCallback((nodeName) => nodes[nodeName].classList.toggle('above-all'), [nodes]);
  
  useEffect(() => {
    const bodyNode = document.querySelector('body');
    setNodes({ 
      tagsNode: bodyNode.querySelector('.app > .tags'), 
      navigationNode: bodyNode.querySelector('.app > .navigation'),
    });
    
    bodyNode.classList.add('hidden-scroll');
    return () => bodyNode.classList.remove('hidden-scroll');
  }, []);

  const exampleTags = [
    { name: 'активное', description: 'активное состояние', tagState: true },
    { name: 'неактивное', description: 'неактивное состояние', tagState: false },
    { name: 'нейтральное', description: 'нейтральное состояние', tagState: null },
  ].map(tag => <Tag {...getModifiedTag(tag)} />);
  
  return (
    <div className="modal outlined-text">
      <div>
        Здесь предоставлена музыка, которая мне нравится. <br />
        Точно не вся, но, по крайней мере, большая ее часть.
      </div>
      <div>
        На каждой странице показывается максимум 12 видео. <br />
        Перейти на другие страницы можно <button onClick={() => toggleHighlightNode('navigationNode')}>здесь</button>.
      </div>
      <div>
        У большинства видео есть <button onClick={() => toggleHighlightNode('tagsNode')}>теги</button>, которые как-то его описывают. <br /> 
        Разделение на теги субъективно, не надо бить автора за это. <br />
        При наведении курсора на тег появляется небольшое описание. <br />
        У каждого тега есть 3 состояния:
        <ul>
          <li>{exampleTags[0]}, тогда только видео с этим тегом будут появляться.</li>
          <li>{exampleTags[1]}, тогда все видео с такими тегом не будут появляться.</li>
          <li>{exampleTags[2]} (изначальное состояние), это не влияет на что-либо.</li>
        </ul>
        Нажмите на тег, чтобы изменить его состояние.
      </div>
      <div>
        Чем больше музыка мне нравится, тем первее она в списке. <br />
        Порядок может не точно отражать мои предпочтения, но примерное представление получить можно.
      </div>
      <div>
        Страница и все выбранные теги сохраняются в строку запроса. <br />
        Надоело видеть эту информацию при первоначальной загрузке страницы? <br /> 
        - Добавьте <code>&skipIntro=true</code> к строке запроса или нажмите <button onClick={setSkipIntroTrueToQuery}>здесь</button>.
      </div>
      <div>
        Весь контент актуален на 28 ноября 2021. <br />
        Поскольку все видео и теги захардкожены в файлах, мне будет лень обновлять и добавлять сюда что-то новое.
      </div>
      <button onClick={closeModal}>Понял, принял.</button>
    </div>
  );
})

export default function App() {
  const pageSize = 12;
  const { page, setPage } = usePage();
  const { tags, toggleTag } = useTags();
  const { 
    shouldShowModal, 
    closeModal,
    setSkipIntroTrueToQuery,
  } = useModal();
  
  useDidMountEffect(() => {
    setPage(1);
  }, [tags]);
  
  const videosToDisplay = useMemo(() => getVideosByTags(tags), [tags]);
  const totalPages = useMemo(() => Math.ceil(videosToDisplay.length / pageSize), [pageSize, videosToDisplay.length]);
  
  const videosToDisplayInPage = useMemo(() => {
    const startIndex = pageSize * (page - 1);
    const endIndex = startIndex + pageSize;
    const indexIsBetween = (_, i) => startIndex <= i && i < endIndex;

    return videosToDisplay.filter(indexIsBetween);
  }, [page, videosToDisplay]);

  return (
    <div className="app">
      <div className="background" />
      {shouldShowModal && <Modal closeModal={closeModal} setSkipIntroTrueToQuery={setSkipIntroTrueToQuery} />}
      <Tags tags={tags} toggleTag={toggleTag} />
      <Navigation totalPages={totalPages} activePage={page} setPage={setPage} />
      <Videos videos={videosToDisplayInPage} />
    </div>
	);
}

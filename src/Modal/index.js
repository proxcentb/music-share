import {memo} from "preact/compat";
import {useCallback, useEffect, useState} from "preact/hooks";
import {exampleTags} from "../config/tags";
import {SimpleTag} from "../Tags";
import './style.css';
import {useModal} from "../hooks";

const Modal = memo(({ closeModal, saveSkipIntroTrue }) => {
  const [ nodes, setNodes ] = useState(null);
  const toggleHighlightNode = useCallback((nodeName) => nodes[nodeName].classList.toggle('above-all'), [nodes]);

  useEffect(() => {
    const bodyNode = document.querySelector('body');
    const allNodes = {
      tagsNode: bodyNode.querySelector('.app > .tags'),
      navigationNode: bodyNode.querySelector('.app > .navigation'),
    }
    setNodes(allNodes);

    bodyNode.classList.add('hidden-scroll');
    return () => {
      bodyNode.classList.remove('hidden-scroll');
      Object.values(allNodes).forEach(node => node.classList.remove('above-all'));
    }
  }, []);

  return (
    <div className="modal outlined-text">
      <ol>
        <li><button onClick={() => toggleHighlightNode('navigationNode')}>Тут страницы</button></li>
        <li><button onClick={() => toggleHighlightNode('tagsNode')}>Там теги</button> (и на всех видео тоже)</li>
        <li>У каждого тега есть 3 состояния: {exampleTags.map(tagProps => <SimpleTag key={tagProps.id} {...tagProps} />)}</li>
        <li>При наведении курсора на тег появляется небольшое описание.</li>
        <li>Можете менять состояние тега правой или левой кнопкой мыши.</li>
        <li className="show-small-screen">Под мобилу не заточено, идите за пк</li>
        <li>Разделение на теги субъективно, не надо бить автора за это.</li>
        <li>Чем больше музыка мне нравится, тем первее она в списке (по идее).</li>
        <li>Весь контент актуален на 28 ноября 2021.</li>
      </ol>
      <div>
        <button onClick={closeModal}>Понял, принял.</button>
        <button className="show-small-screen" onClick={closeModal}>Да мне вообще плевать.</button>
        <button onClick={saveSkipIntroTrue}>Хватит показывать это сообщение!</button>
      </div>
    </div>
  );
});

export default memo(() => {
  const { showModal, setShowModalFalse: closeModal, saveSkipIntroTrue } = useModal();
  return !showModal ? <></> : <Modal closeModal={closeModal} saveSkipIntroTrue={saveSkipIntroTrue} />
})

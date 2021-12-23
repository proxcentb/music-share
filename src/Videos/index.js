import YoutubeEmbed from '../YoutubeEmbed';
import { Tag } from '../Tags';
import { getVideoById } from '../config/videos';
import { useRef, useEffect } from 'preact/hooks';
import { memo } from 'preact/compat';
import './style';

const Video = memo(({ id }) => {
  const { description, tagsIds, title } = getVideoById(id);
  
  const ref = useRef(null);
  useEffect(() => ref.current.classList.add('visible'), []);

  return (
    <div ref={ref} className="video-wrapper">
      <div className="tags">
        {description !== null && <Tag id='ⓘ' description={description} />}
        {tagsIds.map(tagId => <Tag key={tagId} id={tagId} />)}
      </div>
      <YoutubeEmbed embedId={id} title={title} />
    </div>
  );
});

export default memo(({ videosIds }) => <div className="videos">{videosIds.map(videoId => <Video key={videoId} id={videoId} />)}</div>);

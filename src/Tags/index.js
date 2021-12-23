import WithTooltip from '../Tooltip';
import { allTagsIds, getTagById } from '../config/tags';
import { useCallback,useMemo, useState, useContext } from 'preact/hooks';
import {getNextTagState, getPrevTagState, TagsContext} from '../hooks';
import { memo } from 'preact/compat';
import './style';

function getTagStyles(tagState, initialStyle, initialClassName) {
  switch(tagState) {
    case true: return { className: `tag selected ${initialClassName ?? ''}` };
    case false: return { className: `tag deselected ${initialClassName ?? ''}` };
    default: return {
      style: initialStyle ?? {},
      className: `tag ${initialClassName ?? ''}`,
    }
  }
}

export const SimpleTag = memo(({ tagState, style: _style, className: _className, id: name, description }) => {
  const [state, setState] = useState(tagState);

  const onContextMenu = useCallback((e) => { e.preventDefault(); setState(getPrevTagState) }, []);
  const onClick = useCallback(() => setState(getNextTagState), []);

  const { style, className } = useMemo(() => getTagStyles(state, _style, _className), [state]);
  const children = <div onClick={onClick} onContextMenu={onContextMenu} style={style} className={className}>{name}</div>;
  return description ? <WithTooltip content={description}>{children}</WithTooltip> : children;
});

export const Tag = memo(({ id, ...restProps }) => {
  const { tagsStates: { [id]: tagState }, setNextTagState, setPrevTagState } = useContext(TagsContext);
  
  const onContextMenu = useCallback(e => { e.preventDefault(); setPrevTagState(id) }, []);
  const onClick = useCallback(() => setNextTagState(id), []);

  const { style: _style, className: _className, id: name, description } = { ...getTagById(id), ...restProps }; 
  const { style, className } = useMemo(() => getTagStyles(tagState, _style, _className), [tagState]);
  const children = <div onClick={onClick} onContextMenu={onContextMenu} style={style} className={className}>{name}</div>;
  
  return description ? <WithTooltip content={description}>{children}</WithTooltip> : children;
});

export default memo(() => <div className="tags">{allTagsIds.map(tagId => <Tag key={tagId} id={tagId} />)}</div>);

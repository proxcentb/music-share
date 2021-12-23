import './style.css';
import { useRef, useState, useEffect, useCallback } from "preact/hooks";
import { useBoolean } from "../hooks";

const WithTooltip = ({ content, children }) => {
  const { boolean: active, setFalse: setActiveFalse, setTrue: setActiveTrue } = useBoolean(false);
  const { boolean: positionSet, setFalse: setPositionSetFalse, setTrue: setPositionSetTrue } = useBoolean(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const parentRef = useRef(null);
  const ref = useRef(null);
  
  const setPosition = useCallback(() => {
    const tooltip = ref.current;
    const parent = parentRef.current;

    const { innerHeight, innerWidth } = window;
    const { bottom, top, height, left, right } = parent.getBoundingClientRect();

    top >= innerHeight - bottom
      ? tooltip.style.bottom = `${height}px`
      : tooltip.style.top = `${height}px`;

    left >= innerWidth - right
      ? tooltip.style.right = '0'
      : tooltip.style.left = '0';

    setPositionSetTrue();
  }, []);
  
  const startTimeout = useCallback(() => {
    const id = setTimeout(setPosition, 700);
    setTimeoutId(id);
  }, []);
  
  const stopTimeout = useCallback(() => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  useEffect(() => {
    if (active) startTimeout();
    else {
      stopTimeout();
      setPositionSetFalse();
    }
  }, [active]);
  
  useEffect(() => {
    const parentNode = parentRef.current;
    parentNode.addEventListener('mouseenter', setActiveTrue);
    parentNode.addEventListener('touchstart', setActiveTrue);
    parentNode.addEventListener('mouseleave', setActiveFalse);
    parentNode.addEventListener('touchend', setActiveFalse);
    return () => {
      parentNode.removeEventListener('touchstart', setActiveTrue);
      parentNode.removeEventListener('mouseenter', setActiveTrue);
      parentNode.removeEventListener('mouseleave', setActiveFalse);
      parentNode.removeEventListener('touchend', setActiveFalse);
    };
  }, []);

  return (
    <div ref={parentRef} className="with-tooltip">
      {active && <div ref={ref} className={`tooltip ${positionSet ? 'active' : ''}`}>{content}</div>}
      {children}
    </div>
  )
}

export default WithTooltip;

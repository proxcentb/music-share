import './style.css';
import { useRef, useState, useEffect } from "preact/hooks";

const WithTooltip = ({ content, children }) => {
  const [active, setActive] = useState(false);
  const [positionSet, setPositionSet] = useState(false);
  const parentRef = useRef(null);
  const ref = useRef(null);
  
  useEffect(() => {
    if (!active) return;
    
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
    
    setPositionSet(true);
  }, [active]);
  
  useEffect(() => {
    const parent = parentRef.current;
    parent.addEventListener('mouseenter', () => setActive(true));
    parent.addEventListener('mouseleave', () => {
      setPositionSet(false);
      setActive(false);
    })
  }, []);

  return (
    <div ref={parentRef} className="with-tooltip">
      {active && <div ref={ref} className={`tooltip ${positionSet ? 'active' : ''}`}>{content}</div>}
      {children}
    </div>
  )
}

export default WithTooltip;

import '../style.css';

export const Emoji = ({ name, className: _className, ...restProps }) => <img {...restProps} className={`emoji ${_className ?? ''}`} />;
export const Description = ({ children }) => <div className="description">{children}</div>;
export const random = (() => {
    let counter = 1;
    return () => (Math.cos(++counter * 17) + Math.sin(++counter * 4) + 2) / 4;
})();
export const getRandomColor = () => `rgb(${[random(), random(), random()].map(v => Math.floor(v * 175 + 40)).join(', ')})`;

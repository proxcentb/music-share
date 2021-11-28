import '../style.css';

export const Emoji = ({ name, className: _className, ...restProps }) => {
  const className = `emoji ${_className ?? ''}`;

  return (
    <>
      <br />
      <img {...restProps} className={className} />
    </>
  );
}

export const Description = ({ children }) => <div className="description">{children}</div>;

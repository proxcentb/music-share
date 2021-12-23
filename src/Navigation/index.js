import {memo} from "preact/compat";
import {useContext} from "preact/hooks";
import {PageContext} from "../hooks";
import './style.css';

export default memo(({ totalPages }) => {
  const { page: activePage, setPage } = useContext(PageContext);

  return (
    <div className="navigation">
      {
        Array.from(
          { length: totalPages },
          (_, i) => <button className={i + 1 === activePage ? 'active' : ''} onClick={() => setPage(i + 1)}>{i + 1}</button>,
        )}
    </div>
  );
});

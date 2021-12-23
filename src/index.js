import Videos from "./Videos";
import Tags from "./Tags";
import Modal from "./Modal";
import Navigation from "./Navigation";
import { getVideosIdsByTagsStates } from "./config/videos";
import { useEffect, useMemo } from "preact/hooks";
import { useTags, usePage, useDidMountEffect, PageContext, TagsContext } from "./hooks";
import { memo } from "preact/compat";
import "./style";

const pageSize = 12;

const App = memo(() => {
  const { page, setPage } = usePage();
  const { tagsStates, setNextTagState, setPrevTagState } = useTags();

  const videosIdsToDisplay = useMemo(() => getVideosIdsByTagsStates(tagsStates), [tagsStates]);
  const totalPages = useMemo(() => Math.ceil(videosIdsToDisplay.length / pageSize), [videosIdsToDisplay.length]);
  const videosIdsToDisplayInPage = useMemo(() => videosIdsToDisplay.filter((_, i) => pageSize * (page - 1) <= i && i < pageSize * page), [page, videosIdsToDisplay]);

  useDidMountEffect(() => page !== 1 && setPage(1), [JSON.stringify(videosIdsToDisplay)]);
  
  // hack to scroll to top on page load
  useEffect(() => setTimeout(() => window.scrollTo(0, 0), 50), []);

  return (
    <div className="app">
      <div className="background" />
      <Modal />
      <PageContext.Provider value={{ page, pageSize, setPage }}>
        <TagsContext.Provider value={{ tagsStates, setNextTagState, setPrevTagState }}>
          <Tags />
          <Navigation totalPages={totalPages} />
          <Videos videosIds={videosIdsToDisplayInPage} />
        </TagsContext.Provider>
      </PageContext.Provider>
    </div>
	);
});

export default App;

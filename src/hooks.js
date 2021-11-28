import { tagNames } from "./config/tags";
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";

function getBooleanFromString(str) {
  switch(str) {
    case 'true': return true;
    case 'false': return false;
    default: return null;
  }
}

function defaultReducer(prevState, action) {
  switch(action.type) {
    case 'patch': return { ...prevState, ...action.payload };
    case 'replace': return action.payload;
    case 'customFn': return action.payload(prevState);
    default: return prevState;
  }
}

export function useDidMountEffect(func, deps) {
  const didMount = useRef(false);
  return useEffect(() => didMount.current ? func() : didMount.current = true, deps);
}

export function useModal() {
  const { queryParams: { skipIntro: skipIntroQueryParam }, patchQueryParams } = useQueryParams(['skipIntro']);

  const initialSkipIntro = useMemo(() => getBooleanFromString(skipIntroQueryParam), []);
  const [shouldShowModal, setShouldShowModal] = useState(!initialSkipIntro);
  const closeModal = useCallback(() => setShouldShowModal(false), []);

  const setSkipIntroTrueToQuery = useCallback(() => {
    setShouldShowModal(false);
    patchQueryParams({ skipIntro: true });
  }, [])
  
  return { shouldShowModal, closeModal, setSkipIntroTrueToQuery };
}

export function useTags() {
  const { queryParams: tagsQueryParams, patchQueryParams: patchTagsQueryParams } = useQueryParams(tagNames);
  
  const initialTags = useMemo(() => getTagsFromQueryParams(tagsQueryParams), []);
  const [tags, dispatchTags] = useReducer(defaultReducer, initialTags);
  const toggleTag = useCallback((tag) => dispatchTags({ 
    type: 'customFn', 
    payload: prevState => ({ ...prevState, [tag]: getNextTagState(prevState[tag]) }),
  }), [dispatchTags]);
  
  useDidMountEffect(() => {
    patchTagsQueryParams(getQueryParamsFromTags(tags));
  }, [tags]);
  
  return { tags, toggleTag };
}

function getNextTagState(prevState) {
  switch(prevState) {
    case true: return false;
    case false: return null
    case null: return true;
  }
}

function useQueryParams(queryParamsNames) {
  const initialQueryParams = useMemo(() => getQueryParams(queryParamsNames), [queryParamsNames]);
  const [queryParams, dispatchQueryParams] = useReducer(defaultReducer, initialQueryParams);
  const patchQueryParams = useCallback(
    (payload) => dispatchQueryParams({ type: 'patch', payload }), 
    [dispatchQueryParams]
  );
  
  useDidMountEffect(() => {
    history.pushState({}, '', getUrlWithUpdatedSearchParams(queryParams));
  }, [queryParams]);
  
  return { queryParams, patchQueryParams };
}

function getQueryParamsFromTags(tags) {
  return Object.entries(tags).reduce((acc, [key, value]) => {
    acc[key] = typeof value == "boolean" ? String(value) : undefined;
    return acc;
  }, {});
}

function getTagsFromQueryParams(queryParams) {
  return Object.entries(queryParams).reduce((acc, [key, value]) => {
    acc[key] = getBooleanFromString(value);
    return acc;
  }, {});
}

function getQueryParams(queryParamsNames) {
  const searchParams = new URLSearchParams(window.location.search);
  return queryParamsNames.reduce((acc, paramName) => {
    acc[paramName] = searchParams.get(paramName);
    return acc;
  }, {});
}

function getUrlWithUpdatedSearchParams(queryParams) {
  const url = new URL(window.location);
  Object.entries(queryParams).forEach(
    ([key, value]) => value === undefined 
      ? url.searchParams.delete(key) 
      : url.searchParams.set(key, value)
  );
  
  return url;
}

export function usePage() {
  const { queryParams: { page: pageQueryParam }, patchQueryParams } = useQueryParams(['page']);

  const initialPage = useMemo(() => getPageFromQueryParam(pageQueryParam), []);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    patchQueryParams({ page: String(page) });
  }, [page]);

  return { page, setPage };
}

function getPageFromQueryParam(str) {
  const page = Number(str);
  return !isNaN(page) && Number.isInteger(page) && page >= 1 ? page : 1;
}

import {allTagsIds} from "./config/tags";
import {useCallback, useEffect, useReducer, useRef} from "preact/hooks";
import {createContext} from "preact";

function defaultEqual(newVar, prevVar) {
  return newVar === prevVar;
}

function areObjectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function getBooleanFromString(str) {
  switch(str) {
    case 'true': return true;
    case 'false': return false;
    default: return undefined;
  }
}

function defaultReducer(prevState, action) {
  switch(typeof action) {
    case 'function': return action(prevState);
    case 'undefined': return prevState;
    default: return action;
  }
}

export function useDidMountEffect(func, deps) {
  const didMount = useRef(false);
  return useEffect(() => didMount.current ? func() : didMount.current = true, deps);
}

export function useBoolean(initialValue) {
  const [boolean, dispatchBoolean] = useReducer(defaultReducer, initialValue);
  const setBoolean = useCallback(dispatchBoolean, []);
  const setTrue = useCallback(() => dispatchBoolean(true), []);
  const setFalse = useCallback(() => dispatchBoolean(false), []);
  
  return { boolean, dispatchBoolean, setBoolean, setTrue, setFalse };
}

function useHooksSync({ dispatch, areStateAndDependencyEqual, getStateFromDependency, dependency }) {
  useDidMountEffect(() => {
    const newState = getStateFromDependency(dependency);
    dispatch(prevState => areStateAndDependencyEqual(prevState, newState) ? prevState : newState);
  }, [dependency]);
}

function useSyncDispatch({ dispatch, dispatchParent, getParentStateFromState, areParentStatesEqual }) {
  return useCallback((action) => {
    let newParentState;
    dispatch(prevState => {
      const newState = defaultReducer(prevState, action);
      newParentState = getParentStateFromState(newState);
      return newState;
    });
    dispatchParent(prevState => areParentStatesEqual(prevState, newParentState) ? prevState : newParentState);
  }, []);
}

// modal
function getShowModalFromStorageData({ skipIntro: skipIntroStr }) {
  return !(getBooleanFromString(skipIntroStr) ?? false);
}

function getStorageDataFromShowModal(showModal) {
  return typeof showModal === 'boolean' ? { skipIntro: String(!showModal) } : {};
}

export function useModal() {
  const { data: storageData, dispatchData: dispatchStorageData } = useStorageData(['skipIntro']);
  const { boolean: showModal, dispatchBoolean: dispatchShowModal, setFalse: setShowModalFalse } = useBoolean(getShowModalFromStorageData(storageData));

  const syncShowModalDispatch = useSyncDispatch({
    dispatch: dispatchShowModal,
    dispatchParent: dispatchStorageData,
    getParentStateFromState: getStorageDataFromShowModal,
    areParentStatesEqual: defaultEqual,
  });
  
  useHooksSync({
    dispatch: dispatchShowModal,
    getStateFromDependency: getShowModalFromStorageData,
    areStateAndDependencyEqual: defaultEqual,
    dependency: storageData,
  });

  const saveSkipIntroTrue = useCallback(() => syncShowModalDispatch(false), [syncShowModalDispatch]);
 
  return { showModal, setShowModalFalse, saveSkipIntroTrue };
}

// tags
const tagStates = [false, undefined, true];

export function getNextTagState(prevState) {
  const currentIndex = tagStates.indexOf(prevState);
  return tagStates[currentIndex + 1 <= tagStates.length - 1 ? currentIndex + 1 : currentIndex - 1];
}

export function getPrevTagState(prevState) {
  const currentIndex = tagStates.indexOf(prevState);
  return tagStates[currentIndex + 1 >= 0 ? currentIndex - 1 : currentIndex + 1];
}

function getQueryParamsFromTagsStates(tags) {
  return Object.entries(tags).reduce((acc, [key, value]) => {
    acc[key] = typeof value === 'boolean' ? String(value) : undefined;
    return acc;
  }, {});
}

function getTagsStatesFromQueryParams(queryParams) {
  return Object.entries(queryParams).reduce((acc, [key, value]) => {
    const result = getBooleanFromString(value);
    if (result !== undefined) acc[key] = result;
    return acc;
  }, {});
}

export function useTags(identifiers = allTagsIds) {
  const { queryParams: tagsQueryParams, dispatchQueryParams: dispatchTagsQueryParams } = useQueryParams(identifiers);
  const [tagsStates, dispatchTagsState] = useReducer(defaultReducer, getTagsStatesFromQueryParams(tagsQueryParams));
  
  const syncTagsStatesDispatch = useSyncDispatch({
    dispatch: dispatchTagsState,
    dispatchParent: dispatchTagsQueryParams,
    getParentStateFromState: getQueryParamsFromTagsStates,
    areParentStatesEqual: areObjectsEqual,
  });
  
  useHooksSync({
    dispatch: dispatchTagsState,
    areStateAndDependencyEqual: areObjectsEqual,
    getStateFromDependency: getTagsStatesFromQueryParams,
    dependency: tagsQueryParams,
  });
  
  const setNextTagState = useCallback(tag => syncTagsStatesDispatch(prevState => ({
    ...prevState,
    [tag]: getNextTagState(prevState[tag]),
  })), [syncTagsStatesDispatch]);
  
  const setPrevTagState = useCallback(tag => syncTagsStatesDispatch(prevState => ({
    ...prevState,
    [tag]: getPrevTagState(prevState[tag]),
  })), [syncTagsStatesDispatch]);

  return { tagsStates, setNextTagState, setPrevTagState };
}

// page
function getPageFromQueryParams({ page: pageStr }) {
  const page = Number(pageStr);
  return !isNaN(page) && Number.isInteger(page) && page >= 1 ? page : 1;
}

function getQueryParamsFromPage(page) {
  return { page: String(page) };
}

export function usePage() {
  const { queryParams, dispatchQueryParams } = useQueryParams(['page']);
  const [page, dispatchPage] = useReducer(defaultReducer, getPageFromQueryParams(queryParams));

  const syncPageDispatch = useSyncDispatch({
    dispatch: dispatchPage,
    dispatchParent: dispatchQueryParams,
    getParentStateFromState: getQueryParamsFromPage,
    areParentStatesEqual: areObjectsEqual,
  });
  useHooksSync({
    dispatch: dispatchPage,
    areStateAndDependencyEqual: defaultEqual,
    getStateFromDependency: getPageFromQueryParams,
    dependency: queryParams,
  });
  
  return { page, setPage: syncPageDispatch };
}

// queryParams
function getQueryParams(identifiers) {
  const searchParams = new URLSearchParams(window.location.search);
  return identifiers.reduce((acc, identifier) => {
    const queryParam = searchParams.get(identifier);
    if (queryParam !== null) acc[identifier] = queryParam;
    return acc;
  }, {});
}

function useQueryParams(identifiers) {
  const [queryParams, dispatchQueryParams] = useReducer(defaultReducer, getQueryParams(identifiers));
  
  const syncQueryParamsDispatch = useCallback(() => {
    const newQueryParams = getQueryParams(identifiers);
    dispatchQueryParams(prevState => areObjectsEqual(prevState, newQueryParams) ? prevState : newQueryParams);
  }, []);
  
  useEffect(() => {
    const setQueryParams = () => syncQueryParamsDispatch();
    window.addEventListener('popstate', setQueryParams);
    return () => window.removeEventListener('popstate', setQueryParams);
  }, []);
  
  useDidMountEffect(() => {
    const url = new URL(window.location);
    identifiers.forEach(identifier => queryParams[identifier] === undefined
      ? url.searchParams.delete(identifier)
      : url.searchParams.set(identifier, queryParams[identifier])
    );
    history.replaceState({}, '', url);
  }, [queryParams]);
  
  return { queryParams, dispatchQueryParams };
}

// storage
function getDataFromLocalStorage(identifiers) {
  return identifiers.reduce((acc, identifier) => {
    const storageItem = localStorage.getItem(identifier);
    if (storageItem !== null) acc[identifier] = JSON.parse(storageItem);
    return acc;
  }, {});
}

function useStorageData(identifiers) {
  const [data, dispatchData] = useReducer(defaultReducer, getDataFromLocalStorage(identifiers));

  const syncDataDispatch = useCallback(() => {
    const newData = getDataFromLocalStorage(identifiers);
    dispatchData(prevState => areObjectsEqual(prevState, newData) ? prevState : newData);
  }, []);
  
  useEffect(() => {
    const setData = () => syncDataDispatch();
    window.addEventListener('storage', setData);
    return () => window.removeEventListener('storage', setData);
  }, []);
  
  useDidMountEffect(() => {
    identifiers.forEach(identifier => data[identifier] === undefined
      ? localStorage.removeItem(identifier)
      : localStorage.setItem(identifier, JSON.stringify(data[identifier]))
    );
  }, [data]);

  return { data, dispatchData };
}

export const PageContext = createContext({
  page: 1,
  pageSize: 12,
  setPage: () => {},
});

export const TagsContext = createContext({
  tagsStates: {},
  setNextTagState: () => {},
  setPrevTagState: () => {},
});

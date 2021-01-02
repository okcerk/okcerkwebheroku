import { useSelector } from 'react-redux';

export const getPageConfig = (state, pageName) => state.pageConfigs.byPageId[pageName];

export const usePageConfig = (pageName) => 
    useSelector(state => getPageConfig(state, pageName)); 
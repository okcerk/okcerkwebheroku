const initialState = {
    byPageId: {}
};

export const dataConfigsReducers = function (state = initialState, action) {    
    switch (action.type) {
      case "FETCH_PAGE_CONFIG_COMPLETE":
        state.byPageId[action.pageConfigName] = action.json.items;
        break;
      case "FETCH_PAGE_CONFIG_ERROR":
        state.byPageId[action.pageConfigName] = "ERROR";
        break;       
    }
    
    return state;
  };
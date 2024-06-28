const initialState = {
  isShowSeeAllModal: false,
  isShowNewsFeedModal: false,
  modalDefaultDateFilter :'',
  widgetType: ""
};

function sharedReducer(state = initialState, action) {
  switch (action.type) {
    case "handleSeeAllModal":
      return { ...state, isShowSeeAllModal: action.payload };

    case "handleNewsFeedModal":
      return { ...state, isShowNewsFeedModal: action.payload };

    case "setWidgetType":
      return { ...state, widgetType: action.payload };

    case "setModalDefaultDateFilter":
        return { ...state, modalDefaultDateFilter: action.payload };

    default:
      return state;
  }
}

export const handleSeeAllModal = (data) => ({
  type: "handleSeeAllModal",
  payload: data
});

export const handleNewsFeedModal = (data) => ({
  type: "handleNewsFeedModal",
  payload: data
});

export const setWidgetType = (data) => ({
  type: "setWidgetType",
  payload: data
});

export const setModalDefaultDateFilter = (data) => ({
  type: "setModalDefaultDateFilter",
  payload: data
});

export default sharedReducer;

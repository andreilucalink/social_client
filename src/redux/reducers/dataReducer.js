import {
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT
} from "../types";

const initialState = {
  screams: [],
  scream: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false
      };

    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload
      };
    case LIKE_SCREAM:
      let indexLike = state.screams.findIndex(
        scream => scream.screamId === action.payload.screamId
      );
      state.screams[indexLike] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = action.payload;
        console.log(action.payload);
      }
      return {
        ...state
        /* ...state.user,
        ...state.data.screams */
      };

    case UNLIKE_SCREAM:
      let indexUnlike = state.screams.findIndex(
        scream => scream.screamId === action.payload.screamId
      );
      state.screams[indexUnlike] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = action.payload;
      }
      return {
        ...state
      };

    case DELETE_SCREAM:
      let indexDel = state.screams.findIndex(
        scream => scream.screamId === action.payload
      );
      state.screams.splice(indexDel, 1);
      return {
        ...state
      };

    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams]
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        scream: {
          ...state.scream,
          comments: [action.payload, ...state.scream.comments]
        }
      };
    default:
      return state;
  }
}

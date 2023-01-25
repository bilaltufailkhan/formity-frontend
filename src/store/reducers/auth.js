import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  userRole: localStorage.getItem("userRole"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(payload.token));
      localStorage.setItem("userId", JSON.stringify(payload.user_id));
      localStorage.setItem("userRole", JSON.stringify(payload.role));
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userRole");
      return {
        ...state,
        token: null,
        userId: null,
        userRole: null,
        isAuthenticated: false,
        loading: false,
      };
    case LOGIN_FAIL:
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("userRole");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
// import * as Actions from "../types";

// const initialState = {
//   errorEmail: null,
//   errorFirstName: null,
//   errorLastName: null,
//   error: null,
//   token: null,
//   authenticated: false,
//   statusLogout: null,
//   key: "Hamza",
//   stripeKey:
//     "pk_test_51LhsdnGCTNDeFrTZI9H9kLQWpzYfNXNFww1rUvYc4Yzh9cZaO44KQqterVrEuI0ne1w9dnGDTqsEO11yi7GCHvhn00rGEnAYLF",
//   user_id: null,
// };
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case Actions.LOGIN_SUCCESS:
//       return {
//         ...state,
//         token: action.payload.data.token,
//         authenticated: true,
//         error: null,
//         statusLogout: null,
//         user_id: action.payload.data.user_id,
//       };
//     case Actions.LOGIN_FAIL:
//       return {
//         ...state,
//         error: action.payload.message,
//         authenticated: false,
//       };
//     case Actions.REGISTER_SUCCESS:
//       return {
//         ...state,
//         token: action.payload.data.token,
//         authenticated: true,
//         error: null,
//       };
//     case Actions.REGISTER_FAIL:
//       return {
//         ...state,
//         errorEmail: action.payload.message.email,
//         errorFirstName: action.payload.message.first_name,
//         errorLastName: action.payload.message.last_name,
//         authenticated: false,
//       };
//     case Actions.LOGOUT_SUCCESS:
//       return {
//         ...state,
//         authenticated: false,
//         token: null,
//         error: null,
//         statusLogout: action.payload.status,
//       };
//     default:
//       return state;
//   }
// };

export default function users(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "EDIT_USER":
      state[action.index] = action.user;
      return [...state];
    case "REMOVE_USER":
      return state.filter((user, index) => index !== action.index);
    default:
      return state;
  }
}

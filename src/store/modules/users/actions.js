export function addUser(user) {
  return {
    type: "ADD_USER",
    user
  };
}

export function removeUser(index) {
  return {
    type: "REMOVE_USER",
    index
  };
}

export function editUser(user, index) {
  return {
    type: "EDIT_USER",
    index,
    user
  };
}

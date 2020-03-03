export default function emptyUserFields(user) {
  return user.name === "" || user.password === "" || user.login === "";
}

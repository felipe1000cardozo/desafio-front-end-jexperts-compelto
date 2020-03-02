export default function emailAlreadyExist(user, users) {
  return users.every(element => element.email !== user.email);
}

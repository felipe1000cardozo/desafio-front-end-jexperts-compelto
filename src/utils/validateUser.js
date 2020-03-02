import validateEmail from "./validateEmail";
import emptyUserFields from "./emptyUserFields";
import emailAlreadyExist from "./emailAlreadyExist";

export default function validateUser(user, users) {
  return (
    !emptyUserFields(user) &&
    validateEmail(user.email) &&
    emailAlreadyExist(user, users)
  );
}

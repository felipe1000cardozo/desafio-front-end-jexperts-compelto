import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserPlus } from "react-icons/fa";

import Alert from "../Alert";
import { addUser } from "../../store/modules/users/actions";
import validateUser from "../../utils/validateUser";
import validateEmail from "../../utils/validateEmail";
import emptyUserFields from "../../utils/emptyUserFields";
import emailAlreadyExist from "../../utils/emailAlreadyExist";

const NewUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" });
  const [canClose, setCanClose] = useState(false);

  const [alertEmpty, setAlertEmpty] = useState(false);
  const [alertExistingEmail, setAlertExistingEmail] = useState(false);
  const [alertInvalidEmail, setAlertInvalidEmail] = useState(false);

  useEffect(() => {
    validateUser(newUser, users) ? setCanClose(true) : setCanClose(false);
    setAlertEmpty(false);
    setAlertExistingEmail(false);
    setAlertInvalidEmail(false);
  }, [newUser, users]);

  const handleAddUser = (e, user) => {
    e.preventDefault();
    if (validateUser(user, users)) {
      dispatch(addUser(user));
      cleanNewUser();
    } else {
      setAlertEmpty(emptyUserFields(user));
      setAlertExistingEmail(!emailAlreadyExist(user, users));
      setAlertInvalidEmail(!validateEmail(user.email));
    }
  };

  const cleanNewUser = () => {
    setNewUser({ name: "", email: "", phone: "" });
  };

  return (
    <Fragment>
      <nav className="navbar navbar-light bg-primary ">
        <span className="navbar-brand mb-0 h1 text-white">Usuários</span>
        <div
          className="modal fade"
          id="new-user-modal"
          tabIndex="-1"
          aria-labelledby="new-user-modal-title"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Novo usuario</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={cleanNewUser}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {alertEmpty && <Alert type="incomplete" />}
              {alertExistingEmail && <Alert type="alreadyExistEmail" />}
              {alertInvalidEmail && <Alert type="invalidEmail" />}
              <div className="modal-body">
                <form>
                  {/* onSubmit={e => handleAddUser(e, newUser)} */}
                  <div className="form-group">
                    <label htmlFor="nome">Nome *</label>
                    <input
                      value={newUser.name}
                      onChange={e =>
                        setNewUser({ ...newUser, name: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Nome"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      value={newUser.email}
                      onChange={e =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login">Login *</label>
                    <input
                      value={newUser.login}
                      onChange={e =>
                        setNewUser({ ...newUser, login: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      id="login"
                      placeholder="Login"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                      value={newUser.phone}
                      onChange={e =>
                        setNewUser({ ...newUser, phone: e.target.value })
                      }
                      type="phone"
                      className="form-control"
                      id="telefone"
                      placeholder="Telefone"
                    />
                  </div>
                  <div className="form-group d-flex justify-content-end border-top">
                    <button
                      type="button"
                      className="btn btn-secondary mr-2 mt-3"
                      data-dismiss="modal"
                      onClick={cleanNewUser}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      onClick={e => handleAddUser(e, newUser)}
                      className="btn btn-primary mt-3"
                      data-dismiss={canClose && "modal"}
                    >
                      Adicionar Usuário
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary mr-3 mt-1 pl-3 border border-white"
          title="Adicionar novo usuário"
          data-toggle="modal"
          data-target="#new-user-modal"
        >
          <FaUserPlus size="20" />
        </button>
      </nav>
    </Fragment>
  );
};

export default NewUser;

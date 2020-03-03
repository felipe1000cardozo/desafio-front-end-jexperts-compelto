import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { FaUserEdit } from "react-icons/fa";
import Tooltip from "@material-ui/core/Tooltip";

import Alert from "../Alert";
import { editUser } from "../../store/modules/users/actions";
import emptyUserFields from "../../utils/emptyUserFields";
import validateEmail from "../../utils/validateEmail";

const EditUser = ({ index }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [editedUser, setEditedUser] = useState(users[index]);
  const [canClose, setCanClose] = useState(false);

  const [alertEmpty, setAlertEmpty] = useState(false);
  const [alertInvalidEmail, setAlertInvalidEmail] = useState(false);

  useEffect(() => {
    !emptyUserFields(editedUser) && validateEmail(editedUser.email)
      ? setCanClose(true)
      : setCanClose(false);
    setAlertEmpty(false);
    setAlertInvalidEmail(false);
  }, [editedUser, users]);

  const handleEdit = (e, user) => {
    e.preventDefault();
    if (!emptyUserFields(user) && validateEmail(user.email)) {
      dispatch(editUser(user, index));
    } else {
      setAlertEmpty(emptyUserFields(user));
      setAlertInvalidEmail(!validateEmail(user.email));
    }
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id={`edit-user-modal${index}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar usuário</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {alertEmpty && <Alert type="incomplete" />}
            {alertInvalidEmail && <Alert type="invalidEmail" />}
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input
                    value={editedUser.name}
                    onChange={e =>
                      setEditedUser({ ...editedUser, name: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    name="nome"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    value={editedUser.email}
                    onChange={e =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    value={editedUser.phone}
                    onChange={e =>
                      setEditedUser({ ...editedUser, phone: e.target.value })
                    }
                    type="phone"
                    className="form-control"
                    name="telefone"
                    placeholder="Telefone"
                  />
                </div>
                <div className="form-group d-flex justify-content-end border-top">
                  <button
                    type="button"
                    className="btn btn-secondary mr-2 mt-3"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    data-dismiss={canClose && "modal"}
                    onClick={e => handleEdit(e, editedUser)}
                  >
                    Editar Usuário
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Tooltip title="Editar usuário" placement="top">
        <button
          type="button"
          className="btn btn-primary mr-3 mt-1 pl-3"
          data-toggle="modal"
          data-target={`#edit-user-modal${index}`}
        >
          <FaUserEdit size="20" />
        </button>
      </Tooltip>
    </Fragment>
  );
};

export default EditUser;

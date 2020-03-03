import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";

import { FaUserTimes, FaCopy } from "react-icons/fa";
import EditUser from "../EditUser";
import { removeUser } from "../../store/modules/users/actions";

const UserList = () => {
  const [copyFeedback, setCopyFeedback] = useState(
    "Copiar o token do usuário!"
  );
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleDeleteUser = index => {
    window.confirm("Tem certeza que deseja excluir este usuário?") &&
      dispatch(removeUser(index));
  };

  const copiar = text => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopyFeedback("Copiado para área de transferência!");
      },
      () => {
        setCopyFeedback("Erro ao copiar!");
      }
    );
  };
  return (
    <div className="table-responsive p-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Login</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.login}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <EditUser index={index} />
                  <Tooltip
                    title={copyFeedback}
                    placement="top"
                    onClose={() =>
                      setCopyFeedback("Copiar o token do usuário!")
                    }
                  >
                    <button
                      className="btn btn-warning mr-3 mt-1 pl-3"
                      onClick={() => copiar(user.token)}
                    >
                      <FaCopy size="20" color="#fff" />
                    </button>
                  </Tooltip>
                  <Tooltip title="Excluir usuário" placement="top">
                    <button
                      type="button"
                      className="btn btn-danger mt-1 pl-3"
                      onClick={() => handleDeleteUser(index)}
                    >
                      <FaUserTimes size="20" />
                    </button>
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

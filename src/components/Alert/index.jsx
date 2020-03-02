import React from "react";

const Alert = ({ type }) => {
  switch (type) {
    case "incomplete":
      return (
        <div className="alert alert-danger mb-1" role="alert">
          <strong>Campos incompletos</strong> Por favor preencha todos os
          campos.
        </div>
      );
    case "alreadyExistEmail":
      return (
        <div className="alert alert-danger mb-0" role="alert">
          <strong>Email já cadastrado</strong> Por favor digite um email válido.
        </div>
      );
    case "invalidEmail":
      return (
        <div className="alert alert-danger mb-0" role="alert">
          <strong>Email inválido</strong> Por favor digite um email válido.
        </div>
      );
    default:
      return null;
  }
};

export default Alert;

// function Notification({ text, status }) {
//   switch (status) {
//     case 'info':
//       return <Info text={text} />;
//     case 'warning':
//       return <Warning text={text} />;
//     case 'error':
//       return <Error text={text} />;
//     default:
//       return null;
//   }
// }

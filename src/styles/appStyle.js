import styled from "styled-components";

export const Main = styled.main`
  margin: 68px auto;
  max-width: 1024px;
  border-radius: 6px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
  padding: 0;
  .navbar {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .table {
    thead {
      th {
        border: 0;
      }
    }
    td,
    th {
      vertical-align: middle;
    }
  }
`;

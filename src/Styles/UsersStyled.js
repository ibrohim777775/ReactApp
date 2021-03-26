import styled from "styled-components";

export const StyledDiv = styled.div`
  // color: red;
  margin-top: 50px;
  & table{
    border-collapse: collapse;
    border: 1px solid #000;
    & th{
      padding: 10px 0
    }
    & tr:hover{
      background: #334;
    }
  }
`;
import styled from "styled-components";


export const StyledDiv = styled.div`
color: red;
& form{
  width: 500px;
  & div {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 7px 10px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px 0 #f1f1f1;
  }
  & label{
    margin-right: 20px;
    font-size: 20px;
  }
  & input{
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 8px;
    outline: none;
    &:: placeholder {
      color: #000;

    }
  }

  & button {
    font-size: 20px;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
    padding: 8px 15px;
    color: red;
    border:none;
    outline: none;

    &:active {
      outline: none;
      border:none;
      background: #fff;
    }
  }
}

`;
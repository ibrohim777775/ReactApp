import styled from 'styled-components';


export const StyledForm = styled.form`
  margin-top: 50px;
  display:flex;
  flex-direction: column;
  & label{
    margin: 10px;

  }
  & input {
    padding: 5px;
    font-size: 16px;
  }
  & div {
    margin-top: 10px;
    margin-bottom: 10px;

  }
  & input[type='radio']{
    cursor: pointer;
  }
  & button{
    padding: 5px;
    font-size: 16px;
    cursor: pointer;
  }
`;
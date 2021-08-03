import styled from 'styled-components'

export const InputContainer = styled.div`
    svg {
    position: absolute;
    left: 0;
    top: 8px;
    padding: 9px 8px;
    fill: black;
    transition: 0.3s;
  }

  input:focus + svg {
    fill: dodgerBlue;
  }

  &.inputWithIcon {
    position: relative;
  }
`
export const Input = styled.input`
  height: 50px;
  font-size: 25px;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;

  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`

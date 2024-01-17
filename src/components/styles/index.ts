import styled from "styled-components";

export const Option = styled.button`
  font-size: 14px;
  font-family: monospace;

  background-color: transparent;

  &:hover {
    border: none;
    text-decoration: underline;
  }

  & svg {
    font-size: 16px;
  }

  width: 100%;
  height: 3rem;
  text-align: left;

  display: flex;

  justify-content: space-between;
  align-items: center;

  color: #8c8c8c;
`;

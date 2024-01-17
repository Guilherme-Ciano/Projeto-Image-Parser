import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 700px;
  max-width: 700px;

  max-height: 700px;

  padding: 2rem;

  border: 2px solid white;
  border-radius: 2rem;
`;

export const Navbar = styled.div`
  display: flex;

  width: 100%;

  justify-content: space-between;
  align-items: center;

  height: 2rem;

  border-bottom: 1px solid white;
`;

export const Exit = styled.a`
  color: white;

  font-size: 14px;
  font-family: monospace;

  &:hover {
    color: white;
    border: none;
    text-decoration: underline;
  }
`;

export const BottomOptions = styled.div``;

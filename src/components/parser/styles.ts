import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const WrapperUpload = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 1rem;

  padding: 4rem;

  border: 6px dashed #ffffff;
  border-radius: 2rem;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  display: flex;

  width: 10rem;

  gap: 1rem;

  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-family: monospace;

  & svg {
    font-size: 16px;
  }

  &:hover {
    background-color: #2980b9;
  }
`;

export const Output = styled.div`
  display: flex;

  height: 8.5rem;

  padding: 1rem 2rem;

  border: 6px dashed #ffffff;
  border-radius: 2rem;

  text-align: left;
  text-shadow: none;
  font-size: 14px;
  font-weight: 700;

  margin: 0;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  overflow-y: auto;
  overflow-x: hidden;
`;

import styled from "styled-components";

export const LineForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  color: white;
  font-family: Outfit, sans-serif;

  .input-form {
    font-size: 30px;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 3px solid #ffffff;
    color: white;

    @media (max-width: 1350px) {
      width: 100%;
    }
    @media (max-height: 1350px) {
      margin-top: 2%;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2%;
  margin-left: 5%;
  width: 40%;

  @media (max-width: 1350px) {
    margin: 0 auto;
    width: 80%;
  }
  @media (max-height: 500px) {
    overflow: auto;
    overflow-y: visible;
    height: 100%;
  }

  .line-form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    color: white;
    font-family: Outfit, sans-serif;
  }

  .input-form {
    font-size: 30px;s
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

  .links-form {
    text-align: center;
    font-size: 16px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: 500px) {
      font-size: 10px;
    }
    @media (max-height: 1350px) {
      top: 2%;
    }
  }
`;

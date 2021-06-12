import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 20px;

  overflow-y: auto;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  margin: 53px 0 53px 7px;

  color: #ff6978;
  font-size: 24px;
`;

export const Form = styled.form`
  padding-bottom: 38px;

  > div {
    & + div {
      margin-top: 38px;
    }
  }

  label {
    display: block;
    color: #000000;
    font-weight: bold;
  }

  input {
    height: 48px;
    width: 100%;

    margin-top: 10px;

    padding: 8px;
    border: none;
    border-radius: 10px;

    background: #fdfcfc;

    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  }

  textarea {
    height: 228px;
    width: 100%;

    margin-top: 10px;

    padding: 8px;
    border: none;
    border-radius: 10px;

    font-family: 'SF Pro', sans-serif;
    font-size: 16px;

    resize: none;

    background: #fdfcfc;

    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  }

  button {
    height: 48px;
    width: 100%;

    margin-top: 38px;

    border: none;
    border-radius: 10px;

    color: #fff;
    font-size: 24px;
    font-weight: 600;

    background: #ff6978;
  }
`;

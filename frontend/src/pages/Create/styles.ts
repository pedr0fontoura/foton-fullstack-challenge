import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 768px;

  margin: 0 auto;

  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 20px;
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
      border: 2px solid rgba(255, 0, 0, 0);
      border-radius: 10px;

      background: #fdfcfc;

      box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);

      transition: all 0.3s ease-in-out;

      &.error {
        border: 2px solid rgba(255, 0, 0, 0.8);
      }
    }
  }

  textarea {
    height: 228px;
    width: 100%;

    margin-top: 10px;

    padding: 8px;
    border: 2px solid rgba(255, 0, 0, 0);
    border-radius: 10px;

    font-family: 'SF Pro', sans-serif;
    font-size: 16px;

    resize: none;

    background: #fdfcfc;

    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);

    transition: all 0.3s ease-in-out;

    &.error {
      border: 2px solid rgba(255, 0, 0, 0.8);
    }
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

    transition: all 0.1s ease-in-out;

    &:hover {
      filter: brightness(96%);
    }

    &:active {
      filter: brightness(90%);
    }
  }
`;

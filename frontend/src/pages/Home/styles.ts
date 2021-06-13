import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 30px 0;

    color: #54565a;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;

    strong {
      color: #ff6a79;
      font-weight: 600;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 20px;

  overflow-y: auto;
  overflow-x: hidden;
`;

export const SearchWrapper = styled.div`
  height: 48px;
  width: 100%;

  flex-shrink: 0;

  display: flex;
  align-items: center;

  margin-top: 50px;
  padding: 0 15px;
  border-radius: 10px;

  background: #fdfcfc;

  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);

  svg {
    color: #dcd8d8;
  }

  input {
    height: 16px;
    width: 100%;

    margin-left: 10px;
    border: none;

    background: #fdfcfc;

    color: #000000;
    line-height: 18px;

    &::placeholder {
      color: #54565a;
    }
  }
`;

export const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: auto;

  padding: 8px 0;

  justify-content: space-between;
  row-gap: 12px;
`;

export const Card = styled(Link)`
  text-decoration: none;
  color: rgba(49, 49, 49, 0.8);

  img {
    width: 100px;
    height: 150px;

    border-radius: 5px;

    object-fit: cover;
  }

  p {
    height: 14px;

    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
  }

  span {
    height: 12px;

    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: 900;
    line-height: 12px;
  }
`;

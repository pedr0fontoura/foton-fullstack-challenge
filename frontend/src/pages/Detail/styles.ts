import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  overflow-y: auto;
  overflow-x: hidden;
`;

export const Header = styled.div`
  height: 282px;

  position: relative;

  border-radius: 0px 0px 100px 0px;

  background: #fff6e5;
`;

export const BackButton = styled(Link)`
  position: absolute;

  left: 33px;
  top: 55px;

  text-decoration: none;
  color: #000000;
`;

export const Cover = styled.figure`
  width: 153px;

  display: block;
  position: relative;

  margin: 84px auto 0 auto;

  img {
    height: 229px;
    width: 100%;

    border-radius: 5px;

    object-fit: cover;
  }

  &::after {
    content: '';

    height: 17px;
    width: 100%;

    position: absolute;
    left: 0;
    bottom: -10px;

    background: #d8d8d8;
    filter: blur(27.1828px);
  }
`;

export const Description = styled.section`
  padding: 67px 20px 0 20px;

  h1 {
    margin-bottom: 7px;

    color: #36383a;

    font-size: 24px;
    font-weight: bold;
  }

  span {
    display: block;

    margin-bottom: 10px;

    color: #ff6978;
  }

  p {
    color: rgba(49, 49, 49, 0.6);

    font-size: 14px;
    line-height: 25px;
  }
`;

export const Actions = styled.div`
  height: 56px;
  width: 335px;

  display: flex;
  align-items: center;

  margin: 0 auto 57px auto;
  border-radius: 2px;

  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);

  button {
    height: 100%;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1;

    background: none;
    border: none;

    & + button {
      &::before {
        content: '';

        height: 16px;
        width: 1px;

        position: absolute;
        left: 0;

        background: rgba(151, 151, 151, 0.2);
      }
    }

    svg {
      color: #cfcbd2;
    }

    strong {
      margin-left: 10px;

      color: #3f4043;
      font-size: 14px;
    }
  }
`;

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface ILinkProps {
  $active?: boolean;
}

export const Container = styled.div`
  height: 59px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #fff;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: none;
    outline: none;

    text-decoration: none;
    font-size: 10px;
    color: #bfbebf;

    background: none;

    &:disabled {
      cursor: default;
    }

    svg {
      margin-bottom: 8px;
    }
  }
`;

export const Link = styled(RouterLink)<ILinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  font-size: 10px;
  color: ${({ $active }) => ($active ? '#000000' : '#BFBEBF')};

  &:hover {
    color: #000000;
  }

  svg {
    margin-bottom: 8px;
  }
`;

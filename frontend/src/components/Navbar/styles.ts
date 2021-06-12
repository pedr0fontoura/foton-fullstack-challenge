import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface ILinkProps {
  $active?: boolean;
}

export const Container = styled.div`
  height: 59px;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #fff;
`;

export const Link = styled(RouterLink)<ILinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  font-size: 10px;
  color: ${({ $active }) => ($active ? '#000000' : '#BFBEBF')};

  svg {
    margin-bottom: 8px;
  }
`;

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface ILinkProps {
  active?: boolean;
}

export const Container = styled.div`
  height: 59px;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Link = styled(RouterLink)<ILinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: ${({ active }) => (active ? '#000000' : '#BFBEBF')};

  svg {
    margin-bottom: 8px;
  }
`;

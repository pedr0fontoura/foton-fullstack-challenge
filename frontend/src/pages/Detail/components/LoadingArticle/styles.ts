import styled from 'styled-components';

export const Container = styled.div`
  padding: 67px 20px 0 20px;

  div.name-skeleton {
    height: 29px;
    width: 100%;
  }

  div.author-skeleton {
    height: 19px;
    width: 60%;

    margin-top: 7px;
  }

  div.description-skeleton {
    margin-top: 20px;

    > div {
      margin-top: 20px;
    }

    > div > div {
      height: 14px;

      margin-bottom: 9px;

      &:nth-child(1) {
        width: 100%;
      }

      &:nth-child(2) {
        width: 90%;
      }

      &:nth-child(3) {
        width: 80%;
      }
    }
  }
`;

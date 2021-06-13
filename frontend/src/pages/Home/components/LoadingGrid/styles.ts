import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 187px;

  padding: 8px 0;

  justify-content: space-between;
  row-gap: 12px;

  div.img-skeleton {
    width: 100px;
    height: 150px;

    border-radius: 5px;
  }

  div.name-skeleton {
    height: 12px;
    width: 90%;

    margin-top: 4px;
    border-radius: 5px;
  }

  div.author-skeleton {
    height: 10px;
    width: 60%;

    margin-top: 8px;
    border-radius: 5px;
  }
`;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IBook } from '../../types';
import api from '../../services/api';

import { Back, Book, Headphones, Share } from '../../components/icons';

import { Shape1, Shape2, Shape3, Shape4, Shape5 } from './shapes';
import LoadingCover from './components/LoadingCover';
import LoadingArticle from './components/LoadingArticle';

import { Container, Header, BackButton, Cover, Content, Article, Actions } from './styles';

interface IRouteParams {
  id: string;
}

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState<IBook>();

  const { id } = useParams<IRouteParams>();

  useEffect(() => {
    (async () => {
      const { status, data } = await api.get<IBook>(`/books/${id}`);

      if (status !== 200) return;

      setBook(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <BackButton to="/">
            <Back />
          </BackButton>

          <Shape1 style={{ position: 'absolute', left: '47px', top: '125px' }} />
          <Shape2 style={{ position: 'absolute', left: '74px', top: '115px' }} />
          <Shape3 style={{ position: 'absolute', left: '249px', top: '86px' }} />
          <Shape4 style={{ position: 'absolute', left: '223px', top: '218px' }} />
          <Shape5 style={{ position: 'absolute', left: '298px', top: '0px' }} />

          {isLoading ? (
            <LoadingCover />
          ) : (
            <Cover>
              <img src={book?.image} alt={book?.name} />
            </Cover>
          )}
        </Header>

        {isLoading ? (
          <LoadingArticle />
        ) : (
          <Article>
            <h1>{book?.name}</h1>
            <span>{book?.author}</span>
            <p>{book?.description}</p>
          </Article>
        )}
      </Content>
      <Actions>
        <button type="button">
          <Book />
          <strong>Read</strong>
        </button>
        <button type="button">
          <Headphones />
          <strong>Listen</strong>
        </button>
        <button type="button">
          <Share />
          <strong>Share</strong>
        </button>
      </Actions>
    </Container>
  );
};

export default Detail;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { IBook } from '../../types';
import api from '../../services/api';

import { Back, Book, Headphones, Share } from '../../components/icons';

import { Shape1, Shape2, Shape3, Shape4, Shape5 } from './shapes';
import LoadingCover from './components/LoadingCover';
import LoadingArticle from './components/LoadingArticle';

import { Container, Header, BackButton, Cover, Content, Article, Actions, Message } from './styles';

interface IRouteParams {
  id: string;
}

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState<IBook>();

  const [error, setError] = useState(false);

  const { id } = useParams<IRouteParams>();

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const { data } = await api.get<IBook>(`/books/${id}`, {
          cancelToken: source.token,
        });

        setBook(data);
        setIsLoading(false);
      } catch (err) {
        if (axios.isCancel(err)) return;

        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => source.cancel();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <BackButton to="/">
            <Back />
          </BackButton>
          <Shape1 style={{ position: 'absolute', left: '12.5%', top: '44.3%' }} />
          <Shape2 style={{ position: 'absolute', left: '19.6%', top: '40.7%' }} />
          <Shape3 style={{ position: 'absolute', left: '66.2%', top: '30.5%' }} />
          <Shape4 style={{ position: 'absolute', left: '59.3%', top: '77.3%' }} />
          <Shape5 style={{ position: 'absolute', right: '0', top: '0' }} />

          {isLoading && <LoadingCover />}

          {!error && !isLoading && (
            <Cover>
              <img src={book?.image} alt={book?.name} />
            </Cover>
          )}
        </Header>

        {isLoading && <LoadingArticle />}

        {!error && !isLoading && (
          <Article>
            <h1>{book?.name}</h1>
            <span>{book?.author}</span>
            <p>{book?.description}</p>
          </Article>
        )}

        {error && <Message>Something went wrong ...</Message>}
      </Content>

      {!error && !isLoading && (
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
      )}
    </Container>
  );
};

export default Detail;

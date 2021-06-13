import { useState, useEffect } from 'react';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import { Search } from '../../components/icons';

import LoadingGrid from './components/LoadingGrid';

import { Container, Content, SearchWrapper, Grid, Card } from './styles';

interface IBook {
  id: number;
  name: string;
  author: string;
  description: string;
  image: string;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    (async () => {
      const { status, data } = await api.get<IBook[]>('/books');

      if (status !== 200) return;

      setBooks(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Content>
        <SearchWrapper>
          <Search />
          <input placeholder="Search book" />
        </SearchWrapper>

        <h1>
          Hi, <strong>Mehmed Al Fatih</strong> 👋
        </h1>

        {isLoading ? (
          <LoadingGrid />
        ) : (
          <Grid>
            {books.map(book => (
              <Card key={book.id} to={`/books/${book.id}`}>
                <img src={book.image} alt={book.name} />
                <p>{book.name}</p>
                <span>by {book.author}</span>
              </Card>
            ))}
          </Grid>
        )}
      </Content>
      <Navbar />
    </Container>
  );
};

export default Home;

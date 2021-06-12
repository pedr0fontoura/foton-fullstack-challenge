import { useState, useEffect } from 'react';
import api from '../../services/api';

import Navbar from '../../components/Navbar';

import { Search } from '../../components/icons';

import { Container, Content, SearchWrapper, Grid, Card } from './styles';

interface IBooks {
  id: number;
  name: string;
  author: string;
  description: string;
  image: string;
}

const Home = () => {
  const [books, setBooks] = useState<IBooks[]>([]);

  useEffect(() => {
    (async () => {
      const { status, data } = await api.get<IBooks[]>('/books');

      if (status !== 200) return;

      setBooks(data);
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

        <Grid>
          {books.map(book => (
            <Card key={book.id}>
              <img src={book.image} alt={book.name} />
              <p>{book.name}</p>
              <span>by {book.author}</span>
            </Card>
          ))}
        </Grid>
      </Content>
      <Navbar />
    </Container>
  );
};

export default Home;

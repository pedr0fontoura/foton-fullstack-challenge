import React, { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

import { IBook } from '../../types';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import { Search } from '../../components/icons';

import LoadingGrid from './components/LoadingGrid';

import {
  Container,
  ContentWrapper,
  Content,
  Greetings,
  SearchBox,
  Grid,
  Card,
  LoadMoreButton,
  Message,
} from './styles';

const DEFAULT_SEARCH_LIMIT = 3;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState<IBook[]>([]);

  const [isSearching, setIsSearching] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchLimit, setSearchLimit] = useState(DEFAULT_SEARCH_LIMIT);

  const [error, setError] = useState(false);

  const handleSearch = useCallback(
    debounce(async (name: string): Promise<void> => {
      setIsSearching(true);
      setIsLoading(true);

      try {
        if (name.length === 0) {
          const { data } = await api.get<IBook[]>(`/books?name_like=${name}`);
          setBooks(data);

          setIsSearching(false);
        } else {
          setSearchLimit(DEFAULT_SEARCH_LIMIT);

          const { data } = await api.get<IBook[]>(`/books?name_like=${name}&_limit=${DEFAULT_SEARCH_LIMIT}`);
          setBooks(data);
        }

        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }, 500),
    [],
  );

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(event.target.value);
    handleSearch(event.target.value);
  };

  const handleLoadMore = async () => {
    const updatedSearchLimit = searchLimit + DEFAULT_SEARCH_LIMIT;

    setIsLoading(true);

    try {
      const { data } = await api.get<IBook[]>(`/books?name_like=${searchInputValue}&_limit=${updatedSearchLimit}`);
      setBooks(data);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }

    setSearchLimit(updatedSearchLimit);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const { data } = await api.get<IBook[]>('/books', {
          cancelToken: source.token,
        });

        setBooks(data);
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
      <ContentWrapper>
        <Content>
          <SearchBox>
            <Search />
            <input type="text" placeholder="Search book" value={searchInputValue} onChange={handleSearchInputChange} />
          </SearchBox>

          <Greetings $hide={isSearching}>
            Hi, <strong>Mehmed Al Fatih</strong> 👋
          </Greetings>

          {isLoading && <LoadingGrid />}

          {!isLoading && !error && (
            <Grid>
              {books.map(book => (
                <Card key={book.id} to={`/books/${book.id}`}>
                  <img src={book.image} alt={book.name} />
                  <p>{book.name}</p>
                  <span>by {book.author}</span>
                </Card>
              ))}

              {isSearching && <LoadMoreButton onClick={handleLoadMore}>Load more ...</LoadMoreButton>}
            </Grid>
          )}

          {books.length === 0 && <Message>Looks like the bookshelf is empty ...</Message>}

          {error && <Message>Something went wrong ...</Message>}
        </Content>
      </ContentWrapper>
      <Navbar />
    </Container>
  );
};

export default Home;

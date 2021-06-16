import { useState } from 'react';

import api from '../../services/api';

import Navbar from '../../components/Navbar';

import { Container, ContentWrapper, Content, Title, Form, Message } from './styles';

interface IFormData {
  name: string;
  author: string;
  description: string;
  image: string;
}

const DEFAULT_FORM_DATA: IFormData = {
  name: '',
  author: '',
  description: '',
  image: '',
};

const Create = () => {
  const [formData, setFormData] = useState<IFormData>(DEFAULT_FORM_DATA);

  const [error, setError] = useState(false);

  const updateFormData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData(previousFormData => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    let isInvalid = false;

    if (formData.name.length === 0) {
      isInvalid = true;
      document.getElementById('name')?.classList.add('error');
    }

    if (formData.author.length === 0) {
      isInvalid = true;
      document.getElementById('author')?.classList.add('error');
    }

    if (formData.description.length === 0) {
      isInvalid = true;
      document.getElementById('description')?.classList.add('error');
    }

    if (formData.image.length === 0) {
      isInvalid = true;
      document.getElementById('image')?.classList.add('error');
    }

    if (isInvalid) return;

    setFormData(DEFAULT_FORM_DATA);

    try {
      await api.post('/books', formData);
    } catch {
      setError(true);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Content>
          {!error ? (
            <>
              <Title>Add a new book</Title>
              <Form onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={updateFormData}
                    onFocus={() => document.getElementById('name')?.classList.remove('error')}
                  />
                </div>

                <div>
                  <label htmlFor="image">Image URL</label>
                  <input
                    id="image"
                    name="image"
                    type="text"
                    value={formData.image}
                    onChange={updateFormData}
                    onFocus={() => document.getElementById('image')?.classList.remove('error')}
                  />
                </div>

                <div>
                  <label htmlFor="author">Author</label>
                  <input
                    id="author"
                    name="author"
                    type="text"
                    value={formData.author}
                    onChange={updateFormData}
                    onFocus={() => document.getElementById('author')?.classList.remove('error')}
                  />
                </div>

                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={updateFormData}
                    onFocus={() => document.getElementById('description')?.classList.remove('error')}
                  />
                </div>

                <button type="submit">Add new book</button>
              </Form>
            </>
          ) : (
            <Message>Something went wrong ...</Message>
          )}
        </Content>
      </ContentWrapper>
      <Navbar />
    </Container>
  );
};

export default Create;

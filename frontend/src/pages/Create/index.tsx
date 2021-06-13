import React, { useState } from 'react';
import api from '../../services/api';

import Navbar from '../../components/Navbar';

import { Container, Content, Title, Form } from './styles';

interface IFormData {
  name: string;
  author: string;
  description: string;
  image: string;
}

const defaultFormData: IFormData = {
  name: '',
  author: '',
  description: '',
  image: '',
};

const Create = () => {
  const [formData, setFormData] = useState<IFormData>(defaultFormData);

  const updateFormData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData(previousFormData => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    let isInvalid = false;

    if (formData.name === '') {
      isInvalid = true;
      document.getElementById('name')?.classList.add('error');
    }

    if (formData.author === '') {
      isInvalid = true;
      document.getElementById('author')?.classList.add('error');
    }

    if (formData.description === '') {
      isInvalid = true;
      document.getElementById('description')?.classList.add('error');
    }

    if (formData.image === '') {
      isInvalid = true;
      document.getElementById('image')?.classList.add('error');
    }

    if (isInvalid) return;

    await api.post('/books', formData);
  };

  return (
    <Container>
      <Content>
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
      </Content>
      <Navbar />
    </Container>
  );
};

export default Create;

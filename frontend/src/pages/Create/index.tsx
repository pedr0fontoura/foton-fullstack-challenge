import React, { useState } from 'react';

import Navbar from '../../components/Navbar';

import { Container, Title, Form } from './styles';

interface IFormData {
  name: string;
  author: string;
  description: string;
}

const defaultFormData: IFormData = {
  name: '',
  author: '',
  description: '',
};

const Create = () => {
  const [formData, setFormData] = useState<IFormData>(defaultFormData);

  const updateFormData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData(previousFormData => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
    // To-do use API
  };

  return (
    <>
      <Container>
        <Title>Add a new book</Title>
        <Form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={formData.name} onChange={updateFormData} />
          </div>

          <div>
            <label htmlFor="author">Author</label>
            <input id="author" name="author" type="text" value={formData.author} onChange={updateFormData} />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={updateFormData} />
          </div>

          <button type="submit">Add new book</button>
        </Form>
      </Container>
      <Navbar />
    </>
  );
};

export default Create;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from '../Filter';
import { Container, SubTitle, Title } from './App.styled';
import { fetchContacts } from 'redux/operations';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;

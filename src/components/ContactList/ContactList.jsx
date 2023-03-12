import { useSelector } from 'react-redux';
import { BsPersonSquare, BsPhoneFill } from 'react-icons/bs';

import Contact from 'components/ContactItem/ContactItem';
import { ContactsList, Label, Wrapper } from './ContactList.styled';
import { filteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(filteredContacts);

  return (
    <ContactsList>
      {contacts[0] && (
        <Label>
          <Wrapper>
            <i>
              <BsPersonSquare />
            </i>
            <span>Name:</span>
          </Wrapper>
          <Wrapper>
            <i>
              <i>
                <BsPhoneFill />
              </i>
            </i>
            <span>Tell:</span>
          </Wrapper>
        </Label>
      )}
      {contacts.map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} phone={phone} />
      ))}
    </ContactsList>
  );
};

export default ContactList;

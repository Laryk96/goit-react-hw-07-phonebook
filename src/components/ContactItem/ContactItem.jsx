import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  Button,
  ContactItem,
  ContactName,
  Icons,
  Wrapper,
} from './ContactItem.styled';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <Wrapper>
        <Icons>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
            alt="avatar"
            width={35}
          />
        </Icons>
        <ContactName>{name}</ContactName>
      </Wrapper>
      <span>{phone}</span>
      <Button
        type="button"
        aria-label="Delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ContactItem>
  );
};

export default Contact;

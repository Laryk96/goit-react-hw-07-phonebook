import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Label, Input, Button, Form } from './ContactForm.styled';
import isNewName from 'services/checkContactName';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const onSubmitForm = (values, { resetForm }) => {
    if (isNewName(contacts, values.name)) {
      dispatch(addContact(values));
      resetForm();
    }
  };

  const initialValues = {
    name: '',
    phone: '',
  };

  const pattern = {
    str: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    phone: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(pattern.str, 'Name must be a string')
      .min(3, 'to short, min: 3')
      .max(15, 'to long, max: 15')
      .required(),
    phone: yup.number().typeError().moreThan(12, 'fnnf').required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitForm}
    >
      <Form>
        <Label>
          <span> Name</span>
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label>
          <span> Phone</span>
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="phone" component="span" />
        </Label>
        <Button type="submit"> Add contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

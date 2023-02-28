import { Contact, Btn } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/phoneBook/phoneBookOperations';
// import { deleteContactsAction } from 'redux/phoneBook/phoneSlice';

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <Contact>
      <span>{name}</span>
      <span> {number}</span>
      <Btn onClick={() => deleteContact(id)}>Delete</Btn>
    </Contact>
  );
}

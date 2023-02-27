import { Contact, Btn } from './ContactItem.styled';
import PropTypes from 'prop-types';
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

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

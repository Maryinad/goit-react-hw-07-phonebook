import { ContactItem } from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/phoneBook/phoneBookOperations';
import { Loader } from 'components/Loader/Loader';

export function ContactList() {
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const error = useSelector(state => state.phonebook.error);

  const contacts = useSelector(state => state.phonebook.contacts);
  const value = useSelector(state => state.filterData.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(value.toLowerCase())
  );
  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <p>Ooops... something went wrong</p>}
      <ul>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, number }) => (
            <>
              <ContactItem id={id} key={id} name={name} number={number} />
              {/* <button onClick={() => onDeleteBtn(id)}>Delete</button> */}
            </>
          ))}
      </ul>
    </>
  );
}

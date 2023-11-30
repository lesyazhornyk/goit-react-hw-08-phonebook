import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Name } from 'components/ContactForm/ContactForm.styled';
import { NameItem } from 'components/ContactForm/ContactForm.styled';

export default function Contacts() {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          marginLeft: '2.5rem',
        }}
      >
        <Name>Phonebook</Name>
        <ContactForm />

        <NameItem>Contacts</NameItem>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

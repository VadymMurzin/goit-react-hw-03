import Contact from './Contact';

export default function ContactList ({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
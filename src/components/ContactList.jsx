import Contact from './Contact';
import css from './contactList.module.css';

export default function ContactList ({ contacts, onDeleteContact }) {
  return (
    <ul className={css.listStyle}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
}
import css from './contact.module.css'

export default function Contact ({ contact, onDeleteContact }) {
  const { id, name, number } = contact;
  const handleDeleteClick = () => {
    onDeleteContact(id);
  };
  return (
    <li className={css.liStyle}>
      <p className={css.pStyle}>Name: {name}</p>
      <p className={css.pStyle}>Number: {number}</p>
      <button className={css.btnStyle} onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

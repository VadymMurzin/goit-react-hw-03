export default function Contact ({ contact, onDeleteContact }) {
  const { id, name, number } = contact;
  const handleDeleteClick = () => {
    onDeleteContact(id);
  };
  return (
    <li>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

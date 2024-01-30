export default function Contact ({ contact }) {
  const { name, number } = contact;
  return (
    <li>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
    </li>
  );
}

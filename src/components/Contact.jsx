import css from './contact.module.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";


export default function Contact ({ contact, onDeleteContact }) {
  const { id, name, number } = contact;
  const handleDeleteClick = () => {
    onDeleteContact(id);
  };
  return (
    <li className={css.liStyle}>
      <p className={css.pStyle}><BsFillTelephoneFill className={css.iconStyle}/>{name}</p>
      <p className={css.pStyle}><IoMdPerson className={css.iconStyle}/>{number}</p>
      <button className={css.btnStyle} onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

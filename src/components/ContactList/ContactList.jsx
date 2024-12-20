import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts }) {
  return (
    <div>
      <ul className={s.container}>
        {contacts.map(({ id, name, number }) => {
          return <Contact key={id} name={name} number={number} />;
        })}
      </ul>
    </div>
  );
}

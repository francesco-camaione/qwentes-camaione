import EmailBtn from "../Buttons/Email";
import WhatsAppBtn from "../Buttons/WhatsApp";
import styles from "./ContactDiv.module.css"

const ContactDiv = () => {
  return (
    <div className={styles.contact_div}>
      <WhatsAppBtn />
      <EmailBtn />
    </div>
  );
};

export default ContactDiv;

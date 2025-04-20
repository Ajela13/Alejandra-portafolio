import "./Contact.css";
import Form from "../Form/Form";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h3 className="contact__title">CONTACT</h3>
      <div className="contact__content">
        <h4 className="contact__content-title">send me a message:</h4>
        <Form />
        <p className="contact__email">alejamarino123@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;

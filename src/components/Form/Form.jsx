import "./Form.css";
import emailjs from "emailjs-com";
import { useFormStore } from "../../store/formStore";

function Form() {
  const { form, status, setForm, setStatus } = useFormStore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => setStatus("Message sent!"),
        () => setStatus("Failed to send. Please try again.")
      );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__content">
        <label htmlFor="first-name" className="form__label">
          FIRST NAME*
          <input
            id="first-name"
            name="firstName"
            type="text"
            className="form__input"
            placeholder="first name"
            required
            value={form.firstName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="last-name" className="form__label">
          LAST NAME*
          <input
            id="last-name"
            name="lastName"
            type="text"
            className="form__input"
            placeholder="last name"
            required
            value={form.lastName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email" className="form__label">
          EMAIL*
          <input
            id="email"
            name="email"
            type="email"
            className="form__input"
            placeholder="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phone" className="form__label">
          PHONE
          <input
            id="phone"
            name="phone"
            type="text"
            className="form__input"
            placeholder="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </label>
      </div>

      <label htmlFor="message" className="form__label">
        MESSAGE/INQUIRY*
        <textarea
          id="message"
          name="message"
          className="form__input-message"
          placeholder="your message here..."
          required
          value={form.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="form__submit">
        SEND
      </button>
      {status && <div className="form__status">{status}</div>}
    </form>
  );
}


export default Form;

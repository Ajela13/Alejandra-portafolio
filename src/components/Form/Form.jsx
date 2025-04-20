import "./Form.css";

function Form() {
  return (
    <form className="form">
      <div className="form__content">
        <label htmlFor="first-name" className="form__label">
          FIRST NAME*
          <input
            id="first-name"
            type="text"
            className="form__input"
            placeholder="first name"
            required
          />
        </label>

        <label htmlFor="last-name" className="form__label">
          LAST NAME*
          <input
            id="last-name"
            type="text"
            className="form__input"
            placeholder="last name"
            required
          />
        </label>

        <label htmlFor="email" className="form__label">
          EMAIL*
          <input
            id="email"
            type="email"
            className="form__input"
            placeholder="email"
            required
          />
        </label>

        <label htmlFor="phone" className="form__label">
          PHONE
          <input
            id="phone"
            type="number"
            className="form__input"
            placeholder="phone"
          />
        </label>
      </div>

      <label htmlFor="message" className="form__label">
        MESSAGE/INQUIRY*{" "}
        <input
          id="phone"
          type="text"
          className="form__input-message"
          placeholder="your message here..."
          required
        />
      </label>
      <button type="submit" className="form__submit">
        SEND
      </button>
    </form>
  );
}

export default Form;

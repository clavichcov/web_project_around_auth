export function NewCard() {
  return (
    <form
      className="form--place"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="form__wrapper">
        <input
          className="form__input form__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Titulo"
          required
          type="text"
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="form__wrapper">
        <input
          className="form__input form__input_type_url"
          id="card-link"
          name="link"
          placeholder="Enlace a la imagen"
          required
          type="url"
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="form__place_submit" type="submit">
        Crear
      </button>
    </form>
  );
}
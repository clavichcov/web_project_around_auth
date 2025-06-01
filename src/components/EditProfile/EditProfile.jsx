export function EditProfile() {
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
          placeholder="Nombre"
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
          placeholder="Acerca de mí"
          required
          type="text"
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="form__place_submit" type="submit">
        Guardar
      </button>
    </form>
  );
}
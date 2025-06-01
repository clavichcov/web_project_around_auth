import { useState } from "react";
import {IMAGES} from '../../../../utils/constants.jsx';
import { Popup } from '../Popup/Popup.jsx';
import { DeleteCard } from "./DeleteCard.jsx";
import { ImagePopup } from "../../../ImagePopup/ImagePopup.jsx";
export function Card(props) {
    const { name, link } = props.card;
    const [popup, setPopup] = useState(null);
    const { onDelete, onCardClick } = props;
    const deleteCard = { title: "Eliminar tarjeta?", children: <DeleteCard onConfirm={handleDelete} /> };
    const [liked, setLiked] = useState(false);

    function handleLike() {
      setLiked(!liked);
    }
    function handleOpenPopup(popup) {
    setPopup(popup);
    }
    function handleDelete() {
      onDelete();
      setPopup(null);
      
    }
    return (
    <div className="card__container">
      <div className="card__header">
        <img 
        className="card__image" 
        src={link} 
        alt={name} 
        onClick={onCardClick}
        />
        <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={() => handleOpenPopup(deleteCard)}
        >
            <img src={IMAGES.deleteButton} alt="Eliminar" />
        </button>
        <div className="card__footer">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${liked ? 'card__like-button-active' : ''}`}
          onClick={() => handleLike()}
        />
            
      </div>
      </div>
      {popup && (
                <Popup onClose={() => setPopup(null)} title={popup.title}>
                    {popup.children}
                </Popup>
            )}
    </div>
  );
}
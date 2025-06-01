import React from 'react';
import { useState } from "react";
import {IMAGES} from '../../utils/constants.jsx';
import { Popup } from './components/Popup/Popup.jsx';
import { NewCard } from '../../components/NewCard/NewCard.jsx';
import { EditProfile } from '../../components/EditProfile/EditProfile.jsx';
import { EditAvatar } from '../../components/Avatar/EditAvatar.jsx';
import { ImagePopup } from '../../components/ImagePopup/ImagePopup.jsx';
import { cardsData } from '../../utils/constants.jsx';
import { Card } from '../Main/components/Card/Card.jsx';

export function Main() {
    const [popup, setPopup] = useState(null);
    const [cards, setCards] = useState(cardsData);
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
    const editAvatarPopup = { title: "Editar imagen de perfil", children: <EditAvatar /> };
    const [selectedCard, setSelectedCard] = useState(null);

    function handleOpenPopup(popup) {
    setPopup(popup);
    }
    function handleClosePopup() {
    setPopup(null);
    }
    function handleDeleteCard(cardId) {
        setCards(cards.filter(card => card._id !== cardId));
    }
    function handleCardClick(card) {
        setSelectedCard(card);
        setPopup({
            children: <ImagePopup name={card.name} link={card.link} />
        });
    }
    return (
        <main className="content">
                <section className="profile">
                    <div className="profile__container">
                        <div className="profile__avatar-container">
                            <img
                                src={IMAGES.profileAvatar}
                                alt="Foto o Avatar"
                                className="profile__image"
                            />
                            <div className="profile__overlay">
                                <button 
                                    aria-label="Edit Avatar"
                                    className="profile__avatar-button"
                                    id="profile__editAvatar"
                                    type="button"
                                    onClick={() => handleOpenPopup(editAvatarPopup)}
                                ></button>
                                
                            </div>
                        </div>
                        <div className="profile__info">
                            <h1 className="profile__title">Nombre</h1>
                            <button 
                                aria-label="Edit profile"
                                className="profile__edit-button"
                                id="profile__addPlace"
                                type="button"
                                onClick={() => handleOpenPopup(editProfilePopup)}
                                ></button>
                            <div className="profile__text-wrapper">
                                <p className="profile__text">Cargo</p>
                                <div className="profile__text-hidden" style={{display: "none"}}></div>
                            </div>
                        </div>
                    </div>
                    <button 
                        aria-label="Add card"
                        className="profile__addPlace" 
                        id="profile__addPlace"
                        type="button"
                        onClick={() => handleOpenPopup(newCardPopup)}
                        >
                        <img
                            src={IMAGES.addPlaceIcon}
                            alt="Agregar lugar"
                            className="profile__addIconPlace"
                        />
                    </button>
                </section> 
                <section className="elements">
                    
                        {cards.map((card) => (
                        <Card 
                        key={card._id} 
                        card={card}
                        onDelete={() => handleDeleteCard(card._id)}
                        onCardClick={() => handleCardClick(card)}
                        />
                        ))}
                    
                </section> 
                {popup && (
                    <Popup onClose={handleClosePopup} title={popup.title}>
                        {popup.children}
                    </Popup>
                )}
            </main>
    );
}
import React, { useState, useEffect } from 'react';
import './modal.css'

function ModalToast({ message, isVisible, onClose, duration = 5000 }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const intervalDuration = 50; // 50ms pour mettre à jour le pourcentage
    const percentage = (timeLeft / duration) * 100;

    useEffect(() => {
        if (timeLeft <= 0) {
            onClose(); // Ferme la modale lorsque le timer est terminé
            return;
        }

        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - intervalDuration);
        }, intervalDuration);

        return () => clearInterval(intervalId); // N'oubliez pas de nettoyer l'intervalle !
    }, [timeLeft, onClose]);

    if (!isVisible) return null;

    return (
        <div className="modal-toast">
            <span className="modal-toast-message">{message}</span>
            <button className="modal-toast-close" onClick={onClose}>&times;</button>
            <div className="modal-toast-timer" style={{ width: `${percentage}%` }}></div>
        </div>
    );
}

export default ModalToast;
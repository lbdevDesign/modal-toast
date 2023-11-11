import React, { useState, useEffect } from 'react';
import './modal.css'

function ModalToast({ message, isVisible, onClose, backgroundColor = '#199260', timerColor = '#7fca00', duration = 5000 }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const intervalDuration = 50; // 50ms pour mettre à jour le pourcentage
    const percentage = (timeLeft / duration) * 100;
    const modalStyle = {
        backgroundColor: backgroundColor,
    };
    const timerStyle = {
        width: `${percentage}%`,
        backgroundColor: timerColor,
    };


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
        <div className="modal-toast" style={modalStyle}>
            <span className="modal-toast-message">{message}</span>
            <button className="modal-toast-close" onClick={onClose}>&times;</button>
            <div className="modal-toast-timer" style={timerStyle}></div>
        </div>
    );
}

export default ModalToast;
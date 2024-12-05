import React, { useRef, useEffect } from 'react';
import './Modal.css'; // Estilos do Modal

const Modal = ({ teamName, teamLogo, onClose }) => {
  const modalRef = useRef(null); // Referência ao modal

  // Adiciona um event listener para fechar o modal se o clique for fora do modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Fecha o modal
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Detecta o clique fora
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Limpeza do evento
    };
  }, [onClose]);

  if (!teamName) return null; // Não renderiza o modal se teamName for vazio

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <img src={teamLogo} alt={`${teamName} logo`} className="modal-logo" />
        <h2>{teamName} GOOOOOL!</h2>
      </div>
    </div>
  );
};

export default Modal;

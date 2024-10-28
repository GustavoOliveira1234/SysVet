import React from 'react';
import './contatoestilo.css';
const ContactInfoPage = () => {
  return (
    <div className="contact-info-container">
      <h1>Contate a Nossa Empresa</h1>
      <p>Estamos sempre prontos para ajudar. Entre em contato através das informações abaixo:</p>

      <div className="contact-details">
        <h3>Telefone:</h3>
        <p>(11) 98765-4321</p>

        <h3>E-mail:</h3>
        <p>contato@nossaempresa.com</p>

        <h3>Endereço:</h3>
        <p>Rua das Flores, 123 - São Paulo, SP</p>

        <h3>Redes Sociais:</h3>
        <ul>
          <li><a href="https://www.facebook.com/nossaempresa" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com/nossaempresa" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/nossaempresa" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfoPage;

import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-wrapper" id="contact">
      <h2 className="contact-title">Entre em Contato</h2>
      <div className="contact-container">
        {/* Formulário */}
        <div className="contact-form-card" data-aos="fade-right">
          <h3>Envie uma mensagem</h3>
          <p>Preencha o formulário abaixo e entrarei em contato o mais breve possível.</p>
          <form action="https://formsubmit.co/paulo.fritsch2001@gmail.com" method="POST" class="contact-form">
            <div class="input-group">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div class="input-group">
              <label for="subject">Titulo do Email</label>
              <input type="text" name="subject" id="subject" required />
            </div>
            <div class="input-group">
              <label for="message">Mensagem</label>
              <textarea name="message" id="message" rows="6" required></textarea>
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>

        {/* Informações de Contato */}
        <div className="contact-info-card" data-aos="fade-left">
          <h3>Informações de Contato</h3>
          <p>Outras formas de entrar em contato comigo.</p>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>paulofritsch.contato@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <span>(55) 98427-5785</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Rio Grande do Sul, Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

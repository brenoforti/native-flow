import { useState } from 'react';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
    setStatus('Sua mensagem foi enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Entre em Contato</h1>
      <p className="page-subtitle">Agende sua aula experimental gratuita preenchendo o formulário abaixo ou entrando em contato diretamente!</p>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} maxLength={100} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} maxLength={100} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Celular</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} maxLength={25} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} maxLength={1000} required ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensagem</button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>
    </div>
  );
}

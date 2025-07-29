import { FaComments, FaUserCheck, FaBookOpen, FaRocket } from 'react-icons/fa';
import './Methodology.css';

export function Methodology() {
  return (
    <div className="page-container">
      <h1 className="page-title">Como Funcionam as Aulas?</h1>
      <p className="page-subtitle">Acredito que o aprendizado deve ocorrer de forma espontânea, natural, significativa e livre de pressões.</p>
      <div className="method-grid">
        <div className="method-item">
          <FaUserCheck className="method-icon" />
          <h3>1. Nossa Primeira Conversa</h3>
          <p>Tudo começa com uma conversa, para que eu possa compreender seus objetivos, interesses e dificuldades. Trata-se de uma parceria — o plano de aula é construído em conjunto.</p>
        </div>
        <div className="method-item">
          <FaBookOpen className="method-icon" />
          <h3>2. Aulas Feitas Para Você</h3>
          <p>Sem materiais obrigatórios. As aulas se moldam aos temas que você aprecia — como filmes, jogos, negócios ou viagens. Assim, o aprendizado acontece com leveza e autenticidade.</p>
        </div>
        <div className="method-item">
          <FaComments className="method-icon" />
          <h3>3. Foco na Conversação</h3>
          <p>O foco está totalmente na conversação, para que você possa desbloquear sua fala e aprender a usar o inglês em situações reais do dia a dia.</p>
        </div>
        <div className="method-item">
          <FaRocket className="method-icon" />
          <h3>4. Paciência e Flexibilidade</h3>
          <p>Reconheço os desafios do aprendizado de um idioma estrangeiro e me disponho a ajudar com paciência, respeitando seu ritmo e adaptando os horários conforme sua disponibilidade.</p>
        </div>
      </div>
    </div>
  );
}

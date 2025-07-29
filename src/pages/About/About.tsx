import profilePic from '../../assets/profile-placeholder.jpg';
import './About.css';

export function About() {
  return (
    <div className="page-container">
      <h1 className="page-title">Sobre mim</h1>
      <div className="about-content">
        <img src={profilePic} alt="The teacher" className="profile-image" />
        <div className="about-text">
          <h2>Olá! Eu sou o professor do Native Flow</h2>
          <p>Nascido e criado em Atlanta, Geórgia – EUA, minha paixão sempre foi conectar pessoas por meio da linguagem. Ofereço não apenas o inglês nativo, mas também a cultura e as nuances que você não encontra nos livros didáticos.</p>
          <p>Acredito que aprender um idioma deve ser uma experiência pessoal. Minha abordagem é compreender seus objetivos e interesses para criar aulas que façam sentido para você.</p>
          <p>Seja para uma viagem, trabalho ou lazer, estou aqui para ajudar você a conquistar a confiança necessária para se comunicar com o mundo.</p>
        </div>
      </div>
      <div className="testimonials-section">
        <h2 className="page-title">Feedback dos Alunos</h2>
        <div className="testimonials-wrapper">
          <div className="testimonial-card">
            <p>"As aulas são incríveis! Finalmente estou perdendo o medo de falar. A abordagem personalizada faz toda a diferença."</p>
            <span>- Maria S.</span>
          </div>
          <div className="testimonial-card">
            <p>"Um professor nativo era exatamente o que eu precisava para destravar minha pronúncia. Recomendo fortemente!"</p>
            <span>- John P.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

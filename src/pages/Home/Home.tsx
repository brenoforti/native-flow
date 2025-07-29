import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaUserTie, FaComments, FaPuzzlePiece } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Home.css';

/* Imagens do Carrousel */
const placeholderImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070'
];

export function Home( ) {
  return (
    <>
      <section className="hero-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1} navigation pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true} effect="fade" className="hero-swiper"
        >
          {placeholderImages.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Hero slide ${index + 1}`} className="hero-image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Aprenda Inglês com um Professor Nativo</h1>
            <p>Aulas Personalizadas com Foco na sua Fluência.</p>
            <a href="/contact" className="hero-button">Faça uma Aula Experimental</a>
          </div>
        </div>
      </section>
      <section className="features-container">
        <h2 className="features-title">Por que Aprender Comigo?</h2>
        <div className="cards-wrapper">
          <div className="card">
            <FaUserTie className="card-icon" />
            <h3>Nativo na Língua</h3>
            <p>Aprimore sua pronúncia, compreenda expressões culturais e fale inglês como um nativo.</p>
          </div>
          <div className="card">
            <FaPuzzlePiece className="card-icon" />
            <h3>Aulas Personalizadas</h3>
            <p>Aprenda com aulas feitas sob medida para você, com conteúdos que você ama — como séries, músicas e seus hobbies favoritos.</p>
          </div>
          <div className="card">
            <FaComments className="card-icon" />
            <h3>Foco na Conversação</h3>
            <p>Diga adeus ao medo de falar e conquiste a fluência necessária para se comunicar com confiança em qualquer situação.</p>
          </div>
        </div>
      </section>
    </>
  );
}
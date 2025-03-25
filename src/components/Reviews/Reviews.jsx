import React, { useState } from 'react';
import s from './Reviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';


const reviews = [
  {
    name: 'Мария Иванова',
    text: 'Отличная атмосфера и великолепная кухня!',
    img: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Алексей Смирнов',
    text: 'Очень вкусные блюда, буду приходить снова!',
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Светлана Коваль',
    text: 'Душевное место, приятный персонал.',
    img: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Дмитрий Орлов',
    text: 'Лучший ресторан в городе, сервис на высоте!',
    img: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Екатерина Белая',
    text: 'Незабываемые вкусы, всё очень вкусно!',
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'Игорь Морозов',
    text: 'Отличное обслуживание, вкусные блюда.',
    img: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
];

const allReviews = Array.from({ length: 30 }, (_, index) => ({
  name: `Гость ${index + 1}`,
  text: 'Очень понравилось! Обязательно вернусь снова!',
  img: `https://randomuser.me/api/portraits/lego/${index % 10}.jpg`,
  rating: (index % 3) + 1, // 1 - плохой, 2 - средний, 3 - хороший
}));

const events = [
  {
    title: 'День итальянской кухни',
    description:
      'Попробуйте лучшие итальянские блюда и насладитесь живой музыкой.',
  },
  {
    title: 'Винный вечер',
    description: 'Дегустация редких сортов вин от лучших сомелье.',
  },
];

const Reviews = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [filter, setFilter] = useState('all');

  const sendMessage = async (data) => {
    const message = `Филиал: ${data.name}
  Имя: ${data.email}`;

    const token = '7553227342:AAF-xZna0B4mkeFd3cbg0NiBsdBnMQSotDg';
    const chatID = '-4643285658';
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await axios.post(urlApi, {
      chat_id: chatID,
      text: message,
    });

    return response.data;
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsRegistered(false);
    setFormData({ name: '', email: '' });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsRegistered(true);
      setTimeout(closeModal, 2000);
      sendMessage(formData);
    }
  };

  const filteredReviews =
    filter === 'all'
      ? allReviews
      : allReviews.filter((r) => {
          if (filter === 'bad') return r.rating === 1;
          if (filter === 'average') return r.rating === 2;
          if (filter === 'good') return r.rating === 3;
        });

  return (
    <div className={s.aboutContainer}>
      <div className="container">
        <h1 className={s.title}>О нас</h1>

        {/* Блок событий */}
        <section className={s.section}>
          <h2>События</h2>
          <div className={s.events}>
            {events.map((event, index) => (
              <button
                key={index}
                className={s.event}
                onClick={() => openModal(event)}
              >
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Модальное окно */}
        {modalOpen && selectedEvent && (
          <div className={s.modalOverlay} onClick={closeModal}>
            <div
              className={s.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedEvent.title}</h2>
              <p>{selectedEvent.description}</p>
              {isRegistered ? (
                <p className={s.successMessage}>Вы успешно записаны!</p>
              ) : (
                <form onSubmit={handleSubmit} className={s.form}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <button type="submit" className={s.reserveButton}>
                    Записаться
                  </button>
                </form>
              )}
              <button className={s.closeButton} onClick={closeModal}>
                Закрыть
              </button>
            </div>
          </div>
        )}

        {/* Свайпер с отзывами */}
        <section className={s.section}>
          <h2>Отзывы</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            className={s.swiper}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className={s.reviewSlide}>
                <img
                  src={review.img}
                  alt={review.name}
                  className={s.reviewImage}
                />
                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className={s.extraReviewsSection}>
          <h2>Отзывы наших гостей</h2>
          <div>
            <button onClick={() => setFilter('all')}>Все</button>
            <button onClick={() => setFilter('bad')}>Плохие</button>
            <button onClick={() => setFilter('average')}>Средние</button>
            <button onClick={() => setFilter('good')}>Хорошие</button>
          </div>
          <div className={s.extraReviewsContainer}>
            {filteredReviews.map((review, index) => (
              <div key={index} className={s.reviewCard}>
                <img
                  src={review.img}
                  alt={review.name}
                  className={s.reviewCardImage}
                />
                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={s.buttons}>
          <Link to="/" className={s.button}>Home</Link>
          <Link to="/Work" className={s.button}>Work</Link>
          <Link to="/Information" className={s.button}>Information</Link>
          <Link to="/reviewspage" className={s.button}>Reviews</Link>
          <Link to="/servicespage" className={s.button}>Service</Link>
        </div>
        {/* 10 дополнительных карточек */}
        {/* <section className={s.extraReviewsSection}>
          <h2>Отзывы наших гостей</h2>
          <div className={s.extraReviewsContainer}>
            {extraReviews.map((review, index) => (
              <div key={index} className={s.reviewCard}>
                <img src={review.img} alt={review.name} className={s.reviewCardImage} />
                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </section> */}

        
      </div>
    </div>
  );
};

export default Reviews;

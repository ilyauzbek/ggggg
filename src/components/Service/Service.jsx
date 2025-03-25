import React from 'react';
import s from './Service.module.scss';
import { FaUtensils, FaTruck, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className={s.serviceContainer}>
      <h1 className={s.title}>О нашем сервисе</h1>
      
      <section className={s.description}>
        <p>Мы предлагаем лучшие блюда с доставкой прямо к вам домой. Высокое качество, свежие продукты и быстрый сервис — вот что делает нас особенными.</p>
      </section>
      
      <section className={s.advantages}>
        <div className={s.advantageCard}>
          <FaUtensils size={40} />
          <h3>Лучшие блюда</h3>
          <p>Мы готовим только из свежих продуктов.</p>
        </div>
        <div className={s.advantageCard}>
          <FaTruck size={40} />
          <h3>Быстрая доставка</h3>
          <p>Доставим заказ в течение 30 минут.</p>
        </div>
        <div className={s.advantageCard}>
          <FaStar size={40} />
          <h3>Отличные отзывы</h3>
          <p>Нас выбирают тысячи довольных клиентов.</p>
        </div>
      </section>
      
      <section className={s.feedbackForm}>
        <h2>Свяжитесь с нами</h2>
        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Ваше сообщение"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>

      
      <div className={s.buttons}>
          <Link to="/" className={s.button}>Home</Link>
          <Link to="/Work" className={s.button}>Work</Link>
          <Link to="/Information" className={s.button}>Information</Link>
          <Link to="/reviewspage" className={s.button}>Reviews</Link>
          <Link to="/servicepage" className={s.button}>Contacts</Link>
        </div>
    </div>
  );
};

export default Service;
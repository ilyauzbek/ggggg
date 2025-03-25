import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для кнопок
import s from './Information.module.scss';

const Information = () => {
  return (
    <>
      <div className={s.aboutContainer}>
        <div className="container">
          <div className={s.sections}>
            <h1 className={s.title}>О нас</h1>

            {/* История ресторана */}
            <section className={s.section}>
              <h2>Наша история</h2>
              <p>Мы начали с небольшой семейной кухни, и сегодня наш ресторан — это место, где традиции и инновации создают неповторимые вкусы.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaLgOPVM9C0dKQQHuGMjkdR1DkMHqO9O9tg&s" alt="История ресторана" className={s.image} />
            </section>

            {/* Команда */}
            <section className={s.section}>
              <h2>Наша команда</h2>
              <div className={s.team}>
                <div className={s.member}>
                  <img src="https://maheev.ru/upload/medialibrary/2d0/2d0ba78bc968a2d00acd40184dd42e59.jpg" alt="Шеф-повар" className={s.teamImage} />
                  <p>Джони Синс - Шеф-повар</p>
                </div>
                <div className={s.member}>
                  <img src="https://pk.i-spo.ru/photo/profession/139.jpg?t=1698756072" alt="Менеджер" className={s.teamImage} />
                  <p>Сергей Петров - Менеджер</p>
                </div>
              </div>
            </section>

            {/* Принципы */}
            <section className={s.section}>
              <h2>Наши принципы</h2>
              <ul>
                <li>Только свежие ингредиенты</li>
                <li>Высокие стандарты сервиса</li>
                <li>Аутентичные рецепты</li>
              </ul>
            </section>

            {/* Процесс приготовления */}
            <section className={s.section}>
              <h2>Как мы готовим</h2>
              <p>Мы следуем традиционным рецептам и используем современные технологии для создания уникальных блюд.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ANj9VVEmT_Hg2TM2_4G_JG6ig1Lk-0mhxA&s" alt="Процесс приготовления" className={s.image} />
            </section>

            {/* Достижения */}
            <section className={s.section}>
              <h2>Наши достижения</h2>
              <p>Мы гордимся званием лучшего ресторана в городе и сертификатами качества.</p>
              <img src="https://lh6.googleusercontent.com/proxy/7IubxolLM_5L4YnVu3_AuHjG8Yq3BtufG_gOeH4vDZ9TAc6NplAOmL8NJvy1_QaruFVQYsOYhSi-xvNLqS_7-LR2uN2ayxm3rQTFGrrk7jgUMkKwa42L0A" alt="Награды" className={s.image} />
            </section>

            {/* Отзывы */}
            <section className={s.section}>
              <h2>Отзывы наших гостей</h2>
              <div className={s.reviews}>
                <div className={s.review}>“Прекрасная атмосфера и вкусная еда!” - Мария</div>
                <div className={s.review}>“Лучший сервис и отличное меню.” - Александр</div>
              </div>
            </section>

            {/* Галерея */}
            <section className={s.section}>
              <h2>Галерея</h2>
              <div className={s.gallery}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhknXv59OHbdXfHNukb7Pgmwl_pKn4DGmVg&s" alt="Интерьер" className={s.galleryImage} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJOA5kUpQRqljsSmo1VbR_LCKcaNzdcdtIw&s" alt="Еда" className={s.galleryImage} />
                <img src="https://s3.eu-central-1.amazonaws.com/cdn-eu.jowi.club/jowi.club/ckeditor_assets/pictures/291/content_2.jpg" alt="Интерьер" className={s.galleryImage} />
                <img src="https://api.interior.ru/media/images/DESIGN/Modnoe%20Mesto/Russki_restaurant/cover_RUSKI_interior_5.jpg" alt="Интерьер" className={s.galleryImage} />
              </div>
            </section>

            {/* Контакты */}
            <section className={s.section}>
              <h2>Контакты</h2>
              <p>+7 (123) 456-78-90</p>
              <p>ул. Центральная, 10, г. Москва</p>
            </section>

          </div>
        </div>
      </div>

      {/* Кнопки навигации */}
      <div className={s.buttons}>
        <Link to="/" className={s.button}>Home</Link>
        <Link to="/work" className={s.button}>Work</Link>
        <Link to="/information" className={s.button}>Information</Link>
        <Link to="/reviewspage" className={s.button}>Reviews</Link>
        <Link to="/servicespage" className={s.button}>service</Link>
      </div>
    </>
  );
};

export default Information;

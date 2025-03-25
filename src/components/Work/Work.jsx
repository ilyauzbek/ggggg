import React from 'react'
import { Link } from 'react-router-dom';
import s from './Work.module.scss'

const Work = () => {
  const reviews = [
    { text: "Отличное место! Персонал очень дружелюбный.", author: "Анна Петрова" },
    { text: "Блюда просто восхитительны! Обязательно вернусь.", author: "Иван Сидоров" },
    { text: "Чистота и уют — на высоте. Всё понравилось!", author: "Мария Кузнецова" },
    { text: "Обслуживание на 10/10. Официанты очень внимательны.", author: "Дмитрий Иванов" },
    { text: "Пекари здесь творят чудеса! Круассаны просто волшебные.", author: "Елена Смирнова" },
    { text: "Музыка приятная, атмосфера отличная.", author: "Алексей Фролов" },
    { text: "Очень понравилась работа поваров. Еда шикарная!", author: "Ольга Васильева" },
    { text: "Обслуживание на высшем уровне! Вежливый персонал.", author: "Сергей Николаев" },
    { text: "Десерты — это нечто! Пальчики оближешь.", author: "Наталья Орлова" },
    { text: "Спасибо за теплый прием. Прекрасное заведение!", author: "Виктор Тихонов" }
  ];

  return (
    <>
      <div className={s.information}>
        <div className="container">
          <div className={s.wrap}>

          <div className={s.title}>
<img src="https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2024-02/RIA_5989648.HR_.jpg?itok=_56Vex0J" alt="" />
<h1> Официанты – связующее звено</h1>
<p>Официант – это тот, кто первым встречает гостя и делает всё, чтобы его визит в ресторан стал приятным. Он передаёт поварам заказы, следит за подачей блюд и внимательно слушает пожелания клиентов. Благодаря его труду кухня и зал работают в гармонии, а гости уходят довольными.</p>
</div>
<div className={s.title}>
<img src="https://media.istockphoto.com/id/1408797987/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%88%D0%B5%D1%84-%D0%BF%D0%BE%D0%B2%D0%B0%D1%80-%D1%83%D0%BA%D1%80%D0%B0%D1%88%D0%B0%D0%B5%D1%82-%D1%82%D0%B0%D1%80%D0%B5%D0%BB%D0%BA%D1%83-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D0%BD%D0%B0-%D0%BA%D1%83%D1%85%D0%BD%D0%B5-%D0%B2-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=WITCc-5I5LvterjUjD2SSHae7xUaAZw6LZKSNUTZBIM=" alt="" />
<h1> Повара – мастера вкуса</h1>
<p>На кухне царит суета: шипят сковороды, кипят кастрюли, звучат быстрые команды. Повара работают слаженно, как единый механизм. Каждый ингредиент проходит через их заботливые руки, превращаясь в изысканные блюда. Их цель – не просто накормить, а подарить людям удовольствие от вкуса и аромата.</p>
</div>
<div className={s.title}>
<img src="https://bryansknovosti.ru/wp-content/uploads/2019/03/csm_iStock-624489016_48d60ee8dc.jpg" alt="" />
<h1> Моющие посуду – незаметные герои кухни</h1>
<p>Без чистых тарелок, кастрюль и приборов невозможно приготовить и подать блюда. Моющие посуду работают быстро и аккуратно, поддерживая чистоту и порядок. Их вклад незаметен для клиентов, но крайне важен для всей кухни. Без них ресторан не смог бы работать слаженно.</p>
</div>
<div className={s.title}>
<img src="https://media.istockphoto.com/id/1479330210/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B5%D0%BA%D0%B0%D1%80%D1%8C-%D1%80%D0%B5%D0%BC%D0%B5%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%8F%D1%8E%D1%89%D0%B8%D0%B9-%D1%8F%D0%B9%D1%86%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%8B%D1%82%D1%8C%D1%8F-%D0%BA-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B5-%D0%B2-%D0%BD%D0%B5%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-%D0%BF%D0%B5%D0%BA%D0%B0%D1%80%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=MV_I76QmIhew42TQav6LGuudZ8gClB6eVfRMPlp-mMM=" alt="" />
<h1> Пекари – творцы утреннего уюта</h1>
<p>Каждое утро кафе наполняется ароматами свежего хлеба и выпечки. Пекари приходят раньше всех, чтобы гости могли насладиться тёплыми круассанами и воздушными булочками. Их труд требует терпения, мастерства и любви к деталям, ведь каждый кусочек выпечки должен приносить радость.

</p>
</div>
            <div className={s.work}>
              <div className="container">

                {/* Блок с отзывами */}
                <div className={s.reviews}>
                  <h2>Отзывы</h2>
                  {reviews.map((review, index) => (
                    <div key={index} className={s.reviewItem}>
                      <p>{review.text}</p>
                      <span>- {review.author}</span>
                    </div>
                  ))}
                </div>

                {/* Кнопки внизу */}
                <div className={s.buttons}>
                  <Link to="/" className={s.button}>Home</Link>
                  <Link to="/Work" className={s.button}>Work</Link>
                  <Link to="/Information" className={s.button}>Information</Link>
                  <Link to="/reviewspage" className={s.button}>Reviews</Link>
                  <Link to="/servicespage" className={s.button}>service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work

import React, { useState } from 'react';
import s from './Menu.module.scss';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Бургеры');
  const [cart, setCart] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseInt(item.price, 10), 0);
  };

  const menuData = {
    Бургеры: [
      { title: 'Мясная бомба', weight: '520г', price: '689₽', image: '/first.png' },
      { title: 'Супер сырный', weight: '512г', price: '550₽', image: 'https://primebeef.ru/images/cms/data/img_3911.jpg' },
      { title: 'Сытный', weight: '580г', price: '639₽', image: 'https://californiadiner.ru/catalog/legendarnaya-burger-bashnya.jpg' },
      { title: 'Тяжелый удар', weight: '470г', price: '480₽', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9fJG49y9mZXEQBMS8phQhLtbC6lAtOqdRQ&s' },
      { title: 'Вечная классика', weight: '450г', price: '450₽', image: 'https://ic.pics.livejournal.com/think_head/55861244/569255/569255_800.jpg' },
      { title: 'Итальянский', weight: '510г', price: '560₽', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSjSPpu_TzKTE84snfKwqfCjNTcwjNzIhoy_r4gvh6tjMx5dbS9vKqe2VVVZBWhnJDMA&usqp=CAU' },
    ],
    Закуски: [
      { title: 'Сырные начос', weight: '150г', price: '150₽', image: '/snack1.png' },
      { title: 'Картошка фри', weight: '200г', price: '300₽', image: '/snack2.png' },
      { title: 'Луковые кольцы', weight: '180г', price: '250₽', image: '/snack3.png' },
      { title: 'Нагетсы', weight: '200г', price: '220₽', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQac1KFkoijy9v9G3luMUuQ9XsE2fWOphnINA&s' },
      { title: 'Овощная нарезка', weight: '300г', price: '200₽', image: 'https://img1.russianfood.com/dycontent/images_upl/664/big_663597.jpg' },
      { title: 'Мини-сэндвичи', weight: '400г', price: '350₽', image: 'https://art-lunch.ru/content/uploads/2014/08/cheesecake-new-york-001x2-1.jpg' },
    ],
    Пицца: [
      { title: 'Маргарита', weight: '600г', price: '500₽', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1lpruKcy8C9rhAWKCcPOFuvToDRembz-oA&s' },
      { title: 'Пепперони', weight: '700г', price: '600₽', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmTokR9oczBhFWfMl2mDpKTNg1UVAxEBLIg&s' },
      { title: 'Гавайская', weight: '650г', price: '550₽', image: 'https://images.gastronom.ru/uiuEXfAtp5B4ySS3umxk9txIMXkuCpWBQDiCveAGtLY/pr:recipe-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzBmM2QyMmM1LTU5YWEtNGEzZS1iMDY3LTNlZTc0NjIwZDcxMy5qcGc' },
      { title: 'Четыре сыра', weight: '600г', price: '650₽', image: 'https://static.1000.menu/img/content-v2/b5/ac/43505/picca-na-kefire-bez-drojjei-v-duxovke_1582456791_9_max.jpg' },
      { title: 'Мясная', weight: '750г', price: '700₽', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8g-VTSZiDaSqkheMYrjZZx3X_RjWk4BPa6A&s' },
      { title: 'Овощная', weight: '650г', price: '500₽', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTec8zUfRIhICBszXhD7Fv7jAyTKRe7dkAYpQ&s' },
    ],
    'Хот-доги': [
      { title: 'Классический', weight: '200г', price: '200₽', image: '/hotdog1.png' },
      { title: 'Чили-дог', weight: '250г', price: '250₽', image: '/hotdog2.png' },
      { title: 'С сыром', weight: '230г', price: '230₽', image: '/hotdog3.png' },
      { title: 'Двойной', weight: '300г', price: '300₽', image: 'https://e2.edimdoma.ru/data/posts/0001/6493/16493-ed4_wide.jpg?1631186249 ' },
      { title: 'С беконом', weight: '250г', price: '270₽', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3-jJQSH4V4U_AjIFW7ys_Vod3g3AQTVUjArCVK06hFD8hOIGAueuBs7yibsa_Duxhu2u7gKm9_Y_iRWCNjUGU5t8zGly8xLjajaxhUFmH6CEUaQIfFF7QZSMvuonFEnLzx1Hc-b-mYMQ/s1600/DSC_0010.jpg' },
      { title: 'Веганский', weight: '220г', price: '220₽', image: 'https://mantinga.org/cache/cache_image/e/e03c849ca76e3c52f51e796c76c72ec1' },
    ],
  };

  return (
    <section className={s.burger}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.menu}>
            {Object.keys(menuData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={activeTab === tab ? s.active : ''}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={s.contentWrapper}>
            <div className={s.tabContent}>
              {menuData[activeTab].map((item, index) => (
                <div key={index} className={s.card}>
                  <img className={s.cardImage} src={item.image} alt={item.title} />
                  <div className={s.cardBody}>
                    <h2 className={s.cardTitle}>{item.title}</h2>
                    <p className={s.cardWeight}>{item.weight}</p>
                    <p className={s.cardPrice}>{item.price}</p>
                    <button className={s.cardButton} onClick={() => addToCart(item)}>Добавить</button>
                  </div>
                </div>
              ))}
            </div>

            <div className={s.cart}>
              <h2>Корзина</h2>
              {cart.length === 0 ? (
                <p>Корзина пуста</p>
              ) : (
                <>
                  <ul>
                    {cart.map((item, index) => (
                      <li key={index} className={s.cartItem}>
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                        <button className={s.removeButton} onClick={() => removeFromCart(index)}>Удалить</button>
                      </li>
                    ))}
                  </ul>
                  <p className={s.totalPrice}>Итого: {getTotalPrice()}₽</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

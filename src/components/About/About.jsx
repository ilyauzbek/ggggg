import React from 'react'
import { Link } from 'react-router-dom'
import s from './About.module.scss'

const About = () => {
  return (
    <div className={s.info}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.wrapper}>
            <div className={s.title1}>
              <img src="/logo1.png" alt="" />
              <p>Design: Anastasia Ilina</p>
            </div>
            <div className={s.title2}>
              <h1>Номер для заказа</h1>
              <p>+7(930)833-38-11</p>
            </div>
            <div className={s.title3}>
              <h1>Мы в соцсетях</h1>
              <img src="/social.png" alt="" />
            </div>

            <div className={s.buttons}>
          <Link to="/" className={s.button}>Home</Link>
          <Link to="/Work" className={s.button}>Work</Link>
          <Link to="/Information" className={s.button}>Information</Link>
          <Link to="/reviewspage" className={s.button}>Reviews</Link>
          <Link to="/servicespage" className={s.button}>Service</Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

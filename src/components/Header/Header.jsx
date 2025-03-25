import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className={s.header}>
            <div className="container">
                <div className={s.wrap}>
                    <nav className={s.nav}>
                        <div className={s.logo}>
                            <img src="/logo.png" alt="" />
                        </div>

                        <div className={s.title}>
                            <img src="/burger.png" alt="" />
                            <div className={s.help}>
                            <h1>Только самые <span><br />сочные бургеры!</span></h1>
                            <p>Бесплатная доставка от 599₽</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
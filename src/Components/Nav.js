import React, { useState } from 'react'
import '../css/nav.css'
import canadaDry from '../images/canadadry.png'

export default function Nav() {
    let language = 'eng'
    let changeLanguage = () => {}
    const [navState, setNavState] = useState('')
    const navClick = () => {
        if (navState === '') {
            setNavState('open')
            // setNavOpen('navOpen')
        } else {
            setNavState('')
            // setNavOpen('')
        }
    }

    return (
        <nav className={navState}>
            <img src={canadaDry} className='logo' alt='logo' />
            <div className='buttons'>
            <a href='./src/images/gingerale-recipe.pdf' download className='recipe'>recipe download</a>
            <select
                value={language}
                onChange={changeLanguage}
                className={`language-select ${navState}`}
            >
                <option value="english">English</option>
                <option value="french">French</option>
            </select>
            </div>
            <div className='hamburger' onClick={navClick}>
                <i className="fa fa-bars"></i>
            </div>
        </nav>
    )
}

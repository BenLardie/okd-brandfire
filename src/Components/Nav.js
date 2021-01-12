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
        <nav>
            <img src={canadaDry} className='logo' alt='logo' />
            <div className='buttons'>
            <a href='#' className='recipe'>recipe download</a>
            <select
                value={language}
                onChange={changeLanguage}
                className='language-select'
            >
                <option value="english">English</option>
                <option value="french">French</option>
            </select>
            </div>
            <div className='hamburger'>
                <i className="fa fa-bars"></i>
            </div>
        </nav>
    )
}

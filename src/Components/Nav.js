import React from 'react'
import canadaDry from '../images/canadadry.png'

export default function Nav() {
    let language = 'eng'
    let changeLanguage = () => {}
    return (
        <div>
            <img src={canadaDry} />
            <a href='#'>recipe download</a>
            <select
                value={language}
                onChange={changeLanguage}
            >
                <option value="english">English</option>
                <option value="french">French</option>
            </select>
        </div>
    )
}

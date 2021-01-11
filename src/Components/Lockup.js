import React from 'react'
import '../css/lockup.css'
import lockupEnglish from '../images/lockupenglish.png'
import ardens from '../images/english-ardens.png'


export default function Lockup() {
    return (
        <div className='lockup'>
        <img src={lockupEnglish} />
        <img src={ardens} className='ardens' />
        </div>
    )
}

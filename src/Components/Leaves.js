import React from 'react'
import '../css/leaves.css'
import leafOne from '../images/leaf1.png'
import leafTwo from '../images/leaf2.png'
import leafPile from '../images/leafpile.png'

export default function Leaves() {
    return (
        <>
            <img src={leafOne} className='leaf-one' />
            <img src={leafTwo} className='leaf-two' />
            <img src={leafPile} className='leaf-pile' />
        </>
    )
}
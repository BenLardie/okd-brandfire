import React from 'react'
import '../css/leaves.css'
import leafOne from '../images/leaf1.png'
import leafTwo from '../images/leaf2.png'
import leafPile from '../images/leafpile.png'
import plate from '../images/plate.png'

export default function Leaves() {
    return (
        <>
            <img src={leafOne} className='leaf-one' alt='leaf' />
            <img src={leafTwo} className='leaf-two' alt='leaf' />
            <img src={leafPile} className='leaf-pile' alt='leaf' />
            <img src={plate} className='plate' alt='plate' />
        </>
    )
}

import React from 'react'
import '../css/leaves.css'
import leafOne from '../images/leaf1.png'
import leafTwo from '../images/leaf2.png'
import leafPile from '../images/leafpile.png'
import plate from '../images/plate.png'

export default function Leaves() {
    return (
        <>
            <img src={leafOne} className='leaf-one' id='bg-image' alt='leaf' />
            <img src={leafTwo} className='leaf-two'id='bg-image' alt='leaf' />
            <img src={leafPile} className='leaf-pile' id='bg-image' alt='leaf' />
            <img src={plate} className='plate' id='bg-image' alt='plate' />
        </>
    )
}

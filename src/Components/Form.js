import React from 'react'
import '../css/form.css'

export default function Form() {
    const ageGroups = ['10-16', '17-29', '30-55', '55+'] 
    let ageRangeSelected = 'Age Range'
    let ageRange = () => { }

    const provinces = [{ name: 'Alberta', abbreviation: 'AB' }, { name: 'British Columbia', abbreviation: 'BC' },
    { name: 'Manitoba', abbreviation: 'MB' }, { name: 'New Brunswick', abbreviation: 'NB' }, 
    { name: 'Newfoundland and Labrador', abbreviation: 'NL' }, { name: 'Northwest Territories', abbreviation: 'NT' }, 
    { name: 'Nova Scotia', abbreviation: 'NS' }, { name: 'Nunavut', abbreviation: 'NU' }, { name: 'Ontario', abbreviation: 'ON' },
    { name: 'Prince Edward Island', abbreviation: 'PE' }, { name: 'Quebec', abbreviation: 'QC' },
    { name: 'Saskatchewan', abbreviation: 'SK' }, { name: 'Yukon Territory', abbreviation: 'YT' }]
    let province = ''
    let provinceChange = () => { }
    const flavoursArray = ['Classic', 'Boiling Hot Texas Style', 'Cranberry'] 
    let flavour = ''
    let flavourChange = () => { }
    return (
        <div className='form-box'>
            <h1>To Receive Promotional Coupons:</h1>
            <ul>
                <li><span className='list-number'>1.</span>Purchase participating specially marked Canada Dry and CPlus 12-packs and find your PIN inside the carton.</li>
                <li><span className='list-number'>2.</span>Enter your PIN below.</li>
                <li><span className='list-number'>3.</span>Click the GET YOUR COUPONS button and follow the online instructions to obtain the coupons. </li>
            </ul>    
                <form>
                <label aria-label='pin'>
                    <input type="text" name='pin' placeholder='PIN' />
                </label>
                <label aria-label='email'>
                    <input type="text" name='email' placeholder='ENTER YOUR EMAIL ADDRESS' />
                </label>
                <label aria-label="birthday">
                    <input type="date" name="birthday" className='birthday' placeholder='birthday'></input>
                </label>
                <select
                    className='age-groups'
                    value={ageRangeSelected}
                    onChange={ageRange}
                >
                    <option defaultValue="selected">Age Range</option>
                        {ageGroups.map(age => <option value={age} key={age}>{age}</option>)}
                </select>
                <select
                    value={province}
                    onChange={provinceChange}
                >
                    <option defaultValue="selected">Province/Territory</option>
                    {provinces.map(prov => {
                        return(
                        <option value={prov.abbreviation} key={prov.abbreviation}>{prov.name}</option>
                        )
                    })}
                </select>
                <select
                    value={flavour}
                    onChange={flavourChange}
                >
                    <option defaultValue="selected">What is Your Preferred Flavour?</option>
                    {flavoursArray.map(flav => {
                        return(
                        <option value={flav} key={flav}>{flav}</option>
                        )
                    })}
                </select>
                <input type="submit" value="Submit" />
                </form>
        </div>
    )
}

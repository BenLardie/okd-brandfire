import React from 'react'
import '../css/form.css'

export default function Form() {

    let pin = ''
    let email = ''

    const textChange = (e) => {
        if (e.target.name === 'pin') {
            pin = e.target.value
        } if (e.target.name === 'email') {
            email = e.target.value
        }
    }
    const ageGroups = ['10-16', '17-29', '30-55', '55+'] 
    let ageRangeSelected = 'Age Range'
    let ageRange = (e) => ageRangeSelected = e.target.value

    const provinces = [{ name: 'Alberta', abbreviation: 'AB' }, { name: 'British Columbia', abbreviation: 'BC' },
    { name: 'Manitoba', abbreviation: 'MB' }, { name: 'New Brunswick', abbreviation: 'NB' }, 
    { name: 'Newfoundland and Labrador', abbreviation: 'NL' }, { name: 'Northwest Territories', abbreviation: 'NT' }, 
    { name: 'Nova Scotia', abbreviation: 'NS' }, { name: 'Nunavut', abbreviation: 'NU' }, { name: 'Ontario', abbreviation: 'ON' },
    { name: 'Prince Edward Island', abbreviation: 'PE' }, { name: 'Quebec', abbreviation: 'QC' },
    { name: 'Saskatchewan', abbreviation: 'SK' }, { name: 'Yukon Territory', abbreviation: 'YT' }]
    let province = ''
    let provinceChange = (e) => province = e.target.value
    const flavoursArray = ['Classic', 'Boiling Hot Texas Style', 'Cranberry'] 
    let flavour = ''
    let flavourChange = (e) => flavour = e.target.value


    let emailOffersPrefrence = false
    let termsAgreed = false
    
    const checkBox = (e) => {
        if (e.target.value === 'emailOffers'){
            emailOffersPrefrence = e.target.checked
        } if (e.target.value === 'terms'){
            termsAgreed = e.target.checked
        }
    }

    const submitClick = (e) => {
        alert(`form submitted pin: ${pin}
        email: ${email}
        age range: ${ageRangeSelected}
        province: ${province}
        flavour: ${flavour}
        email offers: ${emailOffersPrefrence}
        terms agreed: ${termsAgreed}`)
    }
    return (
        <div className='form-box'>
            <h1>To Receive Promotional Coupons:</h1>
            <ul className='rules'>
                <li><span className='list-number'>1.</span> Purchase participating specially marked Canada Dry and CPlus 12-packs and find your PIN inside the carton.</li>
                <li><span className='list-number'>2.</span> Enter your PIN below.</li>
                <li><span className='list-number'>3.</span> Click the GET YOUR COUPONS button and follow the online instructions to obtain the coupons. </li>
            </ul>    
                <form>
                <label aria-label='pin'>
                    <input type="text" name='pin' onChange={textChange} placeholder='PIN*' required='required' />
                </label>
                <label aria-label='email'>
                    <input type="text" name='email' placeholder='ENTER YOUR EMAIL ADDRESS' />
                </label>
                <label aria-label="birthday">
                    <input type="date" name="birthday" className='birthday' placeholder='Birthday'></input>
                </label>
                <select
                    className='age-groups'
                    value={ageRangeSelected}
                    onChange={ageRange}
                >
                    <option>Age Range</option>
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
                <p className='mandatory'>*Mandatory Feild</p>
                <input type="checkbox" id="terms" name="terms" value="terms" className='checkbox' required='required' onChange={checkBox} />
                <label htmlFor="terms"> *I have read, understood and agree to the<span>Terms of Use</span> and Privacy Policy.</label>
                <br></br>
                <input type="checkbox" name="email offers" value="emailOffers" className='checkbox' onChange={checkBox} />
                <label htmlFor="email"> By checking this box, you can receive the latest email offers and communications from Canada Dry Mott’s Inc. You can unsubscribe at any time..</label>
                <input type="submit" className='submit' value="GET YOUR COUPON" onClick={submitClick} />
                </form>
                <p className='tm'>™Trademark of Food Banks Canada used under licence. All other trademarks are the property of their respective owners.
©2019 Canada Dry Mott’s Inc. All Rights Reserved.</p>
        </div>
    )
}

import React from 'react'
import '../css/form.css'

export default function Form() {
    let ageRangeSelected = 'Age Range'
    let ageRange = () => {}

    let province = ''
    let provinceChange = () => {}

    let flavour = ''
    let flavourChange = () => {}
    return (
        <div className='form-box'>
            <h1>To Receive Promotional Coupons:</h1>
            <ul>
                <li><span className='list-number'>1.</span>Purchase participating specially marked Canada Dry and CPlus 12-packs and find your PIN inside the carton.</li>
                <li><span className='list-number'>2.</span>Enter your PIN below.</li>
                <li><span className='list-number'>3.</span>Click the GET YOUR COUPONS button and follow the online instructions to obtain the coupons. </li>
                <label aria-label='pin'>
                    <input type="text" name='pin' placeholder='PIN' />
                </label>
                <label aria-label='email'>
                    <input type="text" name='email' placeholder='ENTER YOUR EMAIL ADDRESS' />
                </label>
                <label aria-label="birthday">
                    <input type="date" name="birthday" placeholder='birthday'></input>
                </label>
                <select
                value={ageRangeSelected}
                onChange={ageRange}
                >
                <option selected="selected">Age Range</option>
                <option value="">16-20</option>
                <option value="20/32">20-32</option>
                <option value="33/66">33-66</option>
                <option value="66+">66+</option>
            </select>
            <select
                value={province}
                onChange={provinceChange}
                >
                <option selected="selected">Province/Territory</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NFL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="ON">Ontario</option>
                <option value="PEI">Prince Edward Island</option>
                <option value="QU">Quebec</option>
                <option value="SASK">Saskatchewan</option>
                <option value="NWT">Northwest Territories</option>
                <option value="NVT">Nunavut</option>
                <option value="YT">Yukon</option>
            </select>
            <select
                value={flavour}
                onChange={flavourChange}
                >
                <option selected="selected">What is Your Preferred Flavour?</option>
                <option value="cheese">Cheese</option>
                <option value="bacon">Bacon</option>
                <option value="hot">Hot</option>
            </select>
                <input type="submit" value="Submit" />
            </ul>
        </div>
    )
}

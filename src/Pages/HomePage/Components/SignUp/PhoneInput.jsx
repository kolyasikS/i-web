import React, {useRef, useState} from 'react';
import CustomInput from "../../../../Widgets/CustomInput/CustomInput";
import '../../../../Widgets/CustomInput/CustomInput.scss';
import InputMask from "react-input-mask";
import getNewMask from "../../StaticData/PhoneMask";

const defaultPhoneValue = '+_(___)___-____';

const PhoneInput = () => {
    const [mask, setMask] = useState('+9(999)999-9999');
    const identifyMask = (e) => {
        const value = e.target.value;
        let digits = e.target.value.split('').filter(sym => sym >= '0' && sym <= '9').join('');
        if (digits.length > 6) {
            return;
        }
        let newMask = getNewMask(digits);
        let validNewMask = newMask.replaceAll('#', '9').replaceAll(/[0-9]/g, '9');

        console.log(value, digits, newMask, validNewMask);
        setMask(validNewMask);
    }
    return (
        <div className={'input__block'}
             style={{width: '100%', height: '45px', margin: '0 0 30px 0'}}>
            <InputMask id={'phone-input'} placeholder={' '}
                   className={'input'} mask={mask}
                   style={{color: '#fff'}} onChange={identifyMask}
                   alwaysShowMask={true}
            />
                <label htmlFor={'phone-input'}
                          className={'label'}
                          style={{backgroundColor: 'inherit'}}
                >
                    Phone
                </label>
        </div>
    );
};

export default PhoneInput;
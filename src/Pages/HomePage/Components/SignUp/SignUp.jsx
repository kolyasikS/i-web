import React, {useState} from 'react';
import CustomInput from "../../../../Widgets/CustomInput/CustomInput";
import './SignUp.scss';
import chefImg from '../../../../Assets/images/chef.webp';
import PhoneInput from "./PhoneInput";

const SignUp = ({open, setOpen}) => {

    return (
        <div className={`signUp-wrapper ${open ? 'open' : ''}`}>
            <div className={`signUp-container ${open ? 'open' : ''}`}>
                <a className={'closed-btn'} onClick={() => setOpen(false)}>close</a>
                <div className={'signUp-img'}>
                    <img src={chefImg} alt=""/>
                </div>
                <div className={'signUp-form'}>
                    <h2>sign up for a free consultation!</h2>
                    <form className={'form'}>
                        <CustomInput color={'#fff'} margin={'0 0 30px 0'}
                                     width={'100%'}
                                     bgColor={'inherit'}>Name</CustomInput>
                        <PhoneInput/>
                        <button className={'submit-btn'}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p>submit</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
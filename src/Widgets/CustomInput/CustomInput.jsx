import React from 'react';
import './CustomInput.scss';

const CustomInput = ({children, id, width = 250, height = 45,
                     value, onChange, placeholder, bgColor, margin, onClick,
                     color, paddingY, paddingX, defaultValue}) => {
    return (
        <div className={'input__block'}
             style={{width: width, height: height, margin}}>
            <input id={id} placeholder={placeholder || ' '} value={value} onClick={onClick}
                   className={'input'} onChange={onChange} defaultValue={defaultValue}
                   style={{color, paddingBottom: paddingY, paddingTop: paddingY,
                       paddingLeft: paddingX, paddingRight: paddingX}}
            />
            {placeholder
                || <label htmlFor={id}
                          className={'label'}
                          style={{backgroundColor: bgColor}}
                >
                    {children}
            </label>}
        </div>
    );
};

export default CustomInput;
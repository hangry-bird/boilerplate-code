import styled, { css } from 'styled-components';


interface InputProps {
    isValidError?: boolean;
    disabled?: boolean;
}

// autoComplete: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
const Input = styled.input<InputProps>`
    display: block;
    padding: 12px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    color: #999999;
    border: 1px solid
        ${({ isValidError, disabled }) =>
            disabled ? "#f6f7f9" : 
            isValidError ? "#ff7900" : "#e7e7e7"};
    border-radius: 5px;
    background: ${({ isValidError, disabled }) =>
        disabled ? "#f6f7f9" : 
        isValidError ? "#fff2e6" : "#ffffff"};
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    :focus,
    :hover {
        ${({ disabled }) =>
            !!disabled === false && 
            css`
                outline: none;
                border: 1px solid yellow;
                -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
            `
        }}
    ::placeholder {
        color: #cecece;
        font-size: 14px;
        letter-spacing: 0;
    }
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        border: 1px solid yellow;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        transition: background-color 5000s ease-in-out 0s;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
`;
export default Input;
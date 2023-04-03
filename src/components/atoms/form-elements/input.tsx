import styled, { css } from 'styled-components';

export interface InputProps {
    readOnly?: boolean;
    placeholder?: string;
    disabled?: boolean;
    isFilled?: boolean;
    isValidError?: boolean;

    height?: string;
    padding?: string;
    color?: string;
}

// autoComplete: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
const Input = styled.input<InputProps>`
    display: block;

    width: 100%;
    height: 100%;
    /* height: ${({ height }) => height || "32px"}; */
    padding: ${({ padding }) => padding || "6px"};

    font-size: 13px;
    font-weight: 400;
    border: 1px solid #D9D9D9;
    border-radius: 6px;
    outline: none;


    :hover{
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
    }

    :focus{
        ${({ disabled, isValidError, readOnly }) => 
        (!!disabled === false && !!isValidError === false && !!readOnly === false) && 
        css`
            border: 1px solid ${(props) => props.theme.colors.yellow};
            -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        `}
    }

    color: ${({ theme, color }) => color || theme.colors.black};

    ::placeholder {
        color: #CCCCCC;
    }

    ${({ disabled }) => 
        disabled && 
        css`
            border: 1px solid ${({ theme }) => theme.colors.gray100};
            background-color: ${({ theme }) => theme.colors.gray50};
            color: ${({ theme }) => theme.colors.gray300};
        `
    }

    ${({ isValidError }) => 
        isValidError && 
        css`
            border: 1px solid ${({ theme }) => theme.colors.red400};
            background-color: ${({ theme }) => theme.colors.red50};
            color: ${({ theme }) => theme.colors.darkYellow};
        `
    }

    ${({ isFilled }) => 
        isFilled && 
        css`
            /* border: 1px solid ${({ theme }) => theme.colors.red400}; */
            background-color: ${({ theme }) => theme.colors.yellow50};
            color: ${({ theme }) => theme.colors.darkYellow};
        `
    }

    ${({ readOnly }) =>
        readOnly &&
        css`
            /* border: 1px solid ${({ theme }) => theme.colors.red400}; */
            background-color: ${({ theme }) => theme.colors.gray50};
            color: ${({ theme }) => theme.colors.gray500};
        `
    }

`;
export default Input;
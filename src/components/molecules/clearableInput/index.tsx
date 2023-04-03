import React from 'react';
import styled, { css } from 'styled-components';

// atoms
import Input, { InputProps } from '@components/atoms/form-elements/input'
// import ClearButton from 'components/atoms/clearButton'
// import ClearInputIcon from '@components/atoms/icons/clearInput'


export interface ClearableInputProps extends InputProps {
    value: string;
    color?: string;
    readonly?: boolean;
    isClearButton?: boolean;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onClickClearButton?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
const ClearableInput = ({
    value,
    readOnly=false,
    isClearButton=true,
    onFocus,
    onBlur,
    onChange,
    onKeyDown,
    onClickClearButton,
    ...rest
}: ClearableInputProps) => {
    return(
        <ClearableInputWrap>
            <Input 
                aria-label={"clearable-input"}
                readOnly={readOnly}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                onChange={onChange}
                {...rest}
            />
            {
                isClearButton &&
                <ClearButtonWrap onClick={onClickClearButton}>
                    {/* <ClearInputIcon /> */}
                </ClearButtonWrap>
            }
        </ClearableInputWrap>
    )
}
export default ClearableInput;


const ClearableInputWrap = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
`
const ClearButtonWrap = styled.div`
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translate(0, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;

    cursor: pointer;
`
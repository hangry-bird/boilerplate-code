import React from 'react';
import styled from 'styled-components';

// atoms
import Input from "@components/atoms/input";
import ClearButton from "@components/atoms/clearButton"


export interface ClearableInputProps {
    value: string;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    onClickClearButton?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
const ClearableInput = ({
    value,
    onFocus,
    onBlur,
    onChange,
    onClickClearButton
}: ClearableInputProps) => {

    return(
        <ClearableInputWrap>
            <Input 
                value={value} 
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange} 
            />
            {
                value.length > 0 &&
                <ClearButtonWrap>
                    <ClearButton onClick={onClickClearButton} />
                </ClearButtonWrap>
            }
        </ClearableInputWrap>
    )
}
export default ClearableInput;


const ClearableInputWrap = styled.div`
    position: relative;

    width: auto;
    height: auto;
`
const ClearButtonWrap = styled.div`
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translate(0, -50%);

    width: auto;
    height: auto;
`
import React from 'react';
import styled from 'styled-components';


type ClearButtonTypes = {
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
const ClearButton = ({ onClick }: ClearButtonTypes) => {
    return(
        <ClearButtonStyle onClick={onClick}>x</ClearButtonStyle>
    )
}
export default ClearButton;


const ClearButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 16px;
    height: 16px;

    color: white;
    font-weight: 700;
    border-radius: 50%;
    background-color: black;
    
    cursor: pointer;
`
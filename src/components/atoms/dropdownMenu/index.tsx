import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// images
import CheckIcon from "@images/search.svg";


type SelectBoxProps = {
    isSelected?: boolean;
    bold?: boolean;
    children?: string;
    onClick?: () => void;
}
const SelectBox = ({
    bold,
    children = "",
    isSelected = false,
    onClick = () => { }
}: SelectBoxProps) => {

    return (
        <SelectBoxWrap
            bold={bold}
            isSelected={isSelected}
            onClick={() => onClick()}
        >
            <CheckedWrap>
                {isSelected && <img src={CheckIcon} alt="search icon" />}
            </CheckedWrap>

            <TextWrap>{children}</TextWrap>
        </SelectBoxWrap>
    );
};
export default SelectBox;


type SelectBoxWrapProps = {
    bold?: boolean;
    isSelected?: boolean;
}
const SelectBoxWrap = styled.li<SelectBoxWrapProps>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 26px;
  padding: 6px 4px;

  font-size: 13px;
  font-weight: ${({ bold }) => bold && "700"};
  font-weight: ${({ isSelected }) => isSelected && "700"};
  border-radius: 4px;
  background-color: #FFFFFF;
  cursor: pointer;

  :hover{
    background-color: #FFFBE5;
  }
`;
const TextWrap = styled.div`
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`
const CheckedWrap = styled.div`
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  
  /* margin-left: 4px; */
  margin-right: 6px;
`
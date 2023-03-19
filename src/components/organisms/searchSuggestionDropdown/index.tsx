import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// atoms
import ClearableInput, { ClearableInputProps } from '@components/molecules/clearableInput'
import SearchResultBox from '@components/molecules/searchResultBox'


interface SearchSuggestionDropdownProps extends ClearableInputProps {
    searchArray: string[];
    maxLength?: number;
    onClickSearchResult?: (element: string) => void;
}
const SearchSuggestionDropdown = ({
    value,
    searchArray,
    maxLength = 5,
    onChange,
    onClickSearchResult,
    onClickClearButton
}: SearchSuggestionDropdownProps) => {
    const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

    const [searchResults, setSearchResults] = useState<string[]>([]);

    useEffect(() => {
        if (value.length === 0) {
            setSearchResults([])
        }
    }, [value])

    // 디바운스 적용 필요?
    useEffect(() => {
        if (value.length === 0 || searchArray.length === 0) 
            return
        setSearchResults(findMatchingValues(value, searchArray, maxLength))
    }, [value, searchArray])

    useEffect(() => {
        console.log(searchResults)
        if(searchResults.length){
            setIsDropDownOpen(true)
        }
        else{
            setIsDropDownOpen(false)
        }
    }, [searchResults])

    // isInputFocus가 true로 바뀌었을 때
    useEffect(() => {
        if(isInputFocus){
            if(value.length && searchArray.length){
                setIsDropDownOpen(true);
            }
        }
    }, [isInputFocus])

    const handleFocus = (_: React.FocusEvent<HTMLInputElement>) => {
        setIsInputFocus(true)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const relatedTarget = event.relatedTarget;  // 초점이 맞춰진 요소

        // result -> li element
        if((relatedTarget instanceof HTMLLIElement) === false){
            setIsInputFocus(false)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setIsInputFocus(true)

        if (event.key === 'ArrowDown' && searchResults.length){
            setIsDropDownOpen(true);
        }
    };

    return (
        <SearchInputArea>
            <ClearableInput
                value={value}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                onClickClearButton={onClickClearButton}
            />

            {
                // Focus 상태이면서 검색 결과 값이 1개 이상일 때
                (isInputFocus && isDropDownOpen) &&

                <SearchResultBox
                    word={value}
                    targetList={searchResults}
                    onClickBox={(str) => { 
                        onClickSearchResult?.(str);

                        setIsInputFocus(false);
                        setIsDropDownOpen(false);
                    }}
                />
            }
        </SearchInputArea>
    )
}
export default SearchSuggestionDropdown;


const findMatchingValues = (word: string, arr: string[], maxLength: number): string[] => {
    const result = [];

    for (let str of arr) {
        if (str.includes(word)) {
            result.push(str);

            if (result.length >= maxLength) break;
        }
    }
    return result;
}

const SearchInputArea = styled.div`
    position: relative;

    width: auto;
    height: auto;
`

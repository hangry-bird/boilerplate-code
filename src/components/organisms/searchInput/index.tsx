import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// atoms
import ClearableInput, { ClearableInputProps } from '@components/molecules/clearableInput'


interface SearchInputProps extends ClearableInputProps {
    searchArray: string[];
    onClickElement?: (element: string) => void;
}
const SearchInput = ({
    value,
    searchArray,
    onClickElement,
    onChange,
    onClickClearButton
}: SearchInputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<string[]>([]);

    useEffect(() => {
        if (value.length === 0) {
            setSearchResults([])
        }
    }, [value])

    useEffect(() => {
        if (value.length && searchArray.length) {
            setSearchResults(findFiveMatchingValues(value, searchArray))
        }
    }, [value, searchArray])

    const handleFocus = (_: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(true)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const relatedTarget = event.relatedTarget;  // 초점이 맞춰진 요소

        // result -> li element
        if((relatedTarget instanceof HTMLLIElement) === false){
            setIsFocus(false)
        }
    }

    return (
        <SearchInputArea>
            <ClearableInput
                value={value}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={onChange}
                onClickClearButton={onClickClearButton}
            />

            {
                // Focus 상태이면서 검색 결과 값이 1개 이상일 때
                (isFocus && searchResults.length > 0) &&
                <ResultsWrap>
                    {
                        searchResults.map(str => {
                            return (
                                <ResultBox
                                    key={str}
                                    tabIndex={-1}
                                    onClick={() => { onClickElement?.(str); setIsFocus(false); }}
                                >
                                    {str}
                                </ResultBox>
                            )
                        })
                    }
                </ResultsWrap>
            }
        </SearchInputArea>
    )
}
export default SearchInput;


const findFiveMatchingValues = (word: string, arr: string[]): string[] => {
    const result = [];

    for (let str of arr) {
        if (str.includes(word)) {
            result.push(str);

            if (result.length >= 5) break;
        }
    }
    return result;
}


const SearchInputArea = styled.div`
    position: relative;

    width: auto;
    height: auto;
`
const ResultsWrap = styled.ul`
    position: absolute;
    z-index: 1;

    width: 100%;
    height: auto;

    border: 1px solid gray;
    border-radius: 4px;
    background-color: white;
`
const ResultBox = styled.li`
    display: flex;
    align-items: center;

    width: 100%;
    height: 36px;
    padding-left: 4px;

    cursor: pointer;

    :hover {
        background-color: #f9fafb;
    }
`

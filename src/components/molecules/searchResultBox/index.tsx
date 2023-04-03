import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// atoms
import Span from '@src/components/atoms/form-elements/span'


type SearchResultBoxTypes = {
    targetList: string[];
    word: string;
    onClickBox?: (element: string) => void;
}
const SearchResultBox = ({
    word = "",
    targetList = [],
    onClickBox
}: SearchResultBoxTypes) => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [hoveredIndex, targetList])

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowUp') {
            setHoveredIndex(index => index === null ? 0 : changeIndexCalc(index - 1, targetList.length - 1));
        } else if (event.key === 'ArrowDown') {
            setHoveredIndex(index => index === null ? 0 : changeIndexCalc(index + 1, targetList.length - 1));
        } else if (event.key === 'Enter' && hoveredIndex !== null) {
            onClickBox?.(targetList[hoveredIndex]);
        }
    };

    return (
        <ResultsWrap>
        {
            targetList.map((targetStr, index) => {
                const matchIndex = targetStr.indexOf(word);

                return (
                    <ResultBox
                        key={targetStr}
                        tabIndex={-1}
                        onMouseOver={() => setHoveredIndex(index)}
                        onClick={() => { onClickBox?.(targetStr); }}
                        isHover={index === hoveredIndex}            
                    >
                        {
                            matchIndex < 0 ?
                            <Span>{targetStr}</Span> :
                            <HighlightSpanWrap
                                str={targetStr}
                                searchWord={word}
                                index={matchIndex}
                            />
                        }
                    </ResultBox>
                )
            })
        }
    </ResultsWrap>
    )
}
export default SearchResultBox;


const changeIndexCalc = (changeIndex:number, maxIndex: number) => {
    // 바뀔 index가 -1이라면
    if(changeIndex < 0){
        return maxIndex;
    }
    // 바뀔 index가 max값 보다 높다면
    else if(changeIndex > maxIndex){
        return 0;
    }
    return changeIndex;
}

type HighlightSpanWrapTypes = {
    str: string;
    searchWord: string;
    index: number;
}
const HighlightSpanWrap = ({ str, searchWord, index }: HighlightSpanWrapTypes) => {
    const beforeStr = str.substring(0, index);
    const afterStr = str.slice(index + searchWord.length);

    return(
        <Span>
            { beforeStr }
            <HighlightSpan>{ searchWord }</HighlightSpan>
            { afterStr }
        </Span>
    )
}

const ResultsWrap = styled.ul`
    position: absolute;
    z-index: 1;

    width: 100%;
    height: auto;

    border: 1px solid gray;
    border-radius: 4px;
    background-color: white;
`
type ResultBoxTypes = {
    isHover: boolean
}
const ResultBox = styled.li<ResultBoxTypes>`
    display: flex;
    align-items: center;

    width: 100%;
    height: 36px;
    padding-left: 4px;

    background-color: ${({ isHover }) => isHover && "#D8D8D8"};
    cursor: pointer;
`
const HighlightSpan = styled.span`
    color: red;
`

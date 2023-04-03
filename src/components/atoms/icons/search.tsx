import React from 'react';
import styled from 'styled-components';


type SearchIconTypes = {
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
const SearchIcon = ({ onClick }: SearchIconTypes) => {
    return(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M8.27644 14.4758C9.6983 14.4758 11.0514 14.0059 12.1535 13.1428L14.8253 15.7986C14.9594 15.9319 15.1347 15.9986 15.3118 15.9986C15.4872 15.9986 15.6643 15.9319 15.7984 15.7986C16.0666 15.532 16.0666 15.0996 15.7984 14.8313L14.9078 13.946L12.671 11.7226C12.4045 11.4577 11.9729 11.456 11.703 11.7175C10.7815 12.6147 9.5642 13.1086 8.27644 13.1086C5.57541 13.1086 3.37642 10.9245 3.37642 8.23792C3.37642 5.55305 5.57541 3.36722 8.27644 3.36722C10.9775 3.36722 13.1765 5.55305 13.1765 8.23792C13.1765 8.67543 13.1163 9.11294 12.9976 9.53849C12.8962 9.90251 13.1111 10.2785 13.4773 10.3793C13.6063 10.4152 13.7352 10.4101 13.8539 10.3742C14.0739 10.3093 14.2579 10.1384 14.3232 9.90251C14.4763 9.35904 14.5519 8.79848 14.5519 8.23792C14.5519 4.79767 11.7374 2 8.27644 2C4.81548 2 2.00098 4.79767 2.00098 8.23792C2.00098 11.6782 4.81548 14.4758 8.27644 14.4758Z" 
                fill="#B39200" 
                stroke="#B39200" 
                strokeWidth="0.233324" 
            />
        </svg>
    )
}
export default SearchIcon;


const SearchIconStyle = styled.div`
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
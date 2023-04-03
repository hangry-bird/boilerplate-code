import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropdownMenu from './index';
import useRender from "@hooks/useRender";


describe('DropdownMenu', () => {
  it('should render correctly with default props', () => {
    const { container, getByText } = useRender(<DropdownMenu>Test</DropdownMenu>);
    const textWrap = getByText('Test');
    expect(textWrap).toBeInTheDocument();
    expect(textWrap).toHaveStyle('font-weight: 700');
    expect(container.firstChild).toHaveStyle('background-color: #FFFFFF');
  });

  it('should render correctly when selected', () => {
    const { container, getByText } = useRender(<DropdownMenu isSelected>Test</DropdownMenu>);
    const textWrap = getByText('Test');
    expect(textWrap).toHaveStyle('font-weight: 700');
    expect(container.firstChild).toHaveStyle('background-color: #FFFFFF');
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = useRender(<DropdownMenu onClick={handleClick}>Test</DropdownMenu>);
    const textWrap = getByText('Test');
    fireEvent.click(textWrap);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";

const defaultProps = {
  onClick: jest.fn()
}

describe('test Button Component', () => {
  it('should render the correct default button', () => {
    // render((<Button {...defaultProps}>Nice</Button>))
    render(<Button {...defaultProps}>Nice</Button>)
    // const element = utils.getByText('Nice') as HTMLButtonElement
    const element = screen.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct based on different props', () => {

  })
  it('should render a link', () => {

  })
})

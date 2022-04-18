/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-18 14:16:45
 * @LastEditors: zch
 * @LastEditTime: 2022-04-18 18:13:25
 */
import React from "react";

import Menu, { MenuProps } from './menu'
import MenuItem from '../MenuItem/menuItem'
import { screen, render, RenderResult, fireEvent } from "@testing-library/react";

const testProps: MenuProps = {
  defaultActive: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultActive: '0',
  mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
      active</MenuItem>
      <MenuItem disabled>
      disabled</MenuItem>
      <MenuItem>
      xyz</MenuItem>
    </Menu>
  )
}

// let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

const setup = () => {
  const utils = render(generateMenu(testProps))
  const menuElement: HTMLElement = screen.getByTestId('test-menu')
  const activeElement: HTMLElement = screen.getByText('active')
  const disabledElement: HTMLElement = screen.getByText('disabled')
  const thirdItem: HTMLElement = screen.getByText('xyz')
  return {
    utils,
    menuElement,
    activeElement,
    disabledElement,
    thirdItem
  }
}

describe('test Menu and MenuItem component', () => {
  it('should render correct Menu and MenuItem based on default props', () => {
    const { menuElement, activeElement, disabledElement } = setup()
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('lucky-menu test')
    // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('click items should changde active and call the right callback', () => {
    const { thirdItem, activeElement, disabledElement } = setup()
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
  it('should render vertical mode when mode is set to vertical', () => {
    render(generateMenu(testVerProps))
    const menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})


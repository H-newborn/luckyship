/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-18 10:43:21
 * @LastEditors: zch
 * @LastEditTime: 2022-04-19 14:25:00
 */
import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "../MenuItem/menuItem";

type MenuMode = 'horizontal' | 'vertical'

interface SelectCallback {
  (selectedIndex: string): void
}

interface BaseMenuProps {
  className?: string
  mode?: MenuMode
  children?: React.ReactNode
  // collapse?: boolean
  defaultActive?: string
  onSelect?: SelectCallback
  defaultOpenSubMenus?: string[] 
}

interface ImenuContext {
  index: string
  onSelect?: SelectCallback
  mode?: MenuMode
  defaultOpenSubMenus?: string[] 
}

export const MenuContext = createContext<ImenuContext>({index:'0'})

export type MenuProps = BaseMenuProps & React.MenuHTMLAttributes<HTMLElement>

const Menu: React.FC<MenuProps> = ({ mode, children, className, defaultActive, onSelect, defaultOpenSubMenus } ) => {

  const [ currentActive, setActive ] = useState(defaultActive)

  const classes = classNames('lucky-menu', className, {
    [`menu-${mode}`]: mode
  })

  const handleClick = (index: string) => {
    console.log(index);
    
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }

  const passedContext: ImenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if(displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }

  return <ul className={classes} data-testid="test-menu">
    <MenuContext.Provider value={passedContext}>
    { renderChildren() }
    </MenuContext.Provider>
  </ul>
}

Menu.defaultProps = {
  defaultActive: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu

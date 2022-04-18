/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-18 10:43:21
 * @LastEditors: zch
 * @LastEditTime: 2022-04-18 13:37:28
 */
import React, { createContext, useState } from "react";
import classNames from "classnames";

type MenuType = 'horizontal' | 'vertical'

interface SelectCallback {
  (selectedIndex: number): void
}

interface BaseMenuProps {
  className?: string
  mode?: MenuType
  children?: React.ReactNode
  // collapse?: boolean
  defaultActive?: number
  onSelect?: SelectCallback
}

interface ImenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuContext = createContext<ImenuContext>({index:0})

type MenuProps = BaseMenuProps & React.MenuHTMLAttributes<HTMLElement>
const Menu: React.FC<MenuProps> = (props) => {
  const { mode, children, className, defaultActive, onSelect } = props

  const [ currentActive, setActive ] = useState(defaultActive)

  const classes = classNames('lucky-menu', className, {
    [`menu-${mode}`]: mode
  })

  const handleClick = (index: number) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }

  const passedContext: ImenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }
  return <ul className={classes}>
    <MenuContext.Provider value={passedContext}>
    { children}
    </MenuContext.Provider>
  </ul>
}

export default Menu
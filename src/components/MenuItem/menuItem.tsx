/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-18 10:43:21
 * @LastEditors: zch
 * @LastEditTime: 2022-04-18 16:42:45
 */
import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "../Menu/menu";

export interface MenuItemProps {
  index?: string
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ index, children, className, disabled }) => {

  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if(context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} onClick={handleClick}>
      { children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem

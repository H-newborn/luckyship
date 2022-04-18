/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-18 10:43:21
 * @LastEditors: zch
 * @LastEditTime: 2022-04-18 13:24:34
 */
import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "../Menu/menu";

interface BaseMenuProps {
  index: number
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

const MenuItem: React.FC<BaseMenuProps> = (props) => {
  const { index, children, className, disabled } = props

  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if(context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} onClick={handleClick}>
      { children}
    </li>
  )
}

export default MenuItem
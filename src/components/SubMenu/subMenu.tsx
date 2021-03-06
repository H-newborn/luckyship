/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-18 15:40:22
 * @LastEditors: zch
 * @LastEditTime: 2022-04-20 10:48:00
 */
import React, { FunctionComponentElement, useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "../Menu/menu";
import { MenuItemProps } from "../MenuItem/menuItem";
import Icon from "../Icon/icon";
// import { CSSTransition } from "react-transition-group";
import Transition from "../Transition/transition";

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  children?: React.ReactNode
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {className ,index, title, children} = props
  const context = useContext(MenuContext)

  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false

  const [menuOpen, setOpen] = useState(isOpend)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)

  }

  const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : {}

  const hoverEvents = context.mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
  } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('lucky-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if(childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error("SubMenu has a child which is not a MenuItem component")
      }
    })
    // return (
    //   <CSSTransition in={menuOpen} timeout={300} classNames='zoom-in-top' appear unmountOnExit>
    //     <ul className={subMenuClasses}>
    //       {childrenComponent}
    //     </ul>
    //   </CSSTransition>
    // )

    return (
      <Transition in={menuOpen} timeout={300} animation='zoom-in-top' >
         <ul className={subMenuClasses}>
           {childrenComponent}
         </ul>
      </Transition>
    )
  }
  return(
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon='angle-down' className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu 

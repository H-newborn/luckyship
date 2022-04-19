/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-19 08:53:40
 * @LastEditors: zch
 * @LastEditTime: 2022-04-19 13:48:45
 */
import React, { useContext } from "react";
import classNames from "classnames";
import { TabsContext } from "./tabs";

export interface TabItemProps {
  label?: string
  disabled?: boolean
  name?: string
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const TabItem: React.FC<TabItemProps> = ({ label, disabled, name, children, className, style }) => {

  const context = useContext(TabsContext)

  const handleClick = () => {
    if (context.tabClick && !disabled && typeof name === 'string') {
      context.tabClick(name)
    }
  }
  const tabClasses = classNames('tabs-item', className, {
    'is-disabled': disabled,
    'is-active': context.name === name
  })

  return (
    <div style={style} className={tabClasses} onClick={handleClick}>
      {label}
    </div>
  )
}

TabItem.displayName = 'TabItem'

export default TabItem

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
  const tabClasses = classNames('tab-item', className, {
    'is-disabled': disabled,
    'is-active': context.value === name
  })

  const contentClasses = classNames('tab-content', className, {
    'is-active': context.value === name
  })
  return (
    <>
      <li style={style} className={tabClasses} onClick={handleClick}>
        {label}
      </li>
      <div className={contentClasses}>{ children }</div>
    </>
  )
}

TabItem.displayName = 'TabItem'

export default TabItem

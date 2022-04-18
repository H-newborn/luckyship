import React, { createContext, useState } from "react";
import classNames from "classnames";
import { TabItemProps } from "./tab-item";

interface TabClick {
  (params?: any): void
}

interface TabsProps {
  activeValue?: string
  closable?: boolean
  tabClick?: TabClick
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

interface ITabsContext {
  value: string
  tabClick?: TabClick
}

export const TabsContext = createContext<ITabsContext>({value: '0'})




const Tabs: React.FC<TabsProps> = ({ activeValue, closable, tabClick, className, style, children }) => {
  const [currentActive, setActive] = useState(activeValue)

  const handleClick = (value?: string) => {
    setActive(value)
    if(tabClick) {
      tabClick(value)
    }
  }
  const passedContext: ITabsContext = {
    value: currentActive ? currentActive : '0',
    tabClick: handleClick
  }

  const classes = classNames('lucky-tabs', className, {
  })

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabItem') {
        return React.cloneElement(childElement)
      } else {
        console.error("Warning: Tabs has a child which is not a TabItem component")
      }
    })
  }

  return <ul style={style} className={classes}>
    <TabsContext.Provider value={passedContext}>
      { renderChildren() }
    </TabsContext.Provider>
  </ul>
}

Tabs.defaultProps = {
  activeValue: '0',
  closable: false,
}

export default Tabs

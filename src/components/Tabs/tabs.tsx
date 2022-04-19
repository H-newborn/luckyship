/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-19 08:53:40
 * @LastEditors: zch
 * @LastEditTime: 2022-04-19 14:24:15
 */
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
  name: string
  tabClick?: TabClick
}

export const TabsContext = createContext<ITabsContext>({name: '0'})

const Tabs: React.FC<TabsProps> = ({ activeValue, closable, tabClick, className, style, children }) => {
  const [currentActive, setActive] = useState(activeValue)

  const handleClick = (name?: string) => {
    setActive(name)
    if(tabClick) {
      tabClick(name)
    }
  }
  const passedContext: ITabsContext = {
    name: currentActive ? currentActive : '1',
    tabClick: handleClick
  }

  const renderTabItemChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabItem') {
        if(childElement.props.name) {
          return React.cloneElement(childElement)
        }
        const name = index + 1
        return React.cloneElement(childElement, { name: name.toString()})
      } else {
        console.error("Warning: Tabs has a child which is not a TabItem component")
      }
    })
  }

  const renderTabContentChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = childElement.type
      
      const name = childElement.props.name || (index + 1).toString()
      const TabContentClasses = classNames('tabs-content-item', {
        'is-active': name === currentActive
      })

      if (displayName === 'TabItem') {
        if(childElement.props.children) {
          return React.cloneElement(<div></div>,{ className: TabContentClasses},childElement.props.children)
        }
      } else {
        console.error("Warning: Tabs has a child which is not a TabItem component")
      }
    })
  }

  const classes = classNames('lucky-tabs', className, {
  })

  return <div style={style} className={classes}>
    <TabsContext.Provider value={passedContext}>
      <div className="tabs-header">
        { renderTabItemChildren() }
      </div>
      <div className="tabs-content">
        {renderTabContentChildren()}
      </div>
    </TabsContext.Provider>
  </div>
}

Tabs.defaultProps = {
  activeValue: '1',
  closable: false,
}

export default Tabs

/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-22 09:56:44
 * @LastEditors: zch
 * @LastEditTime: 2022-04-22 15:28:18
 */
import React, { InputHTMLAttributes } from "react";
// import { FontAwesomeIconProps } from 
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from "classnames";
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' > {
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | React.ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | React.ReactElement;
  onChange? : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props
  
  // 根据属性计算不同的className
  const classes = classNames('lucky-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  // 
   return (
    <div className={classes} style={style}>
      {prepend && <div className="lucky-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input 
        className="lucky-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="lucky-input-group-append">{append}</div>}
    </div>
  )
}

export default Input

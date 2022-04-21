import React, { InputHTMLAttributes } from "react";
// import { FontAwesomeIconProps } from 
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from "classnames";
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
  disabled?: boolean,
  size?: InputSize,
  icon?: IconProp
  prepand?: string | React.ReactElement
  append?: string | React.ReactElement
}

export const Input: React.FC<InputProps> = ({disabled, size, icon, className,prepand, append, style,...restProps}) => {
  // 根据属性计算不同的className
  const classes = classNames('lucky-input', className, {
    [`input-${size}`]: size,
    'is-disabled': disabled,
    'is-icon': icon
  })
  // 
  return <>
    <div className={classes} style={style}>
      {prepand && <div className="is-prepand">{prepand}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon}/></div>}
      <div>
        <input className="input-inner" {...restProps} />
      </div>
      {append && <div className="is-append">{ append }</div>}
    </div>
  </>
}

export default Input

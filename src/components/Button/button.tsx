/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-18 08:52:10
 * @LastEditors: zch
 * @LastEditTime: 2022-04-21 18:07:20
 */
import React from 'react'
import classNames from 'classnames'

type ButtonSize = 'lg' | 'sm'

type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  /**
   * 类名，可自定义添加类名
   */
   className?: string;
   /**
    * button是否可点击，默认为false，值为true则不可点击
    */
   disabled: boolean;
   /**
    * button的大小
    */
   size?: ButtonSize;
   /**
    * button的类型
    */
  btnType?: ButtonType;
  /**
   * 可设置子节点
   */
  children?: React.ReactNode
  /**
   * 类型为link的时候，需要的属性
   */
  href?: string
   /**
   * 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLElement> | undefined
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: React.FC<ButtonProps> = ({
  btnType,
  size,
  disabled,
  className,
  children,
  href,
  ...restProps
}) => {
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })

  if (btnType === 'link') {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button

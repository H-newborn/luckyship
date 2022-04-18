/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-18 08:52:10
 * @LastEditors: zch
 * @LastEditTime: 2022-04-18 10:25:58
 */
import React, { useRef } from 'react'
import classNames from 'classnames'

type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface BaseAlertProps {
  className?: string;
  alertType?: AlertType;
  title?: string;
  description?: string;
  closable?: boolean;
  closeText?: string;
  close?: (...params: any) => void;
  children?: React.ReactNode
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    alertType,
    title,
    description,
    closable,
    closeText,
    className,
    children,
    close,
    ...restProps
  } = props

  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType,
  })

  const domRef = useRef<HTMLDivElement>(null)

  function _closeDefault(params?: any) {
    domRef.current!.style.opacity = '0'
    domRef.current?.addEventListener('transitionend', () => {
      domRef.current!.style.display = 'none'
    })
  }

  return (
    <div
      ref={domRef}
      className={classes}
      {...restProps}
    >
      <span className={`alert-title`}>{ title }</span>
      {description && <p className={`alert-description`}>{ description }</p>}
      {closable && <i className={`alert-closeText`} onClick={close || _closeDefault}>{ closeText }</i>}
    </div>
  )
}

Alert.defaultProps = {
  closable: true,
  closeText: '关闭',
  alertType: 'default',
}

export default Alert

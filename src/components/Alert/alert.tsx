import React, { useRef } from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface close {
  (params?: any): void
}

interface BaseAlertProps {
  className?: string;
  alertType?: AlertType;
  title?: string;
  description?: string;
  closable?: boolean;
  closeText?: string;
  close?: close;
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

  function closeDefault(params?: any) {
    domRef.current!.style.display = 'none'
  }

  return (
    <div
      ref={domRef}
      className={classes}
      {...restProps}
    >
      <span className={`alert-title`}>{ title }</span>
      {description && <p className={`alert-description`}>{ description }</p>}
      {closable && <i className={`alert-closeText`} onClick={close || closeDefault}>{ closeText }</i>}
    </div>
  )
}

Alert.defaultProps = {
  closable: true,
  closeText: '关闭',
  alertType: AlertType.Default,
}

export default Alert

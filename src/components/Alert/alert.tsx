import React from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface BaseAlertProps {
  className?: string;
  alertType?: AlertType;
  title?: string;
  description?: string;
  closable?: boolean;
  closeText?: string;
  onClick?: Function;
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
    onClick,
    ...restProps
  } = props

  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType,
  })

  return (
    <div
      className={classes}
      {...restProps}
    >
      <span className={`alert-title`}>{ title }</span>
      {description && <p className={`alert-description`}>{ description }</p>}
      {closable && <i className={`alert-closeText`} onClick={() => {
        console.log(123);
        
      }}>{ closeText }</i>}
    </div>
  )
}

Alert.defaultProps = {
  closable: true,
  closeText: '关闭',
  alertType: AlertType.Default
}

export default Alert

/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-20 10:12:10
 * @LastEditors: zch
 * @LastEditTime: 2022-04-20 11:05:57
 */
import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

interface TransitionBaseProps {
  animation?: AnimationName
  wrapper ?: boolean
}
type TransitionProps =  CSSTransitionProps & TransitionBaseProps
// interface TransitionProps extends CSSTransitionProps {
  // animation?: AnimationName
// }

const Transition: React.FC<TransitionProps> = (props) => {
  const { wrapper, classNames, children, animation, ...restProps} = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? `<div>${ children }</div>` : children }
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}
export default Transition
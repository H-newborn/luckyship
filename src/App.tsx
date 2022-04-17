/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-15 17:04:29
 * @LastEditors: zch
 * @LastEditTime: 2022-04-15 17:08:16
 */
import React from 'react';
import './styles/index.scss'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={e => {console.log(e)}}>Hello</Button>
        <Button disabled size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger}>Hello</Button>
        <Button btnType={ButtonType.Primary}>Hello</Button>
        <Button>Hello</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' target='_blank' size={ButtonSize.Small}>hello</Button>
        <Button btnType={ButtonType.Link} disabled>hello</Button>
      </header>
    </div>
  );
}

export default App;

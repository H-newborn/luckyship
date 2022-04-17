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
import Alert, { AlertType } from './components/Alert/alert';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClick={e => {console.log(e)}}>Hello</Button>
          <Button disabled size={ButtonSize.Large}>Hello</Button>
          <Button btnType={ButtonType.Danger}>Hello</Button>
          <Button btnType={ButtonType.Primary}>Hello</Button>
          <Button>Hello</Button>
          <Button btnType={ButtonType.Link} href='http://www.baidu.com' target='_blank' size={ButtonSize.Small}>hello</Button>
          <Button btnType={ButtonType.Link} disabled>hello</Button>
        </div>
        <Alert alertType={AlertType.Danger} title="成功提示的文案" description='123'></Alert>
        <Alert alertType={AlertType.Default} title="成功提示的文案" description='123' closable={false}></Alert>
        <Alert alertType={AlertType.Success} title="成功提示的文案" description='123' closeText='点击打开'></Alert>
        <Alert alertType={AlertType.Warning} title="成功提示的文案" description='123'></Alert>
      </header>
    </div>
  );
}

export default App;

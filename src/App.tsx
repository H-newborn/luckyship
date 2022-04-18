/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-15 17:04:29
 * @LastEditors: zch
 * @LastEditTime: 2022-04-18 10:36:00
 */
import React from 'react';
import './styles/index.scss'
import Button from './components/Button/button'
import Alert from './components/Alert/alert';

const padding = {
  padding: '12px'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={ padding }>
          <Button onClick={e => {console.log(e)}}>Hello</Button>
          <Button disabled size='lg'>Hello</Button>
          <Button btnType='danger'>Hello</Button>
          <Button btnType='default'>Hello</Button>
          <Button>Hello</Button>
          <Button btnType='link' href='http://www.baidu.com' target='_blank' size='sm'>hello</Button>
          <Button btnType='link' disabled>hello</Button>
        </div>
        <div style={ padding }>
          <Alert alertType='success' title="成功提示的文案" description='123'></Alert>
          <Alert alertType='default' title="成功提示的文案" description='123' closable={false}></Alert>
          <Alert alertType='danger' title="成功提示的文案" description='123' close={() => {alert(4343)}} closeText='点击打开'></Alert>
          <Alert alertType='warning' title="成功提示的文案" description='123' close={()=> {alert(123)}}></Alert>
        </div>
      </header>
    </div>
  );
}

export default App;

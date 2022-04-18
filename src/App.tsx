/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-15 17:04:29
 * @LastEditors: zch
 * @LastEditTime: 2022-04-18 13:37:48
 */
import React from 'react';
import './styles/index.scss'
import Button from './components/Button/button'
import Alert from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/MenuItem/menuItem';

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
          <Alert alertType='success' title="成功提示的文案" description='默认关闭按钮'></Alert>
          <Alert alertType='default' title="默认提示的文案" description='不显示关闭按钮' closable={false}></Alert>
          <Alert alertType='danger' title="危险提示的文案" description='自定义关闭Text按钮' close={() => {alert('这是自定义打开的关闭按钮')}} closeText='点击打开'></Alert>
          <Alert alertType='warning' title="警告提示的文案" description='自定义关闭defaultText按钮' close={()=> {alert('这是自定义打开的关闭按钮')}}></Alert>
        </div>
        <div style={ padding }>
          <Menu defaultActive={0} onSelect={(index) => {alert(index)}}>
            <MenuItem index={0} >123</MenuItem>
            <MenuItem index={1} disabled>123</MenuItem>
            <MenuItem index={2}>123</MenuItem>
          </Menu>

          <Menu mode='vertical' defaultActive={0} onSelect={(index) => {alert(index)}}>
            <MenuItem index={0} >123</MenuItem>
            <MenuItem index={1} disabled>123</MenuItem>
            <MenuItem index={2}>123</MenuItem>
          </Menu>
        </div>
      </header>
    </div>
  );
}

export default App;

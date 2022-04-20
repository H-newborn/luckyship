/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-15 17:04:29
 * @LastEditors: zch
 * @LastEditTime: 2022-04-20 11:00:23
 */
import React from 'react';
import './styles/index.scss'
import Button from './components/Button/button'
import Alert from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/MenuItem/menuItem';
import SubMenu from './components/SubMenu/subMenu';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tab-item';
import Icon from './components/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
const padding = {
  padding: '12px'
}
function App() {
  return (
    <div className="App">
      {/* <FontAwesomeIcon icon={faCoffee} size='10x'></FontAwesomeIcon> */}
      <header className="App-header">
        <Icon icon='coffee' theme='primary' size='10x'></Icon>
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
          <Menu defaultActive={'0'} onSelect={(index) => {alert(index)}}>
            <MenuItem>123</MenuItem>
            <MenuItem disabled>123</MenuItem>
            <SubMenu title='dropdown'>
              <MenuItem>123</MenuItem>
              <MenuItem>123</MenuItem>
              <MenuItem>123</MenuItem>
            </SubMenu>
          </Menu>

          <Menu mode='vertical' defaultActive={'0'} onSelect={(index) => {alert(index)}}>
            <MenuItem>123</MenuItem>
            <MenuItem  disabled>123</MenuItem>
            <SubMenu title='dropdown'>
              <MenuItem >123</MenuItem>
              <MenuItem>123</MenuItem>
              <MenuItem>123</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <div style={ padding } >
          <Tabs tabClick={(name) => {console.log(name)}}>
            <TabItem label='用户管理'>yonghu</TabItem>
            <TabItem label='配置管理'>peizhi</TabItem>
            <TabItem label='角色管理' disabled>juese</TabItem>
            <TabItem label='角色管理'><Button btnType='danger'>Hello</Button></TabItem>
          </Tabs>
        </div>
      </header>
    </div>
  );
}

export default App;

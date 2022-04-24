/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-15 17:04:29
 * @LastEditors: zch
 * @LastEditTime: 2022-04-22 17:38:55
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

import Input from './components/Input/input'
import AutoComplete, { DataSourceType } from './components/AutoComplete/autoComplete'

import Content from './content'
library.add(fas)
const padding = {
  padding: '12px'
}
const arr111: Array<string> = ['111','222','abs','abc','aww','bg']

const handleFetch1 = (query: string) => {
  return arr111.filter(name => name.includes(query))
}

interface arrProps {
  value: string
  number?: number
}
const arr = [
  {value: '111', number: 12}
]

interface GithubUserProps {
  login: string
  url: string
  avatar_url: string
}

const handleFetch = (query: string) => {
  return arr.filter(name => name.value.includes(query)).map(name => ({
    value: name.value,
    number: name.number
  }))
}

const handleFetch2 = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      console.log(items);
      // @ts-ignore # 忽视本行代码的小错误
    return items.slice(0,10).map((item) => ({
      value: item.login,
      ...item
    }))
  })
}

const renderOption1 = (item: string) => {
  return (
    <h2>NAme: {item}</h2>
  )
}

const renderOption = (item: DataSourceType<arrProps>) => {
  return (
    <>
    <h2>NAme: {item.value}</h2>
    <p>number: {item.number}</p>
    </>
  )
}

const renderOption2 = (item: DataSourceType<GithubUserProps>) => {
  return (
    <>
    <h2>NAme: {item.login}</h2>
    <p>number: {item.url}</p>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <Content></Content>
      {/* <FontAwesomeIcon icon={faCoffee} size='10x'></FontAwesomeIcon> */}
      <header className="App-header">
      <Input disabled size='lg' prepend={<Button>button</Button>} append="234"></Input>
      <Input size='lg' prepend={<Button>button</Button>} append="234"></Input>
      <AutoComplete placeholder='请输入' fetchSuggestions={handleFetch2} onSelect={() => {console.log('select');
      }} renderOption={renderOption}></AutoComplete>
        <Icon icon='coffee' theme='primary' size='10x'></Icon>
        <div style={ padding }>
          <Button onClick={e => {console.log(e)}}>Hello</Button>
          <Button disabled size='lg'>Hello</Button>
          <Button btnType='danger'>Hello</Button>
          <Button btnType='default'>Hello</Button>
          <Button>Hello</Button>
          <Button onClick={() =>{console.log(123)}} btnType='link' href='http://www.baidu.com' target='_blank' size='sm'>hello</Button>
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

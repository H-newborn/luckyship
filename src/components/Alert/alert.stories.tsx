/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-20 13:32:38
 * @LastEditors: zch
 * @LastEditTime: 2022-04-21 18:09:32
 */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from './alert';

const styles: React.CSSProperties = {
  textAlign: 'center'
}
const divStyle: React.CSSProperties = {
  padding: '5px'
}

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Alert',
  component: Alert,
  args: {
  },
  decorators: [CenterDecorator],
} as ComponentMeta<typeof Alert>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Default Alert',
  alertType: 'default',
  description: '我是默认文字，可以自定义；也可以自定义我的关闭按钮文本'
};
Default.storyName ='Default Alert'


// export const Success = Template.bind({});
// Success.args = {
//   alertType: 'success',
//   title: 'Success Alert',
// };
// Success.storyName ='Success Alert'


// export const Danger = Template.bind({});
// Danger.args = {
//   alertType: 'danger',
//   title: 'Danger Alert',
// };
// Danger.storyName ='Danger Alert'


// export const Warning = Template.bind({});
// Warning.args = {
//   alertType: 'warning',
//   title: 'Warning Alert',
// };
// Warning.storyName = 'Warning Alert'

export const TypeWithAlerts: ComponentStory<typeof Alert> = () => (
  <>
    <Alert title="defaultAlert" alertType='default'></Alert>
    <div style={divStyle}></div>
    <Alert title="successAlert" alertType='success'></Alert>
    <div style={divStyle}></div>
    <Alert title="dangerAlert" alertType='danger'></Alert>
    <div style={divStyle}></div>
    <Alert title="warningAlert" alertType='warning'></Alert>
  </>
);
TypeWithAlerts.storyName = 'TypeWithAlerts'

export const DescriptionAlerts: ComponentStory<typeof Alert> = () => (
  <>
    <Alert title="带描述的Alert" description='我是默认描述文字' alertType='default'></Alert>
    <div style={divStyle}></div>
    <Alert title="带描述的Alert" description='我是默认描述文字' alertType='success'></Alert>
    <div style={divStyle}></div>
    <Alert title="带描述的Alert" description='我是默认描述文字' alertType='danger'></Alert>
    <div style={divStyle}></div>
    <Alert title="带描述的Alert" description='我是默认描述文字' alertType='warning'></Alert>
  </>
);
DescriptionAlerts.storyName = 'DescriptionAlerts'

export const isCloseAlerts: ComponentStory<typeof Alert> = () => (
  <>
    <Alert title="不显示关闭按钮的Alert" closable={false} description='我是默认描述文字'></Alert>
    <div style={divStyle}></div>
    <Alert title="可自定义关闭按钮的文本" alertType='success' closeText='自定义' description='我是默认描述文字'></Alert>
  </>
);
isCloseAlerts.storyName = 'isCloseAlerts'
  


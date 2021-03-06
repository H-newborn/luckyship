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
  /* ð The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Alert',
  component: Alert,
  args: {
  },
  decorators: [CenterDecorator],
} as ComponentMeta<typeof Alert>;

//ð We create a âtemplateâ of how args map to rendering
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Default Alert',
  alertType: 'default',
  description: 'ææ¯é»è®¤æå­ï¼å¯ä»¥èªå®ä¹ï¼ä¹å¯ä»¥èªå®ä¹æçå³é­æé®ææ¬'
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
    <Alert title="å¸¦æè¿°çAlert" description='ææ¯é»è®¤æè¿°æå­' alertType='default'></Alert>
    <div style={divStyle}></div>
    <Alert title="å¸¦æè¿°çAlert" description='ææ¯é»è®¤æè¿°æå­' alertType='success'></Alert>
    <div style={divStyle}></div>
    <Alert title="å¸¦æè¿°çAlert" description='ææ¯é»è®¤æè¿°æå­' alertType='danger'></Alert>
    <div style={divStyle}></div>
    <Alert title="å¸¦æè¿°çAlert" description='ææ¯é»è®¤æè¿°æå­' alertType='warning'></Alert>
  </>
);
DescriptionAlerts.storyName = 'DescriptionAlerts'

export const isCloseAlerts: ComponentStory<typeof Alert> = () => (
  <>
    <Alert title="ä¸æ¾ç¤ºå³é­æé®çAlert" closable={false} description='ææ¯é»è®¤æè¿°æå­'></Alert>
    <div style={divStyle}></div>
    <Alert title="å¯èªå®ä¹å³é­æé®çææ¬" alertType='success' closeText='èªå®ä¹' description='ææ¯é»è®¤æè¿°æå­'></Alert>
  </>
);
isCloseAlerts.storyName = 'isCloseAlerts'
  


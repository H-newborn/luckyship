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
import { action } from '@storybook/addon-actions'
// import { withInfo } from '@storybook/addon-info';

import Button from './button';

const styles: React.CSSProperties = {
  textAlign: 'center'
  // display: 'flex',
  // flexDirection: 'column'
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
  title: 'Button',
  component: Button,
  args: {
  },
  decorators: [CenterDecorator],
  // parameters: {
  //   info: {
  //     text: `this is nice component  

  //     const a = 'hello'
  //     this is markdown
  //     `,
  //     inline: true
  //   }
  // }
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  btnType: 'default',
  children: 'Default Button',
};
Default.storyName ='Default Button'


export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  children: 'Primary Button',
};
Primary.storyName ='Primary Button'


export const Danger = Template.bind({});
Danger.args = {
  btnType: 'danger',
  children: 'Danger Button',
};
Danger.storyName ='Danger Button'


export const Link = Template.bind({});
Link.args = {
  btnType: 'link',
  children: 'Link Button',
  href: 'http://www.baidu.com',
  target: '_blank'
};
Link.storyName ='Link Button'


export const SizeWithButton: ComponentStory<typeof Button> = () => (
  <>
    <Button size='lg' onClick={() => {action('123')}}>largeButton</Button>
    <div style={divStyle}></div>
    <Button >normalButton</Button>
    <div style={divStyle}></div>
    <Button size='sm'>smallButton</Button>
  </>
);
SizeWithButton.storyName='SizeWithButtons'

export const TypeWithButton: ComponentStory<typeof Button> = () => (
  <>
    <Button  btnType='danger' onClick={() => {alert('123')}}>dangerButton</Button>
    <div style={divStyle}></div>
    <Button  btnType='default'>defaultButton</Button>
    <div style={divStyle}></div>
    <Button  btnType='primary'>linkButton</Button>
    <div style={divStyle}></div>
    <Button  btnType='link' href='http://www.baidu.com' target='_blank'>linkButton</Button>
    <div style={divStyle}></div>
  </>
);
TypeWithButton.storyName='TypeWithButtons'

export const DisabledButton: ComponentStory<typeof Button> = () => (
  <>
    <Button  btnType='danger' onClick={() => {alert('123')}} disabled>dangerButton</Button>
    <div style={divStyle}></div>
    <Button  btnType='default' disabled>defaultButton</Button>
    <div style={divStyle}></div>
    <Button  btnType='primary' disabled>linkButton</Button>
    <div style={divStyle}></div>
    <Button  btnType='link' href='http://www.baidu.com' target='_blank' disabled>linkButton</Button>
    <div style={divStyle}></div>
  </>
);
DisabledButton.storyName='DisabledButtons'

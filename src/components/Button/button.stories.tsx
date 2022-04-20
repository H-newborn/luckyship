/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-20 13:32:38
 * @LastEditors: zch
 * @LastEditTime: 2022-04-20 17:03:30
 */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import Button from './button';

const styles: React.CSSProperties = {
  textAlign: 'center'
}

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: '按钮',
  component: Button,
  args: {
  },
  decorators: [CenterDecorator,withInfo],
  parameters: {
    info: {
      text: `this is nice component  

      const a = 'hello'
      this is markdown
      `,
      inline: true
    }
  }
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button onClick={() => {alert('123')}}>clickButton</Button>
);
Primary.storyName='默认Button'


export const Secondary: ComponentStory<typeof Button> = () => (
  <>
    <Button size='lg' onClick={() => {action('123')}}>largeButton</Button>
    <Button >normalButton</Button>
    <Button size='sm'>smallButton</Button>
  </>
);
Secondary.storyName='不同尺寸Button'

export const Tertiary: ComponentStory<typeof Button> = () => (
  <>
    <Button  btnType='danger' onClick={() => {alert('123')}}>dangerButton</Button>
    <Button  btnType='default'>defaultButton</Button>
    <Button  btnType='primary'>linkButton</Button>
    <Button  btnType='link' href='http://www.baidu.com' target='_blank'>linkButton</Button>
  </>
);
Tertiary.storyName='不同类型Button'


/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-22 14:11:09
 * @LastEditors: zch
 * @LastEditTime: 2022-04-22 14:23:45
 */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { action } from '@storybook/addon-actions'
// import { withInfo } from '@storybook/addon-info';

import autoComplete from './autoComplete';

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
  title: 'autoComplete',
  component: autoComplete,
  args: {
  },
  decorators: [CenterDecorator],
} as ComponentMeta<typeof autoComplete>;

//👇 We create a “template” of how args map to rendering
// const Template: ComponentStory<typeof autoComplete> = (args) => <autoComplete {...args} />;


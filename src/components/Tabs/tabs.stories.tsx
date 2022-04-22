/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-20 13:32:38
 * @LastEditors: zch
 * @LastEditTime: 2022-04-22 10:25:40
 */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from './tabs';
import TabItem from './tab-item';

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
  title: 'Tabs',
  component: Tabs,
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
} as ComponentMeta<typeof Tabs>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;


// export const Default = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Default.args = {
//   // btnType: 'default',
//   // children: 'Default Tabs',
// };
// Default.storyName ='Default Tabs'

export const DefaultTabs: ComponentStory<typeof Tabs> = () => (
  <>
    <Tabs >
      <TabItem label='111'>111</TabItem>
      <TabItem label='222'>222</TabItem>
      <TabItem label='333'>333</TabItem>
      <TabItem label='444'>444</TabItem>
      <TabItem label='555'>555</TabItem>
    </Tabs>
  </>
);
// DefaultTabs.storyName='DefaultTabs'

// export const TypeWithTabs: ComponentStory<typeof Tabs> = () => (
//   <>
//     <Tabs  btnType='danger'>dangerTabs</Tabs>
//     <div style={divStyle}></div>
//     <Tabs  btnType='default'>defaultTabs</Tabs>
//     <div style={divStyle}></div>
//     <Tabs  btnType='primary'>primaryTabs</Tabs>
//     <div style={divStyle}></div>
//     <Tabs  btnType='link' href='http://www.baidu.com' target='_blank'>linkTabs</Tabs>
//     <div style={divStyle}></div>
//   </>
// );
// TypeWithTabs.storyName='TypeWithTabss'

// export const DisabledTabs: ComponentStory<typeof Tabs> = () => (
//   <>
//     <Tabs  btnType='danger' onClick={() => {alert('123')}} disabled>dangerTabs</Tabs>
//     <div style={divStyle}></div>
//     <Tabs  btnType='default' disabled>defaultTabs</Tabs>
//     <div style={divStyle}></div>
//     <Tabs  btnType='primary' disabled>primaryTabs</Tabs>
//     <div style={divStyle}></div>
//     <Tabs  btnType='link' href='http://www.baidu.com' target='_blank' disabled>linkTabs</Tabs>
//     <div style={divStyle}></div>
//   </>
// );
// DisabledTabs.storyName='DisabledTabss'

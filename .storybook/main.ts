/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-20 13:11:44
 * @LastEditors: zch
 * @LastEditTime: 2022-04-21 17:17:55
 */

module.exports = {
  "stories": [
    // "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}

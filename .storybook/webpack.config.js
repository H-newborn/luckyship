/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-20 16:10:48
 * @LastEditors: zch
 * @LastEditTime: 2022-04-20 16:11:56
 */
const path = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      require.resolve("ts-loader"),
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          // Provide the path to your tsconfig.json so that your stories can
          // display types from outside each individual story.
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
        },
      },
    ],
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
#!/usr/bin/env node
/*
 * @Descripttion: 
 * @version: 
 * @Author: zhujiang
 * @Date: 2019-06-08 18:54:15
 * @LastEditors: zhujiang
 * @LastEditTime: 2019-12-04 22:21:57
 * @FilePath: \itheima-pack\bin\xuedao-pack.js
 */

const path = require('path')
// 1. 读取需要打包项目的配置文件
let config = require(path.resolve('webpack.config.js'))
// console.log(config)

// 2. 通过面向对象的方式来进行项目推进
const Compiler = require('../lib/Compiler')
new Compiler(config).start() 
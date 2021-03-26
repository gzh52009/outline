// 云函数入口文件
const cloud = require('wx-server-sdk')

// 云开发初始化
cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const col = db.collection('user')


// 云函数入口函数
exports.main = async (event, context) => {
  
  const {data} = await col.get()
  
  // 云函数返回结果
  return data
}
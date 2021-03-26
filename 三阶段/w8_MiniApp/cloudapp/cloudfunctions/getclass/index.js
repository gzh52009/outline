// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:'qf-52690b'
})


exports.main = async function(){
    // 获取数据库对象
    const db = cloud.database();

    // 获取对应集合
    const col = db.collection('class');

    // 获取班级列表（所有数据）
    //col.get()

    // 获取对应条件的数据
    const res = await col.where({
        city:'广州'
    }).get()


    return {
        code:1,
        data:res,
        msg:'success'
    };
}
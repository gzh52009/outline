const mysql = require('mysql');

 //连接数据库方式一：创建连接对象，并配置参数
//  var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });

// // 连接数据库
// connection.connect();

// // 数据库操作
// connection.query('select * from goods limit 1,5', function (error, results, fields) {
//     if (error) throw error;
//     console.log('result=', results);
// });
// // 关闭连接,释放资源
// connection.end();

// function query(sql){
//     connection.connect();
//     return new Promise((resolve,reject)=>{
//         connection.query(sql, function (error, results, fields) {
//             if (error) reject(error);
//             resolve(results)
//         });
//         // 关闭连接,释放资源
//         connection.end();
//     })
// }
// 回调函数写法
// query('select * from goods',function(data){

// })
// (async ()=>{
//      data = await query('select * from goods');
//      console.log('data=',data);
// })()

// 连接数据库方式二：连接池（连接池中默认创建10个连接对象，用完自动回收）
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    // port: 3306,
    database: 'jiaoxue',
    multipleStatements: true
});

function query(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql, function (error, rows, fields) {
            if (error) reject(error);
            resolve(rows)
        });
    })
}

module.exports = {
    query
}
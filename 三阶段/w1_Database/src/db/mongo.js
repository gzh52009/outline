const {MongoClient,ObjectId} = require('mongodb');

const config = {
    url:'mongodb://localhost:27017',
    dbName:'h52009'
}

// MongoClient.connect(config.url, async function(err, client) {
//     // client: mongo客户端
//    if(err){
//        console.log('连接数据库失败');
//        return;
//    }

//    // 使用某个数据库
//     const db = client.db(config.dbName);

//    // 操作数据库
//    // 获取集合
//    const user = db.collection('user');

//    // find()返回一个查询结果集合
//    let result = user.find(); 

//    // toArray()返回一个promise对象
//    result = await result.toArray()
//    console.log('result=',result);
//     client.close();
//   });

async function connect(){
    //   return new Promise((resolve,reject)=>{
    //       MongoClient.connect(config.url, async function(err, client) {
    //           // client: mongo客户端
    //          if(err){
    //              reject(err);
    //              return;
    //          }
    //          // 使用某个数据库
    //           const db = client.db(config.dbName);
    //           resolve({
    //               db,
    //               client
    //           })
    //         });
    //   })
    try{
        const client = await MongoClient.connect(config.url,{ useUnifiedTopology: true })
        const db = client.db(config.dbName);
        return {client,db}
    }catch(err){
        throw new Error(err);
    }
  }

/**
 * 增：添加数据
 * @param {String}          colName     集合名称
 * @param {Object|Array}    data        插入数据
 */
 async function create(colName,data){
    // 连接数据库
    const {db,client} = await connect();

    // 获取集合
    const col = db.collection(colName);

    if(!Array.isArray(data)){
        data = [data];
    }
    const result = await col.insertMany(data);

    // 关闭数据库连接
    client.close();

    return result;
}
//   create('user',{})

/**
 * 删：删除数据
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件 
 */
async function remove(colName,query){
    // 连接数据库
    const {db,client} = await connect();
    // 获取集合
    const col = db.collection(colName);

    const result = await col.deleteMany(query)
    client.close();
    return result;
}

/**
 * 改：修改数据
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件 
 * @param {Object} data     更新操作
 */
async function update(colName,query,data){
    const {db,client} = await connect()

    // 获取集合
    const col = db.collection(colName)

    if(typeof query._id === 'string'){
        // 600a398f7fb70cd40a42e1f9 -> ObjectId("600a398f7fb70cd40a42e1f9")
        query._id = ObjectId(query._id)
    }

    const result = await col.updateMany(query,data);

    client.close();
    return result;
}

  /**
   * 查：查询数据
   * @param {String} colName    集合名称
   * @param {Object} query      查询条件 
   * @return {Array}            返回数据结果
   */
  async function find(colName,query={}){
    const {db,client} = await connect()

    // 获取集合
    const col = db.collection(colName)

    if(typeof query._id === 'string'){
        // 600a398f7fb70cd40a42e1f9 -> ObjectId("600a398f7fb70cd40a42e1f9")
        query._id = ObjectId(query._id)
    }

    // 操作数据库
    let result = col.find(query)

    result = await result.toArray();

    // 关闭连接
    client.close()

    return result;
    
  }
//   const result = await find('user',{})
//   const result = await find('goods',{})

  module.exports = {
      create,
      remove,
      update,
      find
  }

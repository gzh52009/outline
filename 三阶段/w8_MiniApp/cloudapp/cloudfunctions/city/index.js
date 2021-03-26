// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database();

const col = db.collection('city');

// 云函数入口函数
exports.main = async (event, context) => {
  const {
    type,
    name,
    is_current = false,
    id,
    query,
    data,
    options,
  } = event;

  switch (type) {
    case 'insert':
      return await insert({
        name,
        is_current
      });
    case 'delete':
      return await remove(id);
    case 'update':
      return await update(id, data);
    case 'find':
      return await find(query, options);
  }
}

async function insert(data) {
  return col.add({
    data: {
      ...data,
      addtime: new Date()
    }
  })
}

async function remove(id) {
  return col.where({
    _id:id
  }).remove();
}

async function update(id, data) {console.log('id=',id,data)
  return col.where({
    _id:id
  }).update({data})
}

async function find(query = {}, options = {}) {
  const defaults = {
    page: 1,
    size: 10,
    orderBy: 'addtime',
    total: true
  }
  const opt = Object.assign({}, defaults, options);
  const skip = (opt.page - 1) * opt.size;
  let orderField, order;
  if (Array.isArray(opt.orderBy)) {
    orderField = opt.orderBy[0]
    order = opt.orderBy[1]
  } else {
    orderField = opt.orderBy
    order = 'desc'
  }
  let collection = col.where(query);
  const total = await collection.count();

  collection = collection
    .skip(skip)
    .limit(opt.size)
    .orderBy(orderField, order);

  if (opt.field) {
    collection = collection.field(opt.field)
  }

  const result = await collection.get();

  return opt.total ? {
    total: total.total,
    result: result.data,
    page: opt.page,
    size: opt.size
  } : result.data;
}
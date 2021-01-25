const ws = require('ws');

const server = new ws.Server({
    port:1001
});

// 事件
// connection：客户端连接后执行
server.on('connection',(client)=>{
    // client: 连接服务器的客户端
    console.log('client',client);

    // 客户端与服务器连接成功后监听事件
    client.on('message',(msg)=>{
        console.log('msg=',msg)

        // 服务器主动给客户端发消息
        client.send('Hi')
    })
});

// 连接的所有客户端会自动存入
// server.clients
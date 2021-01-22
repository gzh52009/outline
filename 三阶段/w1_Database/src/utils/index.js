function formatData({code=200,data=[],msg='success'}={}){
    if(code === 400){
        msg = 'fail'
    }
    if(code === 401){
        msg = 'No Access'
    }
    return {
        code,
        data,
        msg
    }
}

module.exports = {
    formatData
}
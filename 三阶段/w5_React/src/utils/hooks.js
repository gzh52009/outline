import {useState} from 'react';

export function useStorage(key){
    let data = localStorage.getItem(key);
    try{
        data = JSON.parse(data);
    }catch(err){
        data = data;
    }

    const [state,setState] = useState(data);

    const setData = function(newData){
        if(typeof newData === 'object'){
            newData = JSON.stringify(newData);
        }
        localStorage.setItem(key,newData);

        setState(newData);
    }

    return [state,setData]
}

// 修改后实现刷新组件的功能
// const [userInfo,changeUser] = useStore('userInfo')
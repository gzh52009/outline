// 1. 引用文件（三个斜杠）
/// <reference path="namespace.ts"/>

import {IGoods} from './goodsType';
import {user1,user2} from './namespace'

const goods:user1.IGoods = {
    name:'huawei mate40 pro',
    price:6998
}

const goodslist:IGoods[] = [{
    name:'goods1',
    price:998,
    imgurl:'img/goods1.jpg'
}]
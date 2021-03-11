# Hook

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## React 组件更新逻辑

- 在使用 Hook 前先要了解，React 组件在什么情况下会刷新

  1. state 或 props 有更新时，当前组件会刷新
  2. 父组件有更新时，当前组件会刷新

- 但，从上面的情况看，其中有两个问题：
  1. 调用`setState()`，就会触发组件的重新渲染（无论前后的 state 是否一样，除非继承自`PureComponent`）
  2. 父组件更新，子组件也会自动的更新（无论子组件是否有必要更新）

Hook 除了能让函数组件使用一些类组件特性外，还自带一些性能优化，使函数组件发挥出强大的优势

## Hook 使用注意事项

1. 只能在函数组件中使用
2. 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们
3. 函数组件每次更新都会从上往下执行完内部所有的代码

## 基础 Hook

### 1. useState

State Hook 能让函数组件也能使用 class 组件一样的状态特性，同时发挥函数组件轻便高效的特性，格式：`useState(defaultValue)`，返回最新**value**与**修改 value**方法组成的数组

```js
function MyComponent() {
  const [qty, changeQty] = useState(0);

  return (
    <div>
      {qty}
      <button
        onClick={() => {
          changeQty(qty + 1);
        }}
      >
        修改数量
      </button>
    </div>
  );
}
```

> PS: 以前发起ajax请求只能在class组件中使用，有了`useState`，在函数组件中也能实现了，虽然每次更新`qty`都会把`MyComponent`组件中的代码重新执行一遍，但 State Hook 能保证你能拿到的是最新的`state`，如上面的代码每次都能拿到最新的`qty`值

### 2. useEffect

Effect Hook 可以让我们在函数组件中执行一些副作用操作，如 ajax 请求，定时器等。默认情况下，effect 将在每轮**渲染结束后执行**，React 保证了每次运行 effect 时，DOM 都已经更新完毕

- 默认 effect
  > 等效于componentDidMount + componentDidUpdate的效果

  ```js
      //　
      function MyCompnent(){
          useEffect(()=>{
              // 这里的代码在组件渲染结束后执行（初始化和组件更新）
              // 如：发起ajax请求商品数据
              const {data} = await fetch('/goods').then(res=>res.json())
          })
          return <div></div>
      }
  ```

  > PS：ajax 请求以前在 class 组件中可能需要在`componentDidMount`和`componentDidUpdate`两个生命周期函数中编写相同的代码，有了`useEffect`，只需要写一次就行

- 指定依赖
  > 等效于componentDidUpdate的效果，只有在依赖发生改变时才执行effect中的代码

  ```js
      // 指定依赖（可以为多个依赖）
      function MyCompnent(){
        const [qty, changeQty] = useState(0);
          useEffect(()=>{
              // 这里的代码只有在初始化和qty发生改变时执行
              const {data} = await fetch('/goods').then(res=>res.json())
          },[qty])
          return <div></div>
      }
  ```
* 指定空依赖
  > 依赖为空数组，等效于componentDidMount的效果
  ```js
    function MyCompnent(){
        useEffect(()=>{
            // 这里的代码只有在初始化时执行
            const {data} = await fetch('/goods').then(res=>res.json())
        },[])
        return <div></div>
    }
  ```
* useEffect返回一个函数
  > 实现componentWillUnmount的效果
  ```js
      function MyComponent(){
          useEffect(()=>{
              return ()=>{
                  // 这里的代码在组件被销毁后执行
              }
          })
      }
  ```

### 3. useMemo

> 一般用于编写函数组件中无需重复执行的代码，以达到**优化性能**的目的，返回值为回调函数的结果

- 执行过程
  1. 回调函数初始化组件时会被执行
  2. 依赖改变时被执行
- 返回值：依赖改变返回新的值，否则返回缓存值

```js
  const datalist = [
    { name: "goods1", price: 98, qty: 2 },
    { name: "goods2", price: 198, qty: 2 },
    { name: "goods3", price: 998, qty: 1 },
  ];

  function MyCompnent(){
    const [goodslist, changeGoods] = useState(datalist);

    // 只有goodslist有修改时才会重新计算总价，否则返回之前计算的值
    const totalPrice = useMemo(() => {
      return goodslist.reduce((pre, item) => pre + item.price * item.qty, 0);
    }, [goodslist]);
  }
```

### 4. useCallback

> 与 useMemo 类似，但 useCallback **返回传入的函数**，不需要显性返回，一般用于定义事件处理函数

* 不指定依赖
  > 不论初始化或者组件更新都返回新的函数
- 指定依赖
  > 依赖更新时返回新的函数，否则返回缓存函数
- 空依赖
  > 初始化返回函数后并缓存，组件更新时永远返回缓存函数

```js
  const callbackList = []
  function MyCompnent(){
    const [qty, changeQty] = useState(1);

    // callback得到useCallback传入的函数
    const callback = useCallback(() => {
      
    }, [qty]);
    callbackList.push(callback);

    // 对比callbackList中的函数是否为同一个函数
  }
```


## 额外的 Hook

1. useContext
  > 简化context获取方式
  
  ```js
    // 父组件
    const MyContext = React.createContext(null);
    <MyContext.Provider value={{ username: "laoxie", age: 18 }}>
      <MyComponent />
    </MyContext.Provider>
    // 子组件
    function MyCompnent() {
      const user = useContext(MyContext); // laoxie
      return <div>{user.username}</div>;
    }
  ```

  > `useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`，当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染

2. useReducer
  > 简单版redux，可以在不引入redux的情况下使用redux特性

   ```js
    const initState = [
      { name: "goods1", price: 98, qty: 2 },
      { name: "goods2", price: 198, qty: 2 },
      { name: "goods3", price: 998, qty: 1 },
    ];
    const reducer = (state, action) => {
      switch (action.type) {
        case 'add':
          return [action.goods, ...state];
        case 'remove':
          return state.filter(item => item.name != action.name);
        case 'change'
          return state.map(item=>{
            if(item.name === action.name){
              item.qty = action.qty;
            }
            return item;
          })
        default:
          throw new Error('type error');
      }
    }
    const MyHook = () => {
      const [state, dispatch] = useReducer(reducer, initState);
      return <div>
        <ul>
          {
            state.map(item=><li key={item.name}>{item.name}-{item.price}</li>)
          }
        </ul>
        <button onClick={()=>{
          dispatch({type:'add',goods:{name:'newGoods',price:111,qty:1}})
        }}>添加商品</button>
      </div>
    }

   ```
  > PS: 如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行

3. useRef
`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数，返回的 ref 对象在组件的整个生命周期内保持不变。

4. useLayoutEffect
5. useImperativeHandle
6. useDebugValue

## 自定义 Hook
自定义 Hook 是一个函数，其名称以 `use` 开头，这样可以一眼看出其符合 Hook 的规则


* 函数内部可以调用其他的 Hook
* 自定义 Hook 解决了以前在 React 组件中无法灵活共享逻辑的问题

```js
	import {useState,useMemo} from 'react';
	function useStorage(key){
		function set(key,val){
			localStorage.setItem(key,JSON.stringify(val));
			setValue(val)
		}
		function get(key){
			return JSON.parse(localStorage.getItem(key));
		}
		const initData = get(key);
		const [value,setValue] = useState(initData);
		return [value,set]
	}

```

## 第三方HooK

* react-router
  * useHistory
  * useLocation
  * useParams
  * useRouteMatch
* react-redux
  > react-redux 7.1新增功能
  * useDispatch
  * useStore
  * useSelector

---

**【练习】**
* 实现倒计时效果
* 实现商品购物流程
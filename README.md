####使用方式
```javascript
npm i funny-time-lib
```

#### 格式化时间
```javascript
const {formatDay} = require('funny-time-lib') 

console.log(formatDay(11123111).join(":"))  
// 3089:45:11

console.log(formatDay(11123111,true))  
// [ '128', '17', '45', '11' ]
```

#### 随机字符串

```javascript
const {randomStr,randomType} = require('funny-time-lib') 

// 可以任意组合
interface randomStrParams {
    type?: randomType,          // 随机字符串的类型,包括数字,小写字母,大写字母 ,默认为所有类型
    length?: number,            // 生成随机字符串的长度 默认为10
    otherSource?: string,       // 其他的的数据源,比如 "~@" 默认为''
    overriderSource?: boolean   //是否使用其他数据源覆盖默认的数据源 默认为false
}

// 随机从数字,小写字母,大写字母中返回长度为10的字符串
console.log(randomStr()); // VLGW2XfuCF

// 返回指定长度的数字 ,默认为10
console.log(randomStr({type:randomType.NUMBER}));  // 7219642363

// 返回指定长度的数字
console.log(randomStr({type:randomType.NUMBER,length:5}));  // 24820

// 增加源数据,返回长度为10的数字和提供的源数据字符串
console.log(randomStr({type:randomType.NUMBER,otherSource:"@#$%^&**^%$"}));  // 46%0#14%23

// 使用指定的源数据
console.log(randomStr({otherSource:"@#$%^&**^%$",overriderSource:true}));  // &^%@*^$@$%

//返回小写和数字的随机字符串,可使用类似方式任意组合
console.log(randomStr({type:randomType.NUMBER| randomType.ALPHA}));  // ttci0fpat3

```

#### 随机返回数组或者字符串中的下标和元素
```javascript
// 返回 [index,element]
console.log(randomElement([1,2,3,4,5]))  // [ 4, 5 ]
console.log(randomElement("helloworld"))  // [ 3, 'l' ]
```

#### 随机返回数组或者字符串的子串,不能超过数组或者字符串的长度

```javascript
// 打乱字符串
console.log(randomManyElements("helloworld"))  // oldeolhwlr

//打乱数组
console.log(randomManyElements([1,2,3,4,5])) // [ 4, 1, 2, 5, 3 ]

// 允许重复使用源数据,有可能得到两个d
console.log(randomManyElements("helloworld",true)) // doodldlowl

// 打乱随机获取指定长度的数组
console.log(randomManyElements([1,2,3,4,5],false, 3)) // [ 2, 4, 5 ]

```


#### 更新记录

* v3.1.0 --> 增加example
* v3.0.0 --> 增加一些随机小工具,增加浏览器导入lib的入口 dist-web
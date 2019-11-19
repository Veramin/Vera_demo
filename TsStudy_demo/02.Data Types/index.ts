// ***************************************************************************
// 布尔类型(boolean)
// es5写法（正确)  但是在ts中是错的，类型声明且修改后前后必须一致
// var isShow = false;
// isShow = 133;

// ts写法
var isShow: boolean = false;
isShow = true;


// ***************************************************************************
// 数字类型(number)
// 错误写法
// let startIndex: number = 0;
// startIndex = '6666';   Type '"6666"' is not assignable to type 'number'.

// 正确写法
let startIndex: number = 0;
startIndex = 666;


// ***************************************************************************
// 字符串类型(string)
// 错误写法
// let des: string = 'vera';
// des = 1232  Type '1232' is not assignable to type 'string'.

// 正确写法
let des: string = 'vera';
des = '66666'


// ***************************************************************************
// 数组类型（array） ts中有两种方式
// 方法一：数组中每一个都是number类型
var arr: number[] = [1, 11, 111]



// 方法二：
// var arr1: Array<number> = [1, 11, 111, '1111']   Type 'string' is not assignable to type 'number'.
var arr2: Array<number> = [1, 11, 111, 1111]


// ***************************************************************************
// 元组类型(tuple)  属于数组类型的一种
// 什么时候使用呢？=》 数组中的每一项数据类型不固定
var arr3: [number, string] = [1, 'this is string']
var arr4: [number, number, string] = [212, 121, '6767']


// ***************************************************************************
// 枚举类型(enum)
// 格式
// enmu 枚举名 {
//     标识符[= 整型常数],
//     标识符[= 整型常数],
//     标识符[= 整型常数],
//     ...
//     标识符[= 整型常数],
// }

// 例子一
enum state {
    'success' = 200,
    'error' = 400,
    'doing' = 222,
    'done' = 1000
}

var e: state = state.done
console.log(e) // 1000

// 例子二

// 未赋值  des:未赋值的话，返回的是所在下标
enum color1 { pink, red, yellow, blue }
var themeColor1: color1 = color1.blue
console.log(themeColor1) // 3

// 赋值  des:赋值的话，返回的是所在的东西
// 只赋值一个
enum color2 { pink = 5, red, yellow, blue }
var valueColor2: color2 = color2.pink
console.log(valueColor2) // 5


var themeColor2: color2 = color2.yellow
console.log(themeColor2) // 7

var themeColor2: color2 = color2.blue
console.log(themeColor2) // 8


// 赋值两个
enum color3 { pink = 5, red = 7, yellow, blue }
var valueColor3: color3 = color3.pink
console.log(valueColor3) // 5


var themeColor3: color3 = color3.yellow
console.log(themeColor3) // 8

var themeColor3: color3 = color3.blue
console.log(themeColor3) // 9



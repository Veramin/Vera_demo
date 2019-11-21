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


// ***************************************************************************
// 任意类型(any)
var num: any = 312321;
num = 'string'

// 任意类型的用法
// 错误用法一：
// var ele = document.getElementById('box');
// ele.style.color = 'red'; // Object is possibly 'null'.

// 错误用法二：
// var ele: object = document.getElementById('box');  // Property 'style' does not exist on type 'object'.因为没有object这种数据类型
// ele.style.color = 'red'; // 类型“object”上不存在属性“style”。

// 正确用法
var ele: any = document.getElementById('box');
ele.style.color = 'lightblue';


// ***************************************************************************
// null and undefined类型   其他(never)数据类型的子类型

//  var tips: null;
//  tips = 'bhfbvcbfhd'  // Type '"bhfbvcbfhd"' is not assignable to type 'null'.

// var _num: number;
// console.log(_num); // Variable '_num' is used before being assigned.

var num_: undefined;
console.log(num_) // undefined
// num_ = 21312; // Type '21312' is not assignable to type 'undefined'.

// 定义为赋值
var num1: number | undefined;
num1 = 2313;


// 如果是null/undefined/number三者之一，则使用如下写法
var tip: number | null | undefined;
tip = 312313;


// ***************************************************************************
// void类型             // 一般用于不会返回任何数据的函数
// 正确写法
// 无返回值
function noValue():void {
    console.log('这个函数无返回值');
}
noValue();
// 有返回值
function value(): number {
    return 666;
}
value();
console.log(value()) ///666

// 错误写法
// 无返回值
// function noValueError(): number { // A function whose declared type is neither 'void' nor 'any' must return a value.
//     console.log('无返回值：这个是错误的写法');
// }


// function noValueError(): void { // A function whose declared type is neither 'void' nor 'any' must return a value.
//     return 88888;  // Type '88888' is not assignable to type 'void'.
// }


// ***************************************************************************
// never类型             // 是其他的类型的子类型，代表不会出现的值

// 这意味这声明never的变量只能被never类型所赋值
var a: undefined;
// a = 666;    // Type '666' is not assignable to type 'undefined'.
a = undefined;


var emp: null;
// emp = 666;  // Type '666' is not assignable to type 'null'.
emp = null;
"use strict";
// ***************************************************************************
// 布尔类型(boolean)
// es5写法（正确)  但是在ts中是错的，类型声明且修改后前后必须一致
// var isShow = false;
// isShow = 133;
// ts写法
var isShow = false;
isShow = true;
// ***************************************************************************
// 数字类型(number)
// 错误写法
// let startIndex: number = 0;
// startIndex = '6666';   Type '"6666"' is not assignable to type 'number'.
// 正确写法
var startIndex = 0;
startIndex = 666;
// ***************************************************************************
// 字符串类型(string)
// 错误写法
// let des: string = 'vera';
// des = 1232  Type '1232' is not assignable to type 'string'.
// 正确写法
var des = 'vera';
des = '66666';
// ***************************************************************************
// 数组类型（array） ts中有两种方式
// 方法一：数组中每一个都是number类型
var arr = [1, 11, 111];
// 方法二：
// var arr1: Array<number> = [1, 11, 111, '1111']   Type 'string' is not assignable to type 'number'.
var arr2 = [1, 11, 111, 1111];
// ***************************************************************************
// 元组类型(tuple)  属于数组类型的一种
// 什么时候使用呢？=》 数组中的每一项数据类型不固定
var arr3 = [1, 'this is string'];
var arr4 = [212, 121, '6767'];
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
var state;
(function (state) {
    state[state["success"] = 200] = "success";
    state[state["error"] = 400] = "error";
    state[state["doing"] = 222] = "doing";
    state[state["done"] = 1000] = "done";
})(state || (state = {}));
var e = state.done;
console.log(e); // 1000
// #####################################################################################
var stateStr;
(function (stateStr) {
    stateStr[stateStr["success"] = 200] = "success";
    stateStr[stateStr["error"] = 400] = "error";
    stateStr[stateStr["doing"] = 222] = "doing";
    stateStr[stateStr["done"] = 1000] = "done";
})(stateStr || (stateStr = {}));
var statusCode = stateStr.done;
console.log(statusCode); // 1000
// 注意观察转换之后的js文件, 得出结果：
//  如果值全部为number类型，则其实是有原来的四对变成了8对，反之，则只有四对，如下所示:
// enum stateStr {
//     'success' = 200,
//     'error' = 400,
//     'doing' = 222,
//     'done' = 1000,
//     200 = 'success',
//     400 = 'error',
//     222 = 'doing',
//     1000 = 'done'
// }
// 理解: 枚举类型就好比scss中的统一管理主题色（$THEME_COLOR: #FFF）的作用，将变量也统一管理起来，目的是防止代码出错，看似有点类似于vuex中的mutation-type中定义变量的作用。
// #####################################################################################
// 例子二
// 未赋值  des:未赋值的话，返回的是所在下标
var color1;
(function (color1) {
    color1[color1["pink"] = 0] = "pink";
    color1[color1["red"] = 1] = "red";
    color1[color1["yellow"] = 2] = "yellow";
    color1[color1["blue"] = 3] = "blue";
})(color1 || (color1 = {}));
var themeColor1 = color1.blue;
console.log(themeColor1); // 3
// 赋值  des:赋值的话，返回的是所在的东西
// 只赋值一个
var color2;
(function (color2) {
    color2[color2["pink"] = 5] = "pink";
    color2[color2["red"] = 6] = "red";
    color2[color2["yellow"] = 7] = "yellow";
    color2[color2["blue"] = 8] = "blue";
})(color2 || (color2 = {}));
var valueColor2 = color2.pink;
console.log(valueColor2); // 5
var themeColor2 = color2.yellow;
console.log(themeColor2); // 7
var themeColor2 = color2.blue;
console.log(themeColor2); // 8
// 赋值两个
var color3;
(function (color3) {
    color3[color3["pink"] = 5] = "pink";
    color3[color3["red"] = 7] = "red";
    color3[color3["yellow"] = 8] = "yellow";
    color3[color3["blue"] = 9] = "blue";
})(color3 || (color3 = {}));
var valueColor3 = color3.pink;
console.log(valueColor3); // 5
var themeColor3 = color3.yellow;
console.log(themeColor3); // 8
var themeColor3 = color3.blue;
console.log(themeColor3); // 9
// ***************************************************************************
// 任意类型(any)
var num = 312321;
num = 'string';
// 任意类型的用法
// 错误用法一：
// var ele = document.getElementById('box');
// ele.style.color = 'red'; // Object is possibly 'null'.
// 错误用法二：
// var ele: object = document.getElementById('box');  // Property 'style' does not exist on type 'object'.因为没有object这种数据类型
// ele.style.color = 'red'; // 类型“object”上不存在属性“style”。
// 正确用法
var ele = document.getElementById('box');
ele.style.color = 'lightblue';
// #####################################################################################
// 任意类型错误用法两种不属于数据类型问题，故放在此处不合适。
// Why?
// Answer:  因为ts代码只是一种书写规范，并不会检查你的逻辑到底对不对。所以此处它根本就不会判断你得标签中是否存在一个id为box的标签，所以你需要允许它为空
// How to deal with this error?
// 方法一:  加英文叹号:ele!.style.color = 'red';
// 方法二:  由于方法一的存在，试想一下，如果多出都需要加!号，满篇都是这样子的代码，工作量增加，代码可读性降低
//          所以需要在tsconfig.json中将"strictNullChecks": true改为"strictNullChecks": false
// 
// 至于正确写法放在这里也是有问题，它也不属于数据类型问题
// 并且这样子写不对，本来ts就是为了规范类型，给他any类型就失去了ts自身对于数据类型规范的作用。
// #####################################################################################
// ***************************************************************************
// null and undefined类型   其他(never)数据类型的子类型
//  var tips: null;
//  tips = 'bhfbvcbfhd'  // Type '"bhfbvcbfhd"' is not assignable to type 'null'.
// var _num: number;
// console.log(_num); // Variable '_num' is used before being assigned.
var num_;
console.log(num_); // undefined
// num_ = 21312; // Type '21312' is not assignable to type 'undefined'. 一般不会这么用，除非他一直都是undefined
// 定义为赋值
var num1;
num1 = 2313;
// 如果是null/undefined/number三者之一，则使用如下写法
var tip;
tip = 312313;
// ***************************************************************************
// void类型             // 一般用于不会返回任何数据的函数
// 正确写法
// 无返回值
// #####################################################################################
// 函数注释规范：后期可以通过工具转成标准的文档说明，见例子add函数
/**
 *
 */
// #####################################################################################
function noValue() {
    console.log('这个函数无返回值');
}
noValue();
// 有返回值
function value() {
    return 666;
}
value();
console.log(value()); ///666
// #####################################################################################
/**
 * 计算两个数相加之和
 * @param a 第一个参数
 * @param b 第二个参数
 */
function add(a, b) {
    return 11111;
}
add(1, 1);
// How to create this annotation format?
// 在function的上一行敲出/** */，按下enter即可自动生成。
// #####################################################################################
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
var a;
// a = 666;    // Type '666' is not assignable to type 'undefined'.  一般不会这么用，除非他一直都是undefined
a = undefined;
var emp;
// emp = 666;  // Type '666' is not assignable to type 'null'.  一般不会这么用，除非他一直都是undefined
emp = null;
// 小理解: 
//          TypeScript中就算出现红色的下划线报错信息，但是依然不会阻碍它转换成js，而且会一字不差，完完整整的转换成js。
//          Ts并不会去检测你的逻辑代码到底对不对，对与不对，只能转换成js，才知道。

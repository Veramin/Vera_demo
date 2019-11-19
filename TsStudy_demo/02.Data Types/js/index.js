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

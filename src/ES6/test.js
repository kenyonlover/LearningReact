function testfunc1(){
    console.log("已经执行了testfunc函数");
}

testfunc1();

function add(a,b){
    if(a&&b){
        return a+b;
    }else {
        return "不能计算";
    }
}

console.log(add(1,2));

function testArguments(){
    var a = arguments[0];
    var b = arguments[1];
    if(a&&b){
        return a+b;
    }else {
        return "不能计算";
    }
}

console.log(testArguments(1,2));

var add2 = function(){
    var a = arguments[0];
    var b = arguments[1];
    if(a&&b){
        return a+b;
    }else {
        return "不能计算";
    }
}

var def = add2;

console.log(def(1,2));

// 回调函数
var callback = function(name){
    console.log(name);
}

/**
 * 测试回调函数
 * @param {Number} a 
 * @param {Number} b 
 * @param {Function} c 
 */
function testCallback(a,b,c){
    if(a&&b){
        if(c && c instanceof Function){//判断c是否存在并且为一个函数
            c("回调：可以进行计算");
        }
        return a+b;
    }else {
        return "不能计算";
    }
}

console.log(testCallback(10,20,callback));
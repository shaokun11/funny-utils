"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var randomType;
(function (randomType) {
    randomType[randomType["NUMBER"] = 1] = "NUMBER";
    randomType[randomType["ALPHA"] = 2] = "ALPHA";
    randomType[randomType["UPPER_ALPHA"] = 4] = "UPPER_ALPHA";
    randomType[randomType["ALL"] = 7] = "ALL";
})(randomType = exports.randomType || (exports.randomType = {}));
/**
 *从指定的源字符串中产生随机的字符串
 *
 * @export
 * @param {randomStrParams} params
 * @returns
 */
function randomStr(params) {
    var allTypeCount = 3;
    var defautlParams = { type: randomType.ALL, length: 10, overriderSource: false, otherSource: "" };
    params = __assign({}, defautlParams, params);
    var nums = "0123456789";
    var apha = "abcdefghijklmnopqrstuvwxyz";
    var upperAlpha = apha.toUpperCase();
    var all = [nums, apha, upperAlpha];
    var source = "";
    if (params.overriderSource) {
        source = params.otherSource;
    }
    else {
        source += params.otherSource;
        var queryType = params.type & randomType.ALL;
        var currentPosition = 0;
        while (currentPosition < allTypeCount) {
            if ((Number(queryType) & 1) === 1) {
                source += all[currentPosition];
            }
            queryType = queryType >> 1;
            currentPosition++;
        }
    }
    var res = "";
    var start = 0;
    while (start < params.length) {
        res += randomElement(source)[1];
        start++;
    }
    return res;
}
exports.randomStr = randomStr;
/**
 * 打乱数组,字符串 或者随机返回新的数组或者字符串
 *
 * @export
 * @param {([] | string)} source    数据源,不能为空
 * @param {number} [length=source.length]   返回数据的长度,默认为输入数据的长度,即打乱数据
 * @param {false} allownRepeat       是否重复从数据源中取随机数据
 * @returns 随机字符串或者打乱的数组
 */
function randomManyElements(source, allownRepeat, length) {
    if (length === void 0) { length = source.length; }
    if (length > source.length) {
        length = source.length;
    }
    var newSource = [];
    if (typeof source === "string") {
        newSource = source.split("");
    }
    else {
        newSource = source.slice();
    }
    var res = [];
    var start = 0;
    if (!allownRepeat) {
        while (start < length) {
            var _a = __read(randomElement(newSource), 2), index = _a[0], element = _a[1];
            newSource.splice(index, 1);
            res.push(element);
            start++;
        }
    }
    else {
        while (start < length) {
            var _b = __read(randomElement(newSource), 2), _ = _b[0], element = _b[1];
            res.push(element);
            start++;
        }
    }
    if (typeof source === "string") {
        return res.join('');
    }
    else {
        return res;
    }
}
exports.randomManyElements = randomManyElements;
/**
 * 随机获取指定数据的位置和元素
 *
 * @export
 * @param {([] | string)} source    源数据,不能为null
 * @returns {[number, any]}
 */
function randomElement(source) {
    if (!source)
        throw "source must have value";
    var index = Math.floor(Math.random() * source.length);
    var element = source.slice(index, index + 1)[0];
    return [index, element];
}
exports.randomElement = randomElement;
/**
 *将秒格式化成可识别的的数字,一般用于倒计时,或者duration的显示
 *
 * @export
 * @param {number} ms  秒
 * @param {boolean} [showDay=false]  是否显示day
 * @returns  数组,可以使用arr.join(':') 格式化显示
 */
function formatDay(secondTime, showDay) {
    if (showDay === void 0) { showDay = false; }
    var minuteTime = 0;
    var hourTime = 0;
    var dayTime = 0;
    //如果秒数大于60，将秒数转换成整数
    if (secondTime > 60) {
        minuteTime = Math.floor(secondTime / 60);
        secondTime = secondTime % 60;
    }
    //如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
        hourTime = Math.floor(minuteTime / 60);
        minuteTime = minuteTime % 60;
    }
    if (hourTime > 24) {
        dayTime = Math.floor(hourTime / 24);
        hourTime = hourTime % 24;
    }
    // 如果不显示天则把天的时间加入到小时上
    if (!showDay)
        hourTime += dayTime * 24;
    var dayStr = '' + dayTime;
    var hourStr = '' + hourTime;
    var minStr = '' + minuteTime;
    var secStr = '' + secondTime;
    if (dayTime < 10)
        dayStr = "0" + dayTime;
    if (hourTime < 10)
        hourStr = "0" + hourTime;
    if (minuteTime < 10)
        minStr = "0" + minuteTime;
    if (secondTime < 10)
        secStr = "0" + secondTime;
    var res = [hourStr, minStr, secStr];
    return showDay ? __spread([dayStr], res) : res;
}
exports.formatDay = formatDay;
//# sourceMappingURL=index.js.map
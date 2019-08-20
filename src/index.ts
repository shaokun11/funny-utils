
export enum randomType {
    NUMBER = 1 << 0,
    ALPHA = 1 << 1,
    UPPER_ALPHA = 1 << 2,
    ALL = NUMBER | ALPHA | UPPER_ALPHA
}

interface randomStrParams {
    type?: randomType,          // 随机字符串的类型,包括数字,小写字母,大写字母 ,默认为所有类型
    length?: number,            // 生成随机字符串的长度 默认为10
    otherSource?: string,       // 其他的的数据源,比如 "~@" 默认为''
    overriderSource?: boolean   //是否使用其他数据源覆盖默认的数据源 默认为false
}
/**
 *从指定的源字符串中产生随机的字符串
 *
 * @export
 * @param {randomStrParams} params
 * @returns 
 */
export function randomStr(params: randomStrParams) {
    const allTypeCount = 3;
    const defautlParams = { type: randomType.ALL, length: 10, overriderSource: false, otherSource: "" }
    params = { ...defautlParams, ...params }
    const nums = "0123456789"
    const apha = "abcdefghijklmnopqrstuvwxyz"
    const upperAlpha = apha.toUpperCase()
    const all = [nums, apha, upperAlpha]
    let source = ""
    if (params.overriderSource) {
        source = params.otherSource;
    } else {
        source += params.otherSource;
        let queryType = params.type & randomType.ALL;
        let currentPosition = 0
        while (currentPosition < allTypeCount) {
            if ((Number(queryType) & 1) === 1) {
                source += all[currentPosition];
            }
            queryType = queryType >> 1;
            currentPosition++
        }
    }
    let res = ""
    let start = 0;
    while (start < params.length) {
        res += randomElement(source)[1]
        start++;
    }
    return res;
}
/**
 * 打乱数组,字符串 或者随机返回新的数组或者字符串
 *
 * @export
 * @param {([] | string)} source    数据源,不能为空
 * @param {number} [length=source.length]   返回数据的长度,默认为输入数据的长度,即打乱数据
 * @param {false} allownRepeat       是否重复从数据源中取随机数据       
 * @returns 随机字符串或者打乱的数组
 */
export function randomManyElements(source: [] | string, allownRepeat: false, length: number = source.length) {
    if (length > source.length) {
        length = source.length
    }
    let newSource = []
    if (typeof source === "string") {
        newSource = source.split("")
    } else {
        newSource = source.slice()
    }
    let res = []
    let start = 0;
    if (!allownRepeat) {
        while (start < length) {
            const [index, element] = randomElement(newSource)
            newSource.splice(index, 1);
            res.push(element);
            start++;
        }
    } else {
        while (start < length) {
            const [_, element] = randomElement(newSource)
            res.push(element);
            start++;
        }
    }
    if (typeof source === "string") {
        return res.join('');
    } else {
        return res;
    }
}

/**
 * 随机获取指定数据的位置和元素
 *
 * @export
 * @param {([] | string)} source    源数据,不能为null
 * @returns {[number, any]}
 */
export function randomElement(source: any[] | string): [number, any] {
    if (!source) throw "source must have value"
    const index = Math.floor(Math.random() * source.length)
    const element = source.slice(index, index + 1)[0]
    return [index, element]
}

/**
 *将秒格式化成可识别的的数字,一般用于倒计时,或者duration的显示
 *
 * @export
 * @param {number} ms  秒
 * @param {boolean} [showDay=false]  是否显示day
 * @returns  数组,可以使用arr.join(':') 格式化显示
 */
export function formatDay(secondTime: number, showDay = false) {
    let minuteTime = 0;
    let hourTime = 0;
    let dayTime = 0
    //如果秒数大于60，将秒数转换成整数
    if (secondTime > 60) {
        minuteTime = Math.floor(secondTime / 60);
        secondTime = secondTime % 60;
    }
    //如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
        hourTime = Math.floor(minuteTime / 60);
        minuteTime = minuteTime % 60
    }
    if (hourTime > 24) {
        dayTime = Math.floor(hourTime / 24);
        hourTime = hourTime % 24
    }
    // 如果不显示天则把天的时间加入到小时上
    if (!showDay) hourTime += dayTime * 24
    let dayStr = '' + dayTime
    let hourStr = '' + hourTime
    let minStr = '' + minuteTime
    let secStr = '' + secondTime
    if (dayTime < 10) dayStr = "0" + dayTime;
    if (hourTime < 10) hourStr = "0" + hourTime;
    if (minuteTime < 10) minStr = "0" + minuteTime;
    if (secondTime < 10) secStr = "0" + secondTime;
    let res = [hourStr, minStr, secStr];
    return showDay ? [dayStr, ...res] : res
}

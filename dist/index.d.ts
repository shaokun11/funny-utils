export declare enum randomType {
    NUMBER = 1,
    ALPHA = 2,
    UPPER_ALPHA = 4,
    ALL = 7
}
interface randomStrParams {
    type?: randomType;
    length?: number;
    otherSource?: string;
    overriderSource?: boolean;
}
/**
 *从指定的源字符串中产生随机的字符串
 *
 * @export
 * @param {randomStrParams} params
 * @returns
 */
export declare function randomStr(params: randomStrParams): string;
/**
 * 打乱数组,字符串 或者随机返回新的数组或者字符串
 *
 * @export
 * @param {([] | string)} source    数据源,不能为空
 * @param {number} [length=source.length]   返回数据的长度,默认为输入数据的长度,即打乱数据
 * @param {false} allownRepeat       是否重复从数据源中取随机数据
 * @returns 随机字符串或者打乱的数组
 */
export declare function randomManyElements(source: [] | string, allownRepeat: false, length?: number): string | any[];
/**
 * 随机获取指定数据的位置和元素
 *
 * @export
 * @param {([] | string)} source    源数据,不能为null
 * @returns {[number, any]}
 */
export declare function randomElement(source: any[] | string): [number, any];
/**
 *将秒格式化成可识别的的数字,一般用于倒计时,或者duration的显示
 *
 * @export
 * @param {number} ms  秒
 * @param {boolean} [showDay=false]  是否显示day
 * @returns  数组,可以使用arr.join(':') 格式化显示
 */
export declare function formatDay(secondTime: number, showDay?: boolean): string[];
export {};

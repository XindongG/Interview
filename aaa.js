/**
 *@desc: 两数之和
 *@author: XinD
 *@date: 2020/11/12
 */
const twoSum = function (nums, target) {
	let i = 0;
	let temp = new Map();
	while(i < nums.length) {
		if(temp.has(target - nums[i])) {
			return [temp.get(target - nums[i]), i];
		}
		temp.set(nums[i], i);
		i++;
	}
};
// console.log(twoSum([ 100, 200, 5, 300, 1], 6));
/**
 *@desc: 无重复字符的最长子串
 *@author: XinD
 *@date: 2020/11/12
 */
const lengthOfLongestSubstring = function (s) {
	let maxLength = 0,
		i = 0,
		str = '';
	while(i < s.length) {
		let idx = str.indexOf(s[i]);
		str += s[i];
		if(idx === -1) {
			maxLength = maxLength < str.length ? str.length : maxLength;
		} else {
			str = str.slice(idx + 1);
		}
		i++;
	}
	return maxLength;
};
// lengthOfLongestSubstring('abcabcbb');

/**
 *@desc: 寻找两个正序数组的中位数
 *@author: XinD
 *@date: 2020/11/12
 */
const findMedianSortedArrays = function (nums1, nums2) {
	let arr = [...nums1, ...nums2],
		i = 0,
		num = 0;
	arr = arr.sort((x, y) => x - y);
	const arrLength = arr.length;
	while(i <= arrLength) {
		if(arr.length < 2) {
			num = arr[0];
			break;
		} else if(arr.length === 2) {
			num = arr[0] === arr[1] ? arr[0] : (arr[0] + arr[1]) / 2;
			break;
		} else {
			arr = arr.slice(1, arr.length - 1);
		}
		i++;
	}
	return num;
};
// findMedianSortedArrays([1,1], [1, 2]);
/**
 *@desc: 合并两个有序数组
 *@author: XinD
 *@date: 2020/11/12
 */
const merge = function (nums1, m, nums2, n) {
	nums1 = [...nums1];
	nums1.length = m;
	nums2 = [...nums2];
	nums2.length = n;
	let arr = [...nums1, ...nums2];
	arr.filter(prod => prod);
	arr = arr.sort((x, y) => x - y);
	return arr;
};
/**
 *@desc:测试数据
 	let fn1 = function (x) {
		console.log(x);
		return x + 10;
	};
	let fn2 = function (x) {
		return x * 10;
	};
	let fn3 = function (x) {
		return x / 10;
	};
 *@desc: 手写compose（扁平化函数处理）
 *@author: XinD
 *@date: 2020/11/18
 */

function compose(...funs){
	let length = funs.length;
	return function (...args){
		if(!length){
			return args;
		}
		if(length === 1){
			funs[0](args);
		}
		return funs.reduce((x, y)=>{
			return typeof x === 'function' ? y(x(...args)) : y(x);
		});
	};
}

/**
 *@desc: 深拷贝
 *@author: XinD
 *@date: 2020/11/18
 */
function copy(target){
	let result;
	if(typeof target === 'object'){
		if(Array.isArray(target)){
			result = target.map(prod=>prod);
		} else if(target === null){
			result = null;
		} else {
			result = {};
			Object.keys(target).map(prod=>{
				if(typeof target[prod] === 'object'){
					result[prod] = copy.arguments.callee(target[prod]);
				} else {
					result[prod] = target[prod];
				}
			});
		}
	} else {
		result = target;
	}
	return  result;
}

function flat(arr){
	let retult = [];
	if(arr && arr.length){
		arr.reduce((x, y)=>{
			if(Array.isArray(x) && x){
				retult = [...retult, ...flat.arguments.callee(x)];
			} else {
				retult = x ? [...retult, x] : retult;
			}
			if(Array.isArray(y) && y){
				retult = [...retult, ...flat.arguments.callee(y)];
			} else {
				retult = y ? [...retult, y] : retult;
			}
		});
	}
	return retult;
}
// console.log(flat( [1, [1, 2], [1, [2, [3, 4]]]]));

/**
 *@desc: 只允许单次调用，剩余调用都返回第一次调用结果（闭包）
 *@author: XinD
 *@date: 2020/11/19
 */
const once = (fun) => {
	let result;
	let flag = false;
	return (...arg)=>{
		if(flag) return result;
		const f = fun(...arg);
		result = f;
		flag = true;
		return result;
	};
};
// let _once = once((a)=>{
// 	return a;
// });
// console.log(_once(3));

/**
 *@desc: 判断是否为纯对象
 *@author: XinD
 *@date: 2020/11/19
 */

const isObject = (obj) =>{
	if(typeof obj !== 'object' || obj === null || Array.isArray(obj)) return false;
	return true;
};

/**
 *@desc: 编码 Input: 'aaaabbbccd' Output: 'a4b3c2d1'
 *@author: XinD
 *@date: 2020/11/19
 */
const _encode = (str) =>{
	let resultObj = {};
	str = str.split('');
	let resultStr = '';
	str.map(prod=>{
		resultObj[prod] = resultObj[prod] ? resultObj[prod] + 1 : 1;
	});
	Object.keys(resultObj).map(prod=>{
		resultStr += `${prod}${resultObj[prod]}`;
	});
	console.log(resultStr);

};
// _encode('aaaabbbccd');

/**
 *@desc: sleep函数
 *@author: XinD
 *@date: 2020/11/19
 */
const sleep = (times) =>{
	return new Promise(resolve => setTimeout(resolve, times));
};
/**
 *@desc: 洗牌算法实现随机取n个
 *@author: XinD
 *@date: 2020/11/20
 */
const sample = (arr, num) =>{
	let length = arr.length,
		tamp,
		random;
	while(length){
		random = Math.floor(Math.random()*length);
		tamp = arr[length];
		arr[length] = arr[random];
		arr[random] = tamp;
		length--;
	}
	return arr.slice(0, num);
};
// class Fn{
// 	constructor() {
// 		this.abc = 1212;
// 		this.bbb = 456;
// 	}
// 	haha(){
// 		console.log(this.__proto__.test);
// 	}
// }
// let _fn = new Fn();
// Fn.prototype.test = '你好';
// _fn.haha();

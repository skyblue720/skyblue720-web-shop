// console.log('hello world' + '世界');
// var a = 1, b;
// console.log(typeof (a), b, null);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE, Date());
// console.log(Boolean('1'));

console.info('本页面由 skyblue 开发维护  ',Date())

// 冒泡排序
function bubbleSort(arr) { for (let i = 0; i < arr.length; i++) { for (let j = 0; j < arr.length - i - 1; j++) { if (arr[j] > arr[j + 1]) { let temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp; } } } return arr; }

console.info(bubbleSort([6,3,5,8,4,2]))
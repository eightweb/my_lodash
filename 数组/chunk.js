/* 
  *   作用: 用于分割数组 为多个
  *   示例: chunk([1,2,3], 2)  ==>> [[1,2],[3]]
  *   思路: 获取数组的长度, 拿长度 / size 并向上取整 得到返回数组的长度 [, ,]
  *         截取原数组, 放到新数组的对应位置上
  * 
  *   参数: array: 要切割的数组
  *         size: 以多少个切一次
*/

function chunk (array, size = 1) {
  const length = array ? array.length : 0; // 获取array的长度
  if (!length || size < 1) { // 如果原始数组长度不存在 或者 要分割的长度不支持 就返回 []
    return []
  }
  const size1 = Math.ceil(length / size); // 得到新数组的长度
  const newArr = new Array(size1); // 切割后的数组
  for (let i = 0; i < size1; i++) {
    newArr[i] = array.slice(i * size, (i * size + size));
  }
  return newArr
}

var chunkArr = chunk([1,2,3,4,3,2,4,5,6,3,2,4], 7);
console.log(chunkArr)

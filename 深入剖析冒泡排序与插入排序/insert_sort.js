function insertionSort(arr) {

  const len = arr.length;
  
  // 开始排序时有序区只有一个数arr[0]，所以不用排序，直接跳过。
  for (let i = 1; i < len; i++) {
  
    // 从无序区读取出第一个数
    const unSortedItem = arr[i];
    
    // 有序区域排头索引
    let sortedIndex = i - 1;
    
    // 和有序区的数做比较
    while (sortedIndex >= 0 && arr[sortedIndex] > unSortedItem) {
    
      //如果发现有序区域的数大就前移一个位置
      arr[sortedIndex + 1] = arr[sortedIndex];
      
      // 移动有序区域指针到下一个进行比较
      sortedIndex--;
      
    }
    
    // 将无序区域的数字插入到指定位置
    arr[sortedIndex + 1] = unSortedItem;
  }

  return arr;
}

const arr1 = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000)
);

console.time("insertionSort");
const sortedArr2 = insertionSort(arr1);
console.timeEnd("insertionSort");
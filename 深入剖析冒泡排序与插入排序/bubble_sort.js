function bubbleSort(arr) {
  const len = arr.length;
  let hasSwapped;
  // 已经排序好的元素的数量
  for (let i = 0; i < len - 1; i++) {
    hasSwapped = false; // 如果没有发生交换则说明已经排序顺序了
    for (let j = 0; j < len - 1 - i; j++) {
      // 从0开始对没有排好顺序的元素进行比较，如果顺序不对调换位置
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        hasSwapped = true;
      }
    }
    if (!hasSwapped) break;
  }

  return arr;
}

const arr1 = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000)
);

console.time("bubbleSort");
const sortedArr2 = bubbleSort(arr1);
console.timeEnd("bubbleSort");

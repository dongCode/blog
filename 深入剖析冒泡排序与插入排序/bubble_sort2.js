function bubbleSort(arr) {
  const len = arr.length;
  // 记录未排序的末尾
  let lastSwappedIndex = len - 1;

  while (lastSwappedIndex > 0) {
    // 记录发生交换的位置，如果没有发生交换说明已经交换好了
    let newLastSwappedIndex = 0;
    
    for (let i = 0; i < lastSwappedIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        newLastSwappedIndex = i;
      }
    }

    lastSwappedIndex = newLastSwappedIndex;
  }
  return arr;
}

const arr1 = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000)
);

console.time("bubbleSort");
const sortedArr2 = bubbleSort(arr1);
console.timeEnd("bubbleSort");

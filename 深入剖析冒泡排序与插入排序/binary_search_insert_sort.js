function binaryInsertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const current = arr[i];
    let left = 0;
    let right = i - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > current) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    arr[left] = current;
  }
  return arr;
}

const arr1 = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000)
);

console.time("binaryInsertionSort");
const sortedArr2 = binaryInsertionSort(arr1);
console.timeEnd("binaryInsertionSort");

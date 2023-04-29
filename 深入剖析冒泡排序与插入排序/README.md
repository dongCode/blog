
# 冒泡排序和插入排序的对话

![Bubble-sort-example-300px.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6eab29e641cf4200ac0b519558cba19b~tplv-k3u1fbpfcp-zoom-1.image)

冒泡排序：你知道吗，我是最简单的排序算法，只要不断地交换相邻的元素，就能把最大的元素放到最后。

插入排序：哦，是吗？那你的时间复杂度是多少？

冒泡排序：O(n^2)。

插入排序：哈哈，那你太慢了，我只需要O(n)的时间就能在已经有序的数组上完成排序。

冒泡排序：那你在最坏的情况下呢？

插入排序：嗯……也是O(n^2)。

冒泡排序：那你有什么优势？

插入排序：我……我比你稳定！

冒泡排序：不一定，如果你用交换法而不是移动法来实现，你也会变得不稳定。

插入排序：……

故事虽短，内容挺多

# 什么是冒泡排序和插入排序？

# 冒泡排序

冒泡排序基本步骤
1. 比较相邻的两个元素
2. 如果顺序错误（**升序或降序排列**），就交换位置
  
动态效果


![Bubble-sort-example-300px.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/176e31824eb34843866df96b937539e0~tplv-k3u1fbpfcp-watermark.image?)


```js
// 冒泡排序 从小到大 升序排列
function bubbleSort(arr) {
  const len = arr.length;
  let hasSwapped;
 // 已经排序好的元素的数量
  for (let i = 0; i < len - 1; i++) { 
    hasSwapped = false;  // 如果没有发生交换则说明已经排序顺序了
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

```

以上算法虽然优化了，如果没有发生交换说明排列已经好了，但是在缩小未排序区域时是从最后一位逐步递减的，这里还有优化的空间，优化进阶版本可以是


```js
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
```

以上写法在测试**1万条**未排序数据时，比上一版本平均快个 **100ms**，**10万条**未排序数据时，比上一版本平均快个 **10s** ,虽然实际业务中没有卵用，但**对于算法分析来说还是有那么一丁丁点的作用**


算法分析


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/922d34698c034c64a096318b9d06b4cf~tplv-k3u1fbpfcp-watermark.image?)



根据电商订单数量排序结合订单时间说明**冒泡排序的稳定性**。假设我们有以下几个订单：

```
订单号  订单数量  订单时间
A       5         10:00
B       3         10:05
C       5         10:10
D       2         10:15
E       3         10:20
```

我们想要按照订单数量从小到大排序，如果订单数量相同，就按照订单时间从早到晚排序。我们可以使用冒泡排序来实现这个需求。冒泡排序的过程如下：

```
第一次排序后：
订单号  订单数量  订单时间
D       2         10:15
B       3         10:05
E       3         10:20
A       5         10:00
C       5         10:10

第二次排序后：
订单号  订单数量  订单时间
D       2         10:15
B       3         10:05
E       3         10:20
A       5         10:00
C       5         10:10

第三次排序后：
订单号  订单数量  订单时间
D       2         10:15
B       3         10:05
E       3         10:20
A       5         10:00
C       5         10:10

第四次排序后：
订单号  订单数量  订单时间
D       2         10:15
B       3         10:05
E       3         10:20
A       5         10:00
C       5         10:10
```

从结果中可以看出，冒泡排序是稳定的，即相同订单数量的订单在排序后不会改变它们原来的相对时间顺序。比如两个订单数量为3的订单，B和E，在原数组中B在E的前面，在排序后仍然保持这个顺序。


总而言之，言而总之，**终于精通冒泡排序了，可不可以把它用在项目中呢？**，请看下图自行体会
![Bubble-sort-example-300px.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8dc85f7bb40d40b898709d3564ceb52d~tplv-k3u1fbpfcp-zoom-1.image)



### 插入排序

插入排序，它的工作原理是将列表分成两部分：已排序部分和未排序部分。

初始时，已排序部分只包含第一个元素，然后逐个将未排序部分的元素插入到已排序部分的适当位置，直到列表完全排序。


```js
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
```


![insertionSort.gif](https://camo.githubusercontent.com/ac772dfad98df54c1658e98dcfeb11f76aa7e7f027558554067c9eeef219d852/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f302f30662f496e73657274696f6e2d736f72742d6578616d706c652d33303070782e676966)

假设我们有以下几个数：

```
5 3 7 2 4
```

我们想要按照从小到大的顺序排序，我们可以使用插入排序来实现这个需求。插入排序的过程如下：

```
第一步：把第一个数5当作有序区，把后面的数当作无序区。有序区只有一个数，所以不用排序，直接跳过。

第二步：从无序区取出第一个数3，和有序区的数5比较，发现3比5小，就把3插到5的前面，形成新的有序区。这时候有序区是3 5，无序区是7 2 4。

第三步：从无序区取出第一个数7，和有序区的数5比较，发现7比5大，就不用动。然后和有序区的数3比较，发现7比3大，也不用动。所以7就插在原来的位置，形成新的有序区。这时候有序区是3 5 7，无序区是2 4。

第四步：从无序区取出第一个数2，和有序区的数7比较，发现2比7小，就把2插到7的前面。然后和有序区的数5比较，发现2比5小，就把2插到5的前面。再然后和有序区的数3比较，发现2比3小，就把2插到3的前面。形成新的有序区。这时候有序区是2 3 5 7，无序区是4。

第五步：从无序区取出最后一个数4，和有序区的数7比较，发现4比7小，就把4插到7的前面。然后和有序区的数5比较，发现4比5小，就把4插到5的前面。再然后和有序区的数3比较，发现4比3大，就不用动。所以4就插在3和5之间，形成新的有序区。这时候有序区是2 3 4 5 7，无序区为空。

第六步：由于无序区为空，说明排序完成了。最终结果是2 3 4 5 7。
```

这就是插入排序的步骤。你可能觉得这个过程很麻烦，每次都要和有序区的每个数比较一遍，然后找到合适的位置插入。其实这就像你在打扑克牌时候整理手中的牌一样，你会不断地把新拿到的牌插入到合适的位置上，让你手中的牌保持一个顺序。所以插入排序也叫做扑克牌排序。

你可能还觉得这个过程很慢，每次都要移动很多个数来给新来的数腾出空间。其实这也像你在排队买票时候一样，如果你看到前面有个人要买很多张票，你会不会想着插队呢？如果你想插队，你就要让后面的人都往后挪一挪，给你腾出空间。

算法复杂度分析


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e477f6cc1d3147f09a06ce93cf0b8a6a~tplv-k3u1fbpfcp-watermark.image?)




# 哪个算法更快一些

虽然两个复杂度都是相同的，但是实际测试中**插入排序会更快一些**


```js



// 生成一个包含10000 个随机整数的数组
const arr2 = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);

console.time("bubbleSort");
const sortedArr2 = bubbleSort(arr2);
console.timeEnd("bubbleSort");


const arr1 = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);
console.time("insertionSort");
const sortedArr1 = insertionSort(arr1);
console.timeEnd("insertionSort");
```

在10000条未排序的数据下，冒泡排序比插入排序足足慢了**6倍**的时间


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7953e15e1f7e41089b7e44493806838a~tplv-k3u1fbpfcp-watermark.image?)

**这是为什么呢？**

![image.png](http://n.sinaimg.cn/sinacn20191116ac/549/w313h236/20191116/e4f7-iikmuti6092554.gif)


因为冒泡排序需要频繁进行换位置的操作，读取数据时缓存利用率并不高，而插入排序的缓存利用率明显高一些


# 二分搜索插入排序

由于比较是在有序区发生的也就是需要搜索到合适的位置，可以利用二分搜索把复杂度降至 **O(nlogn)**,这样看来插入排序的性能提升了一个量级


```js

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

```











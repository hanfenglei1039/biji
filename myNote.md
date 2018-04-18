##冒泡排序：
比较相邻的两个数，如果前一个数大于后一个数，就将这两个数换位置。每一次遍历都会将本次遍历最大的数冒泡到最后。为了将n个数排好序，需要n-1次遍历。 如果某次遍历中，没有调整任何两个相邻的数的位置关系，说明此时数组已排好序，可以结束程序。
```javascript
Array.prototype.bubbleSort = function() {
    let i, j;
    for (i = 1; i < this.length; i ++) {
        let changed = false;
        for (j = 0; j < this.length; j ++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
                changed = ture;
            }
        }
        if (!changed) {
            break;
        }
    }
}
let arr = [43, 21, 10, 5, 9, 15, 32, 57, 35];
arr.bubbleSort();
console.log(arr);
```

##选择排序:
```javascript
Array.prototype.selectSort = function () {
    let i, j;
    for (i = 1; i < this.length; i ++) {
        let maxIndex = 0;
        for (j = 0; j <= this.length - i; j ++) {
            if (this[j] > this[maxIndex]) {
                maxIndex = j;
            }
        }
        [this[this.length - i], this[maxIndex]] = [this[maxIndex], this[this.length - i]];
    }
}
let arr = [43, 21, 10, 5, 9, 15, 32, 57, 35];
arr.selectSort();
console.log(arr);
```
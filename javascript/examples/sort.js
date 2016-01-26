var BubbleSort = function(arr) {
	"use strict";
    var len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var SelectionSort = function(arr) {
	"use strict";
    for (let i = 0; i < arr.length; ++i) {
        let shortest_index = i;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[shortest_index]) {
                shortest_index = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[shortest_index];
        arr[shortest_index] = temp;

    }
    return arr;
}

var InsertionSort = function(arr) {
    "use strict";
    for (let i = 1; i < arr.length; ++i) {
        for (let j = i; j >= 0; --j) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

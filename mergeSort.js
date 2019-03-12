/* Divide the given array into 2 halves: A left and a right sub array
 Calls mergeSort on these two sub arrays
 Once we get to arrays that are less than 2 in length, we begin to stitch them 
 back together. We sort as we stitch them up, thus leading to our sorted array by the time 
we're all the way back up the stack */

function mergeSort(array) {
	if (array.length < 2) {
		return array;
	}
	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const sorted = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sorted.push(left.shift());
		} else {
			sorted.push(right.shift());
		}
	}
	const results = [...sorted, ...left, ...right];
	return results;
}

console.log(mergeSort([3, 1, 4, 2, 5, 6]));

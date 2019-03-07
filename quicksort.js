function quickSort(array) {
	console.log('here');
	// an array with 0, 1 items is already sorted
	if (array.length < 2) return array;
	// let pivotIndex = array.length -1
	// let pivotIndex = 0
	let pivotIndex = Math.floor(array.length / 2);
	let pivot = array[pivotIndex];
	console.log(pivot);
	let less = [];
	let greater = [];
	for (let i in array) {
		if (i != pivotIndex) {
			array[i] > pivot ? greater.push(array[i]) : less.push(array[i]);
		}
	}
	return [...quickSort(less), pivot, ...quickSort(greater)];
}

// Uses nested loops
// Assumes a sorted list of length 1
// Compares the next item and inserts it before or after depending on the comparison

function insertionSort(array) {
	let i;
	let j;
	for (i = 1; i < array.length; i++) {
		for (j = 0; j < i; j++) {
			if (array[i] < array[j]) {
				const [item] = array.splice(i, 1);
				array.splice(j, 0, item);
			}
		}
	}
	return array;
}

console.log(insertionSort([3, 4, 1, 5, 2]));

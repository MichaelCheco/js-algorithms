// Loop through the array
// If this item > next item, swap them
// Indicate a swap occurred
// If a swap occurred, loop through the array again
// Continue looping until no swaps occur

function bubbleSort(array) {
	let swapped = false;
	do {
		swapped = false;
		array.forEach((item, index) => {
			if (item > array[index + 1]) {
				const temporary = item;
				array[index] = array[index + 1];
				array[index + 1] = temporary;
				swapped = true;
			}
		});
	} while (swapped);
	return array;
}

console.log(bubbleSort([1, 4, 2, 3, 8, 5, 7]));

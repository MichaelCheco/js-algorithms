// Function that loops through array for largest number
// Function that loops through list calling ^^, removing largest from list
const itemsToSort = [3, 2, 4, 1, 6];

function findLargestValue(list) {
	let lrg = list[0];
	let indexofLarge = 0;
	for (let i = 1; i < list.length; i++) {
		if (lrg < list[i]) lrg = list[i];
		indexofLarge = i;
	}
	return indexofLarge;
}

function selectionSort(list) {
	let newList = [];
	let lrgItem;
	while (list.length) {
		lrgItem = findLargestValue(list);
		newList.push(list[lrgItem]);
		list.splice(lrgItem, 1);
	}
	return newList;
}
console.log(selectionSort(itemsToSort));
// o( n ^ 2)

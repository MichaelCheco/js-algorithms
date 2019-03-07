const items = [1, 5, 2, 7, 3, 12, 6, 10];
items.sort((a, b) => a - b);
//O(log n)
// 2 ^3 = 8

function search(list, item) {
	let low = 0;
	let high = list.length;
	let counter = 0;
	while (low <= high) {
		counter++;
		let mid = Math.floor((low + high) / 2);
		let guess = list[mid];
		if (guess === item) return true;
		if (guess > item) high = mid - 1;
		else low = mid + 1;
	}
	console.log(counter);
	return null;
}

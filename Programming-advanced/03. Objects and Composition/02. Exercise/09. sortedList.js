function createSortedList() {
    let res = {

        newRes: [],
		add(x) {
			this.newRes.push(x);
			this.sort();
		},
		get(index) {
			if (index >= 0 && index < this.newRes.length) {
				return this.newRes[index];
			}
		},
		remove(index) {
			if (index >= 0 && index < this.newRes.length) {
				this.newRes.splice(index, 1);
			}
		},
		get size() {
			return this.newRes.length;
		},
		sort() {
			this.newRes = this.newRes.sort((a, b) => a - b);
		},
	};
	return res;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
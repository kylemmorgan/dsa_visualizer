// ArrayLists have sizes (number of entries),
//     capacities (amount of cells available)
class arrayList<T> {
    backingArray: T[];
    size: number;
    constructor(array: T) {
			if (Array.isArray(array)) {
				this.backingArray = array;
			}
			else {
				this.backingArray = [array]
			}
			this.size = this.backingArray.length
    };

    test() {
        console.log(`
					backingArray: ${this.backingArray}
					size: ${this.size}`);
    };
		
		// append

		// prepend

		// insertAt

		// removeBack

		// removeFront

		// removeAt

		// setAt

		// getAt

		// indexOf

		// isEmpty

		// clear
}
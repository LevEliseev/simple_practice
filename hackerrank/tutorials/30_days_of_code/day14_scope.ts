class Difference {
    elements: number[];
    maximumDifference: number;

    constructor(arr: number[]) {
        this.elements = arr;
    }

    computeDifference(): void {
        this.maximumDifference = Math.max(...this.elements) - Math.min(...this.elements);
    }
}

let diff: Difference = new Difference([1, 4, 5]);
diff.computeDifference();
console.log(diff.maximumDifference);
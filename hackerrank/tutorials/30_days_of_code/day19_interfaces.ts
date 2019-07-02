interface AdvancedArithmetic {
    divisorSum: (n: number) => number;
}

class Calculator implements AdvancedArithmetic {
    public divisorSum(n: number): number {
        let sum = 0;
        for (let i = 1; i <= n; i++) if (n % i === 0) sum += i;
        return sum;
    }
}
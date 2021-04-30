function isPositive(num: number): boolean {
    return num >= 0
}

// 使用例
console.log(isPositive(3))

// エラー例
// isPositive('123')

const numVar: boolean = isPositive(-5)
console.log(numVar)
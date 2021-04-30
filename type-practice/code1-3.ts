type IsPositiveFunc = (n: number) =>  boolean

const isPositive: IsPositiveFunc = num => num >= 0;

// 使用例
console.log(isPositive(5)? "Positive":"Negative")


// エラー例
// isPositive('foo');
// const res: number = isPositive(123);
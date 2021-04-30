function isPositive(num) {
    return num >= 0;
}
// 使用例
console.log(isPositive(3));
// エラー例
// isPositive('123')
var numVar = isPositive(-5);
console.log(numVar);

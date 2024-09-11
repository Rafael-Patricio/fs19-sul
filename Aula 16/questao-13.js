// Questão 13
const nums = [1, 2, 3, 4, 5]

// Primeira forma
const doubleNums = nums.map((num) => num * 2)
console.log(doubleNums)


// Segunda forma
for (let i = 0; i < nums.length; i++) {
    nums[i] *= 2
}
console.log(nums)
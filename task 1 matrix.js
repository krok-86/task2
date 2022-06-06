function drawSpiralMatrix(n){
const matrix = [];
for (let i = 0; i < n; i++) {
    matrix.push([]);
}
let number = 1;
    for (let i = 0; i < n -1; i++) {
        for (let j = i; j < n - i; j++) {
            matrix[i][j] = number++;
        }
        for (let k = i + 1; k < n - i; k++) {
            matrix[k][n - 1 - i] = number++;
        }
        for (let j = n - i - 2; j >=i; j--) {
            matrix[n-1-i][j] = number++;
        }
        for (let k = n - 2 - i; k > i; k--) {
            matrix[k][i] = number++;
        }
    }
return matrix;
    }
console.log(drawSpiralMatrix(4));



function createMatrices() {
    const rowsMatrix1 = parseInt(document.getElementById('rowsMatrix1').value);
    const colsMatrix1 = parseInt(document.getElementById('colsMatrix1').value);
    const rowsMatrix2 = parseInt(document.getElementById('rowsMatrix2').value);
    const colsMatrix2 = parseInt(document.getElementById('colsMatrix2').value);
    const matrix1Inputs = document.getElementById('matrix1Inputs');
    const matrix2Inputs = document.getElementById('matrix2Inputs');

    matrix1Inputs.innerHTML = '';
    matrix2Inputs.innerHTML = '';

    for (let i = 0; i < rowsMatrix1; i++) {
        for (let j = 0; j < colsMatrix1; j++) {
            matrix1Inputs.innerHTML += `<input type="number" id="m1_${i}_${j}" placeholder="Matriz 1[${i}][${j}]">`;
        }
        matrix1Inputs.innerHTML += "<br>";
    }

    for (let i = 0; i < rowsMatrix2; i++) {
        for (let j = 0; j < colsMatrix2; j++) {
            matrix2Inputs.innerHTML += `<input type="number" id="m2_${i}_${j}" placeholder="Matriz 2[${i}][${j}]">`;
        }
        matrix2Inputs.innerHTML += "<br>";
    }

    document.getElementById('matrixInputs').style.display = 'block';
}

function sumarMatrices() {
    const rowsMatrix1 = parseInt(document.getElementById('rowsMatrix1').value);
    const colsMatrix1 = parseInt(document.getElementById('colsMatrix1').value);
    const rowsMatrix2 = parseInt(document.getElementById('rowsMatrix2').value);
    const colsMatrix2 = parseInt(document.getElementById('colsMatrix2').value);
    const resultMatrix = document.getElementById('resultMatrix');
    const result = [];

    if (rowsMatrix1 !== rowsMatrix2 || colsMatrix1 !== colsMatrix2) {
        resultMatrix.innerHTML = "Las matrices deben tener las mismas dimensiones para poder sumarlas.";
        return;
    }

    for (let i = 0; i < rowsMatrix1; i++) {
        result.push([]);
        for (let j = 0; j < colsMatrix1; j++) {
            const m1 = parseInt(document.getElementById(`m1_${i}_${j}`).value);
            const m2 = parseInt(document.getElementById(`m2_${i}_${j}`).value);
            result[i][j] = m1 + m2;
        }
    }

    resultMatrix.innerHTML = result.map(row => `[${row.join(', ')}]`).join('<br>');
    document.getElementById('result').style.display = 'block';
}

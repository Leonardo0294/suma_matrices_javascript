function createMatrices() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const matrix1Inputs = document.getElementById('matrix1Inputs');
    const matrix2Inputs = document.getElementById('matrix2Inputs');

    matrix1Inputs.innerHTML = '';
    matrix2Inputs.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix1Inputs.innerHTML += `<input type="number" id="m1_${i}_${j}" placeholder="Matriz 1[${i}][${j}]">`;
            matrix2Inputs.innerHTML += `<input type="number" id="m2_${i}_${j}" placeholder="Matriz 2[${i}][${j}]">`;
        }
        matrix1Inputs.innerHTML += "<br>";
        matrix2Inputs.innerHTML += "<br>";
    }

    document.getElementById('matrixInputs').style.display = 'block';
}

function sumarMatrices() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const resultMatrix = document.getElementById('resultMatrix');
    const result = [];

    for (let i = 0; i < rows; i++) {
        result.push([]);
        for (let j = 0; j < cols; j++) {
            const m1 = parseInt(document.getElementById(`m1_${i}_${j}`).value);
            const m2 = parseInt(document.getElementById(`m2_${i}_${j}`).value);
            result[i][j] = m1 + m2;
        }
    }

    resultMatrix.innerHTML = result.map(row => `[${row.join(', ')}]`).join('<br>');
    document.getElementById('result').style.display = 'block';
}

const btnTriangle = document.getElementById('btn-triangle');
const btnRectangle = document.getElementById('btn-rectangle');
const btnParallelogram  = document.getElementById('btn-parallelogram');
const btnRhombus = document.getElementById('btn-rhombus');
const btnPentagon = document.getElementById('btn-pentagon');
const btnEllipse = document.getElementById('btn-ellipse');
let serial = 0;

const getData = function(e, threeValue){
    const name = e.target.parentNode.parentNode.children[0].innerText;
    const firstValue = e.target.parentNode.parentNode.children[2].children[0].children[0].value;
    const secondValue = e.target.parentNode.parentNode.children[2].children[1].children[0].value;
    if(firstValue == '' || isNaN(firstValue) || firstValue < 0 || secondValue == '' || isNaN(secondValue) || secondValue < 0){
        alert('Please Give Correct Input !!!  Ex : (positive number)')
    }else{
        serial += 1;
        let result;
        if(threeValue){
            result = 0.5 * parseFloat(firstValue) * parseFloat(secondValue);
        }else if(!threeValue){
            result = parseFloat(firstValue) * parseFloat(secondValue);
        }else{
            result = 3.14 * parseFloat(firstValue) * parseFloat(secondValue);
        }
        showResult(serial, name, result);
    }
}

const showResult = function(serial, name, result){
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${result}cm<sup>2</sup></td>
        <td><button class="btn btn-sm btn-info">Convert to m<sup>2</sup></button></td>
    `;
    tbody.appendChild(tr);
}
const btnTriangle = document.getElementById('btn-triangle');
const btnRectangle = document.getElementById('btn-rectangle');
const btnParallelogram  = document.getElementById('btn-parallelogram');
const btnRhombus = document.getElementById('btn-rhombus');
const btnPentagon = document.getElementById('btn-pentagon');
const btnEllipse = document.getElementById('btn-ellipse');
let serial = 0;

btnTriangle.addEventListener('click', function(e){
    serial += 1;
    // console.log()
    const name = e.target.parentNode.parentNode.children[0].innerText;
    const firstValue = e.target.parentNode.parentNode.children[2].children[0].children[0].value;
    const secondValue = e.target.parentNode.parentNode.children[2].children[1].children[0].value;
    const result = 0.5 * parseFloat(firstValue) * parseFloat(secondValue);
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${result}cm<sup>2</sup></td>
        <td><button class="btn btn-sm btn-info">Convert to m<sup>2</sup></button></td>
    `;

    if(firstValue == '' || isNaN(firstValue) || firstValue < 0 || secondValue == '' || isNaN(secondValue) || secondValue < 0){
        alert('Please Give Correct Input !!!  Ex : (positive number)')
    }else{
        tbody.appendChild(tr);
    }

})
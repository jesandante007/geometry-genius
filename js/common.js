// counter for maintain serial
let serial = 0;

// get input value, validate the value & calculate result
const getData = function(e, formula){
    const name = e.target.parentNode.parentNode.children[0].innerText;
    const firstValue = e.target.parentNode.parentNode.children[2].children[0].children[0].value;
    const secondValue = e.target.parentNode.parentNode.children[2].children[1].children[0].value;
    if(firstValue == '' || isNaN(firstValue) || firstValue < 0 || secondValue == '' || isNaN(secondValue) || secondValue < 0){
        alert('Please Give Correct Input !!!  Ex : (positive number)')
    }else{
        serial += 1;
        let result;
        if(formula === 0.5){
            result = parseFloat((0.5 * parseFloat(firstValue) * parseFloat(secondValue)).toFixed(2));
        }else if(formula === 1){
            result = parseFloat((parseFloat(firstValue) * parseFloat(secondValue)).toFixed(2));
        }else if(formula === 3.14){
            result = parseFloat((3.14 * parseFloat(firstValue) * parseFloat(secondValue)).toFixed(2));
        }
        // showResult(serial, name, result);
        const data = {
            serial : serial,
            name : name,
            result : result
        }
        return data;
    }
}

// show calculated value in the Area Calculation table 
const showResult = function(serial, name, result){
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td><span>${result}</span><span>cm</span><sup>2</sup></td>
        <td><button class="btn-sm btn-info text-white font-medium rounded-lg convert">
        To m<sup>2</sup></button></td>
        <td>
          <button class="btn btn-outline btn-error btn-sm delete">&#10060</button>
        </td>
    `;
    tbody.appendChild(tr);
    tr.addEventListener('click', function(e){
        const convertBtn = e.target.classList.contains('convert')
        const deleteBtn = e.target.classList.contains('delete');
        if(convertBtn){
            convert(e);
        }
        if(deleteBtn){
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
        }
    })
}

// convert cm(square) to m(square)
const convert = function(e){
    const resultElement = e.target.parentNode.parentNode.children[2].children[0];
    const resultString = resultElement.innerText;
    const newResult = parseFloat(resultString) / 10000;
    resultElement.innerText = newResult;
    const cm = e.target.parentNode.parentNode.children[2].children[1];
    cm.innerText = 'm';
    e.target.setAttribute('disabled', true)
}

// delete current row
const deleteData = function(e){

}

// random color generator 
 const randomColor = function(){
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    const a = Math.random();
    const rgba = `rgb(${r}, ${g}, ${b}, ${a})`;
    return rgba;
}
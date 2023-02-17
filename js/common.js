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
        <td>${result}cm<sup>2</sup></td>
        <td><button class="btn btn-sm btn-info">Convert to m<sup>2</sup></button></td>
    `;
    tbody.appendChild(tr);
}
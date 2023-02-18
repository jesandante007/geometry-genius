// get all event handler button
const btnTriangle = document.getElementById('btn-triangle');
const btnRectangle = document.getElementById('btn-rectangle');
const btnParallelogram  = document.getElementById('btn-parallelogram');
const btnRhombus = document.getElementById('btn-rhombus');
const btnPentagon = document.getElementById('btn-pentagon');
const btnEllipse = document.getElementById('btn-ellipse');
const btnBlog = document.getElementById('blog');

// triangle event handler
btnTriangle.addEventListener('click', function(e){
    const formula = 0.5;
    const data = getData(e, formula);
    showResult(data.serial, data.name, data.result);
})

// rectangle event handler
btnRectangle.addEventListener('click', function(e){
    const formula = 1;
    const data = getData(e, formula);
    showResult(data.serial, data.name, data.result);
})
  
// parallelogram event handler
btnParallelogram.addEventListener('click', function(e){
    const formula = 1;
    const data = getData(e, formula);
    showResult(data.serial, data.name, data.result);
})
//  rhombus event handler
btnRhombus.addEventListener('click', function(e){
    const formula = 0.5;
    const data = getData(e, formula);
    showResult(data.serial, data.name, data.result);
})

//  pentagon event handler
btnPentagon.addEventListener('click', function(e){
    const formula = 0.5;
    const data = getData(e, formula);
    showResult(data.serial, data.name, data.result);
})

//  ellipse event handler
btnEllipse.addEventListener('click', function(e){
    const formula = 3.14;
    const data = getData(e, formula);
    showResult(data.serial, data.name, data.result);
})

// blog event handler
btnBlog.addEventListener('click', function(){
    location.href = 'question.html';
})

// apply random color to cards body
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.addEventListener('mouseover', function(){
        const rgba = randomColor();
        card.style.backgroundColor = rgba;
    })
}
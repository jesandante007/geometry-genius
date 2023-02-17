// triangle event handler
btnTriangle.addEventListener('click', function(e){
    getData(e, true);
})

// rectangle event handler
btnRectangle.addEventListener('click', function(e){
    getData(e, false);
})
  
// parallelogram event handler
btnParallelogram.addEventListener('click', function(e){
    getData(e, false);
})
//  rhombus event handler
btnRhombus.addEventListener('click', function(e){
    getData(e, true);
})

//  pentagon event handler
btnPentagon.addEventListener('click', function(e){
    getData(e, true);
})
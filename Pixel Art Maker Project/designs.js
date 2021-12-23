// start by defining you form and table Elements or tags
const form = document.getElementById('sizePicker')
const table = document.getElementById('pixelCanvas')

// you create a table using your height and width inputs
function makeGrid(evt){
    
    // you prevent the default behaviour of a function on the DOM
    evt.preventDefault()

    // you empty the table Element of its children if any
    table.innerHTML = ""; //change this

    // you get value of ur height and width using the .value property
    const height = document.getElementById('inputHeight').value
    const width = document.getElementById('inputWidth').value

    // create a nested loop first for row and second for height
    for(let i = 1; i <= height; i++){
        //table row is created
        const rowE = document.createElement('tr');
    
        for(let j = 1; j <= width; j++){
            //table data is created
            const colE = document.createElement('td')
            //td is appended to tr using .appendchild
            rowE.appendChild(colE)
        }

        //tr is appended to table using .appendChild
        table.appendChild(rowE)
    }
}

//an eventListener is created on the form which listens to submit and calls makeGrid function
form.addEventListener('submit', makeGrid)

//an eventListener is created on the table which listens to clicks on the td of table. and calls change color function
table.addEventListener('click', changeColor)


// function changeColor is created.
function changeColor(evt){
    evt.preventDefault()

    let color = document.getElementById('colorPicker').value
    evt.target.style.backgroundColor = color

}


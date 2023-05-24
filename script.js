const button = document.getElementById('buttonPlay')

button.append('play')

function createDivElement(tagname,classname,content) {

    let divElement = document.createElement(tagname)

    divElement.append(content)

    divElement.classList.add(classname)

    return divElement
}

button.addEventListener('click', function(){

    const gridContainer = document.getElementById('gridContainer')
    
    gridContainer.innerHTML = ""

    for (let i = 1; i < 101; i++ ) {

        gridContainer.classList.add('gridBorder')
        
        let gridItem = createDivElement('div', 'gridItem', i)
    
        gridItem.addEventListener('click' , function (){
    
            gridItem.classList.toggle('aqua')

            console.log(i)
        })
        
        gridContainer.appendChild(gridItem)
    
    }
})







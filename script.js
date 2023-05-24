const button = document.getElementById('buttonPlay')

button.append('play')


function randomNumber(max, min){

    let randomNumber = Math.floor(Math.random()*(max - min + 1) + min)

    return randomNumber
}


function randomNumbersArray (max, min, elements){

    let array = []

    while(array.length < elements) {
        
        let random = randomNumber(max,min)
        
        if(!array.includes(random)){
            
            array.push(random)
        }
        
    }

    return array
}

function createDivElement(tagname,classname,content) {

    let divElement = document.createElement(tagname)

    divElement.append(content)

    divElement.classList.add(classname)

    return divElement
}

button.addEventListener('click', function(){

    const gridContainer = document.getElementById('gridContainer')
    
    gridContainer.classList.add('gridBorder')
    
    const bombList = randomNumbersArray(100, 1, 16)
    
    gridContainer.innerHTML = ""

    for (let i = 1; i < 101; i++ ) {

        
        
        let gridItem = createDivElement('div', 'gridItem', i)

        if(!bombList.includes(i)){

            gridItem.addEventListener('click' , function (){
    
                gridItem.classList.toggle('aqua')
    
                console.log(i)
            }) 
        }else{

            gridItem.addEventListener('click', function(){

                gridItem.classList.toggle('red')
            })
        }
        
        
        gridContainer.appendChild(gridItem)
    
    }
})







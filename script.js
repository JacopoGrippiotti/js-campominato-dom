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

let gameOver = false

button.addEventListener('click', function(){

    const gridContainer = document.getElementById('gridContainer')
    
    gridContainer.classList.add('gridBorder')
    
    const bombList = randomNumbersArray(100, 1, 16)
    
    gridContainer.innerHTML = ""

    let attempts = 0
    
    
    for (let i = 1; i < 101; i++ ) {

        
        let gridItem = createDivElement('div', 'gridItem', i)

        
        if(!bombList.includes(i)){
            
            gridItem.addEventListener('click' , function (){

                attempts += 1
                gridItem.classList.toggle('aqua')

                console.log('per ora sei salvo vedi di non cliccare una bomba', i)
                console.log('attempts',attempts)
            }) 
        
        }else{
            gridItem.addEventListener('click', function(){

                gridItem.classList.toggle('red')

                gameOver = true
                
                if (gameOver === true){

                    const gridElements = document.querySelectorAll('div.gridItem')

                    for(let i = 0; i < gridElements.length; i++){

                        gridElements[i].classList.add('hidden')
                    }
        }
                console.log('eh niente sei finito su una bomba e adesso? be adesso sei morto non ci sono altre cose da dire ciao ciao game over', i)
                console.log('attempts',attempts)
            })
        }
        
        
        
        gridContainer.appendChild(gridItem)
        
        
    }
})










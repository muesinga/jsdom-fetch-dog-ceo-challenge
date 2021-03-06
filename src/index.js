// DOM Elements
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const imgContainer = document.querySelector('#dog-image-container')
const liContainer = document.querySelector('#dog-breeds')
const li = document.querySelector('#li')
const dropdown = document.querySelector('#breed-dropdown')

// Fetch Code

const getDogs = () => {
    fetch(imgUrl)
        .then(r => r.json())
        .then(dogImg => renderAllDogs(dogImg))
}

const getBreeds = () => {
    fetch(breedUrl)
        .then(r => r.json())
        .then(breeds => renderAllBreeds(breeds))
}

// Rendering Logic

const renderAllDogs = dogImg => {
    dogImg.message.forEach(dog => {
        renderDog(dog)
    })
}

const renderDog = (dog) => {
    const img = document.createElement('img')
    img.src = dog
    imgContainer.append(img)
}


const renderAllBreeds = breeds => {
    Object.keys(breeds.message).forEach(breed => {
        renderOneBreed(breed)
    })
}

const renderOneBreed = (breed) => {
    const li = document.createElement('li')
    li.innerText = breed
    liContainer.append(li)
}

// Event Handlers

const clickHandler = () => {
    liContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.style.color = 'red'
        }
    })
}

const dropdownHandler = () => {
    dropdown.addEventListener('change', (e) => {
        const breedLetter = dropdown.value
        const breedLis = liContainer.querySelectorAll('li')
        breedLis.forEach(li => {
            if (li.textContent[0] === breedLetter) {
                li.style.display = ''
            } else {
                li.style.display = 'none'
            }
        })
    })
}

// Initialize

getDogs()
getBreeds()
clickHandler()
dropdownHandler()
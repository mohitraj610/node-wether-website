
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messsageOne = document.querySelector('#message-1')
const messsageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    messsageOne.textContent = 'Loading...'
    const location = search.value
    const url =`http://localhost:3000/weather?address=${location}`
    fetch(url).then((response) => {
    response.json().then((data)=> {
        if(data.error)
        {
            messsageOne.textContent = data.error
        }
        else
        {
            messsageOne.textContent = data.location
            messsageTwo.textContent = data.forecast
        }
        
    })
})
})
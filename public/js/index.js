// console.log('index.js as been loaded')

const form = document.querySelector('form')
const btn = document.querySelector('button')

const search = document.getElementById('search')

const msg_1 = document.querySelector('#msg-1')
const msg_2 = document.querySelector("#msg-2")

// if u are wondering why i didnt use es6 arrow functions () =>{}
// it's because some devices dont support it 
form.addEventListener('submit', function(e) {
    e.preventDefault()

    msg_1.textContent = 'Loading...'
    msg_2.textContent = ''
    
    if(search.value === ""){
        msg_1.className = ""
       msg_1.textContent = "Search a Location"
    } else {
        //to set a loading animation with classname and CSS
        msg_1.className = "msg-one"

        msg_1.textContent = 'Loading...'
        

        fetch(`/weather?address=${search.value}`).then(function(response){
        response.json().then(function(data){
            msg_1.className = ""
            if (data.error) {
                msg_1.className = "err"
                msg_1.textContent = data.error
        
            } else {
                msg_1.textContent = data.location
                msg_2.textContent = data.forecast
            }
            })
        })
    
    }
    
})

let clients=[]

fetch('./config/clients.json')

.then(response=>response.json())

.then(data=>{

clients=data.clients

let dropdown=

document.getElementById(
'client'
)

clients.forEach(client=>{

let option=

document.createElement(
'option'
)

option.value=
client.id

option.text=
client.name

dropdown.add(option)

})

})


function login(){

let selected=

document.getElementById(
'client'
).value

let password=

document.getElementById(
'password'
).value

let client=

clients.find(
x=>x.id===selected
)

if(
client &&
client.password===password
){

localStorage.setItem(
'client',
JSON.stringify(client)
)

window.location=
'./dashboard.html'

}

else{

document.getElementById(
'msg'
).innerHTML=
'Wrong Password'

}

}

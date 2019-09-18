const BASE_URL = "https://minidnd-backend.herokuapp.com"
document.addEventListener('DOMContentLoaded',main)
function main(){
    
    //Character Creation Stuff
    loggedIn()
    loadSideBar()
    // randRace()
}

//Login

function loggedIn() { //checks if user is logged in or not and if they have a character and renders the appropriate page
    if (localStorage.getItem('user_id') != 'null'){ //if user is logged in, grab character info

        fetch(BASE_URL+'/get_user_data',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'user_id': localStorage.getItem('user_id')
            })
        })
        .then(response => response.json())
        .then(json =>{
            if(!!json.race){// if they have a character, render it
                displayStats(json)
            } else { // if they don't have a character, send them to the character creator
                loadCharCreator()
            }
        })
    }
    else{ //if user is not logged in, send them to log in form
        loadLogIn()
    }
}

function makeUN(event){ //logs you in or creates a username and logs you in
    let userName = document.getElementById("loginName").value
    event.target.style.display = 'none'
    fetch(BASE_URL+'/login',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            'userName' : userName
        })
    })
    .then(response => response.json())
    .then(json => {
            localStorage.setItem('user_id',json.user_id)
            loadSideBar()
            loggedIn()
    })
}

//For capitalizing the first letter of something
function capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1)
}

function randomName() {
    // scrape random name generator??????????   

}
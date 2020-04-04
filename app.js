// init github
const github = new Github;

// init ui
const ui= new UI;

// Search Input
const searchUser=document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup',(e)=>{
    // Get Input Text
    const userText=e.target.value;

    if(userText!==''){
    //   make http call
    github.getUser(userText)
    .then(data=>{
        if(data.profile.message==='Not Found'){
            // show alert message
            ui.showAlert('User Not Found', 'alert alert-danger')

        }else{
            // Show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
    })
    }else{
        // Clear profile
        ui.clearProfile();
    }
})
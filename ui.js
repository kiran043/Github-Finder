class UI{
    constructor() {
       this.profile= document.getElementById('profile')
    }

    // Display profile in UI
    showProfile(user){
        this.profile.innerHTML=`
        <div class='card card-body mb-3'>
        <div class='row'>
        <div class='col-md-3'>
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>
        <div class='col-md-9'>
        <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
        <span class="badge badge-primary">Public Gists:${user.public_gists}</span>
        <span class="badge badge-primary">Followers:${user.followers}</span>
        <span class="badge badge-primary">Followings:${user.following}</span>
        <br><br>
        <ul class="list-group">
        <li class="list-group-item">Company:${user.company}</li>
        <li class="list-group-item">Website/blog:${user.blog}</li>
        <li class="list-group-item">Location:${user.location}</li>
        <li class="list-group-item">Member Since:${user.created_at}</li>
        <li class="list-group-item">Company:${user.company}</li>
        </ul>
        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>`
    }

    // show repos
    showRepos(repos){
        let output='';
        repos.forEach(function(repo){
            output +=
           ` <div class="card card-body mb-2">
            <div class="row">
            <div class='col-md-6'>
            <a href='${repo.html_uri}' target='_blank'>${repo.name}</a>
            </div>
            <div class='col-md-6'>
            <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
        <span class="badge badge-primary">Watchers:${repo.watcher_count}</span>
        <span class="badge badge-primary">Forks:${repo.forms_count}</span>

            </div>

            </div>

            </div>`
        })

        // Output repo
        document.getElementById('repos').innerHTML=output;
    }

    // show alert message
    showAlert(message,className){
        // clear any remaining alert
        this.clearAlert()
        // create div
        const div=document.createElement('div');
        // add classes
        div.className=className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container=document.querySelector('.searchContainer');
        // Get Search Box
        const search=document.querySelector('.search');
        // insert the alert
        container.insertBefore(div,search);

        // Timer
        setTimeout(()=>{
            this.clearAlert();
        },2000)


    }

    // clear Alert message
    clearAlert(){
        const currentAlert=document.querySelector('.alert');
        if(currentAlert){
         currentAlert.remove();
        }
    }

//    clear Profile
    clearProfile(){
        this.profile.innerHTML='';
    }
}
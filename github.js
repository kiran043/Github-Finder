class Github{
    constructor(){
        this.client_id='119972a2389464f42974';
        this.client_secret='fe8332719acabce470f10ff434876d3b9dad2c38';
        this.repos_count=10;
        this.repos_sort='create:asc'
    }

    async getUser(user){
        const profileResponse=await
         fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
         const repoResponse=await
         fetch(`https://api.github.com/users/${user}/repos?per page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
        const profile= await profileResponse.json();

        const repos= await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}
// Dark mode ---------------------------------------------------------------------------------------------------------

const dark = document.querySelector('.dark')

dark.addEventListener('click', function () {
let body = document.getElementById("body");
let currentClass = body.className;
body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
})

const logo = document.querySelector(".logoswitch")
logo.addEventListener("click", function(){
logo.classList.remove("fa-moon")
logo.classList.add("fa-sun")
})

// const light = document.querySelector('.sombre h2')
// light.addEventListener("click", function(){
// light.classList.remove("DARK")
// light.classList.add("LIGHT")
// })



// Api GitHub ----------------------------------------------------------------------------------------------------------

let formul = document.getElementById("myForm")

formul.addEventListener('submit', function (e){
    e.preventDefault()

    let search = document.getElementById("search").value 

// Supprimer les espaces entre un prénom et un nom. ---

    let originalName = search.split(' ').join('')

    // alert(originalName)
    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        // data = {
        //     "login": "octocat",
        //     "id": 583231,
        //     "node_id": "MDQ6VXNlcjU4MzIzMQ==",
        //     "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
        //     "gravatar_id": "",
        //     "url": "https://api.github.com/users/octocat",
        //     "html_url": "https://github.com/octocat",
        //     "followers_url": "https://api.github.com/users/octocat/followers",
        //     "following_url": "https://api.github.com/users/octocat/following{/other_user}",
        //     "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
        //     "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        //     "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
        //     "organizations_url": "https://api.github.com/users/octocat/orgs",
        //     "repos_url": "https://api.github.com/users/octocat/repos",
        //     "events_url": "https://api.github.com/users/octocat/events{/privacy}",
        //     "received_events_url": "https://api.github.com/users/octocat/received_events",
        //     "type": "User",
        //     "site_admin": false,
        //     "name": "The Octocat",
        //     "company": "@github",
        //     "blog": "https://github.blog",
        //     "location": "San Francisco",
        //     "email": null,
        //     "hireable": null,
        //     "bio": null,
        //     "twitter_username": null,
        //     "public_repos": 8,
        //     "public_gists": 8,
        //     "followers": 4721,
        //     "following": 9,
        //     "created_at": "2011-01-25T18:44:36Z",
        //     "updated_at": "2022-01-24T15:08:43Z"
        //   }

        console.log(data)

        document.getElementById("photo").innerHTML = `
            <a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
            `

        document.getElementById("name").innerHTML = `
        ${data.name}
        `

        document.getElementsByClassName("at")[0].innerHTML = `
        @${data.login}
        `

        document.getElementById("date").innerHTML = `
        ${data.created_at}
        `

        document.getElementById("bio").innerHTML = `
        ${data.bio}
        `

        document.getElementById("repository").innerHTML = `
        ${data.public_repos}
        `

        document.getElementById("follow").innerHTML = `
        ${data.followers} 
        `

        document.getElementById("following").innerHTML = `
        ${data.following}   
        `

        document.getElementById("local").innerHTML = `
        ${data.location}   
        `

        document.getElementById("tweet").innerHTML = `
        ${data.twitter_username}   
        `

        document.getElementById("git").innerHTML = `
        ${data.blog}  
        `

        document.getElementById("atgit").innerHTML = `
        ${data.company}
        `

    })
})





























// function toggleDarkLight() {
//     var body = document.getElementById("body");
//     var currentClass = body.className;
//     body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
//   }

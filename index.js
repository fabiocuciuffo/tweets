const tweets = [
    {
        id: 1,
        content: "Lorem ipsum",
        author: "Ada",
        likes: 10,
    },
    {
        id: 2,
        content: "Dolor sit amet",
        author: "Steve",
        likes: 8,
    },
    {
        id: 3,
        content: "Consectetur adipiscing elit",
        author: "Grace",
        likes: 12,
    },
    {
        id: 4,
        content:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        author: "Alan",
        likes: 2,
    },
    {
        id: 5,
        content: "Ut enim ad minim veniam",
        author: "Ada",
        likes: 20,
    },
]

//objectif n°2 : afficher tous les tweets

//récupération du UL présent dans le DOM de la page grâce à son ID "tweets-list"
const tweetsContainer = document.getElementById("tweets-list")

//même processus que précédemment sauf que cette fois ci ce n'est plus l'index 0 du tableau tweets que l'on vient récupérer pour assigner le contenu des éléments P mais dynamique l'élément de l'itération de la boucle forEach qui représente un objet
tweets.forEach((element) => {
    let tweetLi = document.createElement("li")
    tweetLi.classList.add("tweet")

    let content = document.createElement("p")
    content.classList.add("content")
    content.innerText = element.content

    let likes = document.createElement("p")
    likes.classList.add("likes")
    likes.innerText = element.likes

    let author = document.createElement("p")
    author.classList.add("author")
    author.innerText = element.author

    tweetLi.appendChild(content)
    tweetLi.appendChild(likes)
    tweetLi.appendChild(author)

    tweetsContainer.appendChild(tweetLi)
})

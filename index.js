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

const tweetsContainer = document.getElementById("tweets-list")

//objectif n°1 : afficher le premier tweet

//création de l'élément LI
let tweetLi = document.createElement("li")
//ajout de la classe "tweet" au LI
tweetLi.classList.add("tweet")
//création d'un élément P pour le content
let content = document.createElement("p")
//ajout de la classe "content" à P
content.classList.add("content")
//assignassion
content.innerText = tweets[0].content
let likes = document.createElement("p")
likes.classList.add("likes")
likes.innerText = tweets[0].likes
let author = document.createElement("p")
author.classList.add("author")
author.innerText = tweets[0].author

tweetLi.appendChild(content)
tweetLi.appendChild(likes)
tweetLi.appendChild(author)
tweetsContainer.appendChild(tweetLi)

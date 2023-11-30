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

//objectif n°2 : ajouter la classe favorite aux tweets avec + de 10 likes

const tweetsContainer = document.getElementById("tweets-list")

tweets.forEach((element) => {
    let tweetLi = document.createElement("li")
    tweetLi.classList.add("tweet")

    let content = document.createElement("p")
    content.classList.add("content")
    content.innerText = element.content

    let likes = document.createElement("p")
    likes.classList.add("likes")
    //si les likes de l'élément courant de l'itération sur la boucle du tableau sont supérieurs à 10 alors ajouter la classe favorite à l'élément likes
    if (element.likes > 10) {
        likes.classList.add("favorite")
    }
    likes.innerText = element.likes

    let author = document.createElement("p")
    author.classList.add("author")
    author.innerText = element.author

    tweetLi.appendChild(content)
    tweetLi.appendChild(likes)
    tweetLi.appendChild(author)

    tweetsContainer.appendChild(tweetLi)
})

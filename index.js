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

//objectif n°4 : refacto

class Tweet {
    constructor(content = "", likes = 0, author = "") {
        this.content = content
        this.likes = likes
        this.author = author
    }

    createTweet(parent) {
        let tweetLi = document.createElement("li")
        tweetLi.classList.add("tweet")

        let content = document.createElement("p")
        content.classList.add("content")
        content.innerText = this.content

        let likes = document.createElement("p")
        likes.classList.add("likes")
        if (this.likes > 10) {
            likes.classList.add("favorite")
        }
        likes.innerText = this.likes

        let author = document.createElement("p")
        author.classList.add("author")
        author.innerText = this.author

        tweetLi.appendChild(content)
        tweetLi.appendChild(likes)
        tweetLi.appendChild(author)

        parent.appendChild(tweetLi)
    }
}

const tweetsContainer = document.getElementById("tweets-list")

tweets.forEach((element) => {
    let tweet = new Tweet(element.content, element.likes, element.author)
    tweet.createTweet(tweetsContainer)
})

const head = document.getElementById("head")
let authorDetails = {}

function acquireWallpaper(){
    
    fetch("https://api.unsplash.com/photos/random?client_id=5r2vhIueAxpzUyn1CzUd-mtlH3kwz9oWUJ60xJn_-Wk&orientation=landscape&query=landscape")
        .then(res => res.json())
        .then(data => {
            document.body.style.backgroundImage = `url(${data.urls.full})`
            head.children[0].content = data.color
            document.getElementById("atr-name").innerHTML = `${data.user.name} <span class="accent-text">Click here for wallpaper details!</span>`
            authorDetails = data    
        })

    document.getElementById("author-details-el").style.display = "flex"
}


export {authorDetails, acquireWallpaper}
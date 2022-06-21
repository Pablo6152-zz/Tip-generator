
function acquireWallpaper(){
    appContainer.classList.add("test")
    fetch("https://api.unsplash.com/photos/random?client_id=5r2vhIueAxpzUyn1CzUd-mtlH3kwz9oWUJ60xJn_-Wk&orientation=landscape&query=nature")
        .then(res => res.json())
        .then(data => document.body.style.backgroundImage = `url(${data.urls.full})`)
}

export default acquireWallpaper
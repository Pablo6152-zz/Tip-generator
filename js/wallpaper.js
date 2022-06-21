
function acquireWallpaper(){
    
    fetch("https://api.unsplash.com/photos/random?client_id=5r2vhIueAxpzUyn1CzUd-mtlH3kwz9oWUJ60xJn_-Wk&orientation=landscape&query=nature")
        .then(res => res.json())
        .then(data => {
            document.body.style.backgroundImage = `url(${data.urls.full})`
            const e = document.getElementById("head")
            e.children[9].remove()
            e.innerHTML += `<meta name="theme-color" content="${data.color}" />`
        })

}


export default acquireWallpaper
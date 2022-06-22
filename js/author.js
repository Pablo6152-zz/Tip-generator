import {authorDetails, acquireWallpaper} from './wallpaper.js'
import {authorSect} from './index.js'

function serveAuthorInfo(){
    authorSect.innerHTML = `

                <div class="author-details">
                    <img src="${authorDetails.user.profile_image.large}" alt="${authorDetails.user.bio} class="author-img">
                    <h2 class="author-name">${authorDetails.user.name}</h2>
                    
                    <div class="author-socials">
                        <div class="social-1">
                            <img src="./img/instagram.png" alt="" class="social-img"> 
                        </div>
    
                        <div class="social-2">
                            <img src="./img/twitter.png" alt="" class="social-img">
                        </div>
                    </div>
                </div>
    
                <div class="img-description">
                    ${authorDetails.description ? `
                    <p class="description-title">${authorDetails.user.first_name} described this as:</p>
                    <p class="description-item">"${authorDetails.description}"</p>` 
                    : "No description provided :("}
                </div>
    
                <div class="img-data">
                ${authorDetails.location.city ? `<a href="https://www.google.com/maps/@${authorDetails.location.position.latitude},${authorDetails.location.position.longitude}z">${authorDetails.location.city}</a>` : ""}
                <a href="${authorDetails.links.download}" class="download-link">Download here</a>
                </div>
                
    `
}

export {serveAuthorInfo}
import {data} from './data.js'
let dataHTML=``
data.forEach((item) => {
    dataHTML+=`
    <div class="video preview">
            <div class="image">
                <a class='youtube-link' href=${item.youtubeLink}>
                    <img src=${item.thumbnail}>
                </a>
                <p class="time">${item.videoTime}</p>
            </div>
            <div class="info">
                <div class="channel-photo">
                    <a class="channel-link" href=${item.channelLink}>
                        <img src=${item.channelPhoto}>
                        <div class="channel-photo-preview">
                            <img src=${item.channelPhoto}>
                            <div>
                                <p class="channel-photo-preview-title">${item.channelTitle}</p>
                                <p class="channel-photo-preview-views">${item.subscribers}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="description">
                    <a class="video-title" href="${item.youtubeLink}">${item.videoTitle}</a>
                    <a class="channel-name" href=${item.channelLink}>${item.channelTitle}</a>
                    <p class="views">${item.videoViews}</p>
                </div>
            </div>
        </div>`
})
document.querySelector('.main-grid').innerHTML=dataHTML

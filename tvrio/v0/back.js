function checkupdate() {
    needupdate = 0;
    return needupdate;
}
function geturl() {
    url = ""
    return url
}
function getchannels() {
    let channeldb = [
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/newsnation.svg"],
        ["https://v2.weatherscan.net", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/weather.svg"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/toonami.png"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/adultswim.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/tnt.svg"],
        ["https://v1.thetvapp.to/hls/FXEast/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/fx.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        
    ];
    return channeldb;
}
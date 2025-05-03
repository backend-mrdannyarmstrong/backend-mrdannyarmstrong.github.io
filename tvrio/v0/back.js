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
        ["https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/tvcultura.png"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/recordtv.png"],
        ["https://www.youtube.com/embed/mBvpA1gOUos", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/sbt.png"],
        ["https://video09.logicahost.com.br/redebrasiloficial/redebrasiloficial/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvrio/v0/banners/redebrasil.png"]
        
    ];
    return channeldb;
}
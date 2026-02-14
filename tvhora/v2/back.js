function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch1.png"],
        ["index2.html#https://fl31.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch2.png"],
        ["https://www.wwlp.com/watch-live/", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch3.png"],
        ["http://v2.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch4.png"],
        ["index2.html#https://fl31.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch5.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch6.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch7.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch8.png"],
        ["index2.html#https://fl31.moveonjoy.com/AMC_NETWORK/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch9.png"],
        ["index2.html#https://fl31.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch10.png"],
        ["index2.html#https://amg00793-amg00793c6-firetv-us-4067.playouts.now.amagi.tv/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch11.png"],
        ["https://backend-mrdannyarmstrong.github.io/tvhora/v2/yt/ch11.html", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch12.png"],
        ["https://sweet.tv/sk/tv/847-jednotka-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch13.png"],
        ["https://sweet.tv/sk/tv/848-dvojka-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch14.png"],
        ["https://sweet.tv/sk/tv/849-24-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch15.png"],
        ["https://sweet.tv/sk/tv/850-sport-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch16.png"],
        ["https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch17.png"],
        ["https://media.joj.sk/embed/DKZwKhUlV3i?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch18.png"],
        ["https://media.joj.sk/embed/3al7RoqzT3y?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch19.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/joj_sport-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch20.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/joj_news-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch21.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/family-720.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch22.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cinema-720.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch23.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/jojko-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch24.png"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch25.png"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch26.png"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch27.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_history-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch28.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_film-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch29.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_mystery-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch30.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function checkupdate() {
    needupdate = 0;
    return needupdate;
}

function geturl() {
    url = "";
    return url
}
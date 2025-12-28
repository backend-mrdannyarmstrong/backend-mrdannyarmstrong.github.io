function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["index.html", "NULL"],
        ["https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch2.png"],
        ["index2.html#https://fl1.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch3.png"],
        ["http://v2.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch4.png"],
        ["index2.html#https://fl1.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch5.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch6.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch7.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch8.png"],
        ["index2.html#https://fl1.moveonjoy.com/AMC_NETWORK/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch9.png"],
        ["index2.html#https://fl1.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch10.png"],
        ["https://www.youtube.com/embed/0T31WVsL9Ro", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch11.png"],
        ["https://sweet.tv/sk/tv/847-jednotka-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch12.png"],
        ["https://sweet.tv/sk/tv/848-dvojka-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch13.png"],
        ["https://sweet.tv/sk/tv/849-24-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch14.png"],
        ["https://sweet.tv/sk/tv/850-sport-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch15.png"],
        ["https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch16.png"],
        ["https://media.joj.sk/embed/DKZwKhUlV3i?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch17.png"],
        ["https://media.joj.sk/embed/3al7RoqzT3y?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch18.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/family-720.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch19.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cinema-720.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch20.png"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch21.png"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch22.png"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch23.png"],
        ["index2.html#https://us1001.utako.moe/NHK_G/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch24.png"],
        ["index2.html#https://us1001.utako.moe/NHK_E/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch25.png"],
        ["index2.html#https://us1001.utako.moe/Nippon_TV/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch26.png"],
        ["index2.html#https://us1001.utako.moe/TV_Asahi/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch27.png"],
        ["index2.html#https://us1001.utako.moe/TBS/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch28.png"],
        ["index2.html#https://us1001.utako.moe/TV_Tokyo/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch29.png"],
        ["index2.html#https://us1001.utako.moe/Fuji_TV/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch30.png"],
        ["index2.html#https://us1001.utako.moe/Tokyo_MX1/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v1/ch31.png"],
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
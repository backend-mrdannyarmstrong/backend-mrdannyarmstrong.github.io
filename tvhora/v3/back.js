function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["https://sweet.tv/sk/tv/847-jednotka-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch1.png"],
        ["https://sweet.tv/sk/tv/848-dvojka-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch2.png"],
        ["https://sweet.tv/sk/tv/849-24-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch3.png"],
        ["https://sweet.tv/sk/tv/850-sport-hd", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch4.png"],
        ["https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch5.png"],
        ["https://media.joj.sk/embed/DKZwKhUlV3i?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch6.png"],
        ["https://media.joj.sk/embed/3al7RoqzT3y?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch7.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/joj_sport-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch8.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/joj_news-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch9.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/family-720.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch10.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cinema-720.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch11.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/jojko-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch12.png"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch13.png"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch14.png"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch15.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_history-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch16.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_film-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch17.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_mystery-1080.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch18.png"],
        ["index2.html#https://nl.utako.moe/NHK_G/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch19.png"],
        ["index2.html#https://nl.utako.moe/NHK_E/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch20.png"],
        ["index2.html#https://nl.utako.moe/Nippon_TV/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch21.png"],
        ["index2.html#https://nl.utako.moe/TV_Asahi/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch22.png"],
        ["index2.html#https://nl.utako.moe/TBS/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch23.png"],
        ["index2.html#https://nl.utako.moe/TV_Tokyo/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch24.png"],
        ["index2.html#https://nl.utako.moe/Fuji_TV/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch25.png"],
        ["index2.html#https://nl.utako.moe/Tokyo_MX1/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch26.png"],
        ["index2.html#https://media-tyo.hls.nhkworld.jp/hls/w/live/master.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch27.png"],
        ["https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch28.png"],
        ["index2.html#https://content.uplynk.com/channel/1f93c13275024afb9e0ead299624073d.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch29.png"],
        ["https://www.wwlp.com/watch-live/", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch30.png"],
        ["http://v2.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch31.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch32.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch33.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v3/ch34.png"],
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
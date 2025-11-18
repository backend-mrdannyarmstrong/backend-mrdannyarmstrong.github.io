function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["index.html", "NULL"],
        ["index2.html#https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch2.png"],
        ["index3.html#https://fl1.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch3.png"],
        ["index2.html#http://v2.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch4.png"],
        ["index3.html#https://fl1.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch5.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch6.png"],
        ["index3.html#http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch7.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch8.png"],
        ["index3.html#https://fl1.moveonjoy.com/AMC_NETWORK/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch9.png"],
        ["index3.html#https://fl1.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch10.png"],
        ["index2.html#https://www.youtube.com/embed/0T31WVsL9Ro", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch11.png"],
        ["index2.html#https://www.stvr.sk/embed/live/1", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch12.png"],
        ["index2.html#https://www.stvr.sk/embed/live/2", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch13.png"],
        ["index2.html#https://www.stvr.sk/embed/live/3", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch14.png"],
        ["index2.html#https://www.stvr.sk/embed/live/15", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch15.png"],
        ["index2.html#https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch16.png"],
        ["index2.html#https://media.joj.sk/embed/DKZwKhUlV3i?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch17.png"],
        ["index2.html#https://media.joj.sk/embed/3al7RoqzT3y?autoplay=1", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch18.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/family-720.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch19.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/cinema-720.m3u8", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch20.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch21.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch22.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvhora/v2/ch23.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["Channel Name", "Channel Description"],
        ["Bob Ross", "Joy of Painting"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["E!", "The most popular movies and TV shows"],
        ["Cartoon Network", "Cartoons"],
        ["Toonami Aftermath", "Cartoons and Anime"],
        ["TNT", "Movies TV shows and sports"],
        ["AMC", "Movies and TV shows"],
        ["Fox Sports", "Sports coverage"],
        ["Zen Music", "Relaxing music"],
        ["RTVS 1", "Všeobecný obsah"],
        ["RTVS 2", "Všeobecný a vzdelávací obsah"],
        ["RTVS 24", "Správy 24 hodín denne, 7 dní v týždni"],
        ["RTVS SPORT", "Šport 24 hodín denne, 7 dní v týždni"],
        ["TV JOJ", "Televízne programy a filmy"],
        ["JOJ Plus", "Americké televízne relácie"],
        ["JOJ WAU", "Prémiový televízny kanál"],
        ["Marzika", "Rodinný obsah"],
        ["Doma", "Televízne relácie pre ženy"],
        ["Dajto", "Televízne relácie pre mužov"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}
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
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/tnt.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26a781-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6903cfae-183e-4d3b-a482-b7acf38ce356", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/anime.svg"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/toonami.svg"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/awe.svg"],
        ["http://fl2.moveonjoy.com/PARAMOUNT_NETWORK/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/paramount.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/newsnation.svg"],
        ["https://fdezwonders.github.io/intellistar-2-hd-emulator/", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/weather.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/adultswim.svg"],
        ["https://www.rtvs.sk/embed/live/1", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tv1.svg"],
        ["https://www.rtvs.sk/embed/live/2", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tv2.svg"],
        ["https://www.rtvs.sk/embed/live/3", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tv24.svg"],
        ["https://www.rtvs.sk/embed/live/15", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tvsport.svg"],
        ["https://live.joj.sk/", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/joj.svg"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/marzika.svg"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/doma.svg"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/dajto.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
    ];
    return channeldb;
}
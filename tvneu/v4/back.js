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
        ["https://master.nhkworld.jp/nhkworld-tv/playlist/live.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/nhkworld.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/newsnation.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/adultswim.svg"],
        ["https://fdezwonders.github.io/intellistar-2-hd-emulator/", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/weather.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v3/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/bobross.svg"],
        ["http://vthanh.utako.moe/NHK_G/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/nhkg.svg"],
        ["http://vthanh.utako.moe/NHK_E/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/nhke.svg"],
        ["https://ntv4.mov3.co/hls/ntv.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/ntv.svg"],
        ["http://vthanh.utako.moe/TV_Asahi/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/tvasahi.svg"],
        ["https://tbs5.mov3.co/hls/tbs.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/tbsjp.svg"],
        ["http://vthanh.utako.moe/TV_Tokyo/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/tvtokyo.svg"],
        ["https://fujitv4.mov3.co/hls/fujitv.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/fujitv.svg"],
        ["https://ok.ru/videoembed/6960395525879?nochat=1", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/tokyomx.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
    ];
    return channeldb;
}
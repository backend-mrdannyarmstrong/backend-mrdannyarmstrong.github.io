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
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/paramount.svg"],
        ["http://fl2.moveonjoy.com/BBC_AMERICA/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/bbcus.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/newsnation.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/adultswim.svg"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/toonami.svg"],
        ["https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/nhkworld.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v3/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/bobross.svg"],
        ["https://nhk4.mov3.co/hls/nhk.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/nhkg.svg"],
        ["https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/nhke.svg"],
        ["https://ntv4.mov3.co/hls/ntv.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/ntv.svg"],
        ["https://ok.ru/videoembed/8806859939457", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/tvasahi.svg"],
        ["https://tbs5.mov3.co/hls/tbs.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/tbsjp.svg"],
        ["https://ok.ru/videoembed/7858423078516", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/tvtokyo.svg"],
        ["https://fujitv4.mov3.co/hls/fujitv.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/fujitv.svg"],
        ["https://ok.ru/videoembed/6960395525879", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/tokyomx.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
    ];
    return channeldb;
}
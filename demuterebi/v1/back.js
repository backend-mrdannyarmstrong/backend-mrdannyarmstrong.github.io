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
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/tnt.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023172/tbseast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/tbs.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/paramount.svg"],
        ["https://cdn.herringnetwork.com/80A4DFF/awee_nva/AWE_Encore.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/awe.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/thehill.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/adultswim.svg"],
        ["https://cdn.nhkworld.jp/www11/nhkworld-tv/bmcc-live/pt/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/nhk.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/demuterebi/v1/banners/bobross.svg"],
        ["https://nhk4.mov3.co/hls/nhk.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/2/banners/nhkg.svg"],
        ["https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/2/banners/nhke.svg"],
        ["https://ntv4.mov3.co/hls/ntv.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/2/banners/ntv.svg"],
        ["https://ok.ru/videoembed/8663359364737", "https://mrdannyarmstrong.github.io/demuterebi/2/banners/tvasahi.svg"],
        ["https://tbs5.mov3.co/hls/tbs.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/2/banners/tbsjp.svg"],
        ["https://ok.ru/videoembed/7858423078516", "https://mrdannyarmstrong.github.io/demuterebi/2/banners/tvtokyo.svg"],
        ["https://fujitv4.mov3.co/hls/fujitv.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/2/banners/fujitv.svg"],
        ["https://ok.ru/videoembed/6960395525879", "https://mrdannyarmstrong.github.io/demuterebi/2/banners/tokyomx.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
    ];
    return channeldb;
}
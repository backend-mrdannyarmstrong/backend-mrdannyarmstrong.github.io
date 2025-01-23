function getchannels() {
    channels = [
        ["LIST", "START"],
        ["NULL", "NULL"],
        ["https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch2.gif"],
        ["https://v1.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch3.gif"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch4.gif"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch5.gif"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5fd7bca3e0a4ee0007a38e8c/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2cc208-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=9c78a281-5d61-4850-8b62-74632f015343", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch6.gif"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62ba60f059624e000781c436/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c25e430-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1b7de8e4-d114-4438-b098-6f7aee77b4be", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch7.gif"],
        ["https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch8.gif"],
        ["https://nhk4.mov3.co/hls/nhk.m3u8", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch9.gif"],
        ["https://ntv4.mov3.co/hls/ntv.m3u8", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch10.gif"],
        ["https://tbs5.mov3.co/hls/tbs.m3u8", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch11.gif"],
        ["https://fujitv4.mov3.co/hls/fujitv.m3u8", "https://backend-mrdannyarmstrong.github.io/tvchrome/ch12.gif"]
    ];
    return channels;
}
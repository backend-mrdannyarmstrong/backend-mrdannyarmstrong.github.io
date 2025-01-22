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
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/tnt.svg"],
        ["http://fl5.moveonjoy.com/AMC_NETWORK/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/tbs.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/paramount.svg"],
        ["http://fl2.moveonjoy.com/BBC_AMERICA/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/awe.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/thehill.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/adultswim.svg"],
        ["https://cdn.nhkworld.jp/www11/nhkworld-tv/bmcc-live/pt/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/nhk.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/bobross.svg"],
        ["https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/rtp1.svg"],
        ["https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/rtp2.svg"],
        ["https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/rtp3.svg"],
        ["https://sic.pt/direto", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/sic.svg"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/recordtv.svg"],
        ["https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/sbt.svg"],
        ["https://tbc.zoeweb.tv/tbc/tbc/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/tvculture.svg"],
        ["https://stmv1.srvif.com/animetv/animetv/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvfusao/v1/banners/animax.svg"]
    ];
    return channeldb;
}
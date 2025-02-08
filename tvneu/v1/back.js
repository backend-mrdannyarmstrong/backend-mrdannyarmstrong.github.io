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
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/tnt.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/paramount.svg"],
        ["http://fl2.moveonjoy.com/BBC_AMERICA/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/bbcus.svg"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/toonami.svg"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/awe.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/newsnation.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/adultswim.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/bobross.svg"],
        ["https://irylek.ct8.pl/stream/tvpworld", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/tvpworld.svg"],
        ["https://irylek.ct8.pl/stream/tvppolonia", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/tvp1.svg"],
        ["https://meta.vcdn.biz/4781110f8e6ceebe2a6717dfb501a0fc_megogo/live/hls/b/700_2490/u_sid/0/o/199953021/rsid/7a2ec9a0-7f2e-481b-bedb-74d433f1ec63/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/95.214.217.241*asn/u_srvc/81255/u_did/web_xcMP58ms6wiiBJAFHOZwpN2RU5h8k4Cd/type.live/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/tvp2.svg"],
        ["https://meta.vcdn.biz/3b30799f5a8692e911e8b5648a086714_megogo/live/hls/b/700_2490/u_sid/0/o/199953841/rsid/437ac8dc-9174-4e75-b757-965707c4ee76/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/95.214.217.241*asn/u_srvc/81255/u_did/web_xcMP58ms6wiiBJAFHOZwpN2RU5h8k4Cd/type.live/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/tvp3.svg"],
        ["https://meta.vcdn.biz/b67ba3231099a5f671aa9c86e860c853_megogo/live/hls/b/700_2490/u_sid/0/o/160222531/rsid/03345912-33f2-4ab5-9daa-b6fd5241cdd7/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/95.214.217.241*asn/u_srvc/81255/u_did/web_xcMP58ms6wiiBJAFHOZwpN2RU5h8k4Cd/type.live/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/polsat.svg"],
        ["https://meta.vcdn.biz/6c4af6f01c63b5c189c5c4fd2b804b76_megogo/live/hls/b/700_2490/u_sid/0/o/160168951/rsid/b0dae85c-11eb-42cd-ba0b-e61b923aa86b/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/193.42.98.10*asn/u_srvc/81255/u_did/web_xcMP58ms6wiiBJAFHOZwpN2RU5h8k4Cd/type.live/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/tv4.svg"],
        ["https://meta.vcdn.biz/5e6af30db7482a3cf8f068134e6a1a4e_megogo/live/hls/b/700_2490/u_sid/0/o/157324701/rsid/2c1589e4-1f6c-4055-8cf8-eb78396ee450/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/193.42.98.10*asn/u_srvc/81255/u_did/web_xcMP58ms6wiiBJAFHOZwpN2RU5h8k4Cd/type.live/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/tvpuls.svg"],
        ["https://stream.4fun.tv:8888/hls/4f.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v1/banners/4fun.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
    ];
    return channeldb;
}
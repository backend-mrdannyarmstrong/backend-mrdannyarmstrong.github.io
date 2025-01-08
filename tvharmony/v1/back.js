function checkupdate() {
    needupdate = 0;
    return needupdate;
}
function geturl() {
    url = "";
    return url;
}
function getchannels() {
    var channeldb = [
        ["https://v2.weatherscan.net", "http://backend-mrdannyarmstrong/tvharmony/v1/channels/weather.png"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "http://backend-mrdannyarmstrong/tvharmony/v1/channels/news.png"],
        ["https://www.youtube.com/embed/OeMgsyLvskI", "http://backend-mrdannyarmstrong/tvharmony/v1/channels/music.png"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "http://backend-mrdannyarmstrong/tvharmony/v1/channels/movie.png"],
        ["https://cdn.herringnetwork.com/80A4DFF/awee_nva/AWE_Encore.m3u8", "http://backend-mrdannyarmstrong/tvharmony/v1/channels/travel.png"],
        ["http://fl2.moveonjoy.com/FOX_Sports_1/index.m3u8", "http://backend-mrdannyarmstrong/tvharmony/v1/channels/sports.png"],
        ["https://apollo.production-public.tubi.io/live/ac-kartoon.m3u8", "http://backend-mrdannyarmstrong/tvharmony/v1/channels/toons.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
        ["#", "blank.png"],
    ];
    return channeldb;
}

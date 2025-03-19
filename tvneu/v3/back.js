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
        ["http://mytv.dothome.co.kr/ch/catv/7.php", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/kbsworld.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/adultswim.svg"],
        ["http://mytv.dothome.co.kr/ch/public/1.php", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/kbs1.svg"],
        ["http://mytv.dothome.co.kr/ch/public/3.php", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/kbs2.svg"],
        ["https://ebsonair.ebs.co.kr/ebs1familypc/familypc1m/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/ebt1.svg"],
        ["https://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/ebt2.svg"],
        ["https://wowza.jejumbc.com/live/tv_jejumbc/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/mbc.svg"],
        ["https://stream1.knn.co.kr/hls/9ly4534y7dm2xfa123r2_tv/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v3/banners/sbs.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
    ];
    return channeldb;
}
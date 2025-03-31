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
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tnt.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26a781-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6903cfae-183e-4d3b-a482-b7acf38ce356", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/anime.svg"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/toonami.svg"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/awe.svg"],
        ["http://fl2.moveonjoy.com/PARAMOUNT_NETWORK/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/paramount.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/newsnation.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/adultswim.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/bobross.svg"],
        ["https://www.rtp.pt/play/direto/rtp1", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/rtp1.svg"],
        ["https://www.rtp.pt/play/direto/rtp2", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/rtp2.svg"],
        ["https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/rtp3.svg"],
        ["https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/sic.svg"],
        ["https://d277k9d1h9dro4.cloudfront.net/out/v1/293e7c3464824cbd8818ab8e49dc5fe9/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/sicnoticias.svg"],
        ["https://tviplayer.iol.pt/direto/TVI", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tvi.svg"],
        ["https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tvificaos.svg"],
        ["https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tviv.svg"],
        ["https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/sbt.svg"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/record.svg"],
        ["https://video09.logicahost.com.br/redebrasiloficial/redebrasiloficial/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/redebrasil.svg"],
        ["https://5b33b873179a2.streamlock.net:1443/live/livestream/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/culture.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
    ];
    return channeldb;
}
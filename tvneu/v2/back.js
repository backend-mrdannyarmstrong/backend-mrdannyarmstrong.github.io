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
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/paramount.svg"],
        ["http://fl2.moveonjoy.com/BBC_AMERICA/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/bbcus.svg"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/awe.svg"],
        ["https://cdn.nhkworld.jp/www11/nhkworld-tv/bmcc-live/pt/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/nhk.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/newsnation.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/adultswim.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/bobross.svg"],
        ["https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/rtp1.svg"],
        ["https://canaleducacao-stream.ebc.com.br/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/educao.svg"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/record.svg"],
        ["https://sic.pt/direto", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/sic.svg"],
        ["https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/sbt.svg"],
        ["https://stmv1.srvif.com/animetv/animetv/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/animax.svg"],
        ["https://tviplayer.iol.pt/direto/TVI?_ga=2.142991861.1586945407.1673868372-1674446354.1654689035", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/tvi.svg"],
        ["https://pull-live-156-1.global.ssl.fastly.net/pc5865dc25400thmb-ea6bf03b14fa318f7133/smil:pc1-jhrgyuoqe5865db-68tkgb14fa318f7133f03.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v2/banners/porto.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
    ];
    return channeldb;
}
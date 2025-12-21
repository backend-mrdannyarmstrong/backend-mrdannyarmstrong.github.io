function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["index.html", "NULL"],
        ["https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch2.png"],
        ["index2.html#https://fl1.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch3.png"],
        ["http://v2.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch4.png"],
        ["index2.html#https://fl1.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch5.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch6.png"],
        ["index2.html#http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch7.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch8.png"],
        ["index2.html#https://fl1.moveonjoy.com/AMC_NETWORK/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch9.png"],
        ["index2.html#https://fl1.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch10.png"],
        ["https://backend-mrdannyarmstrong.github.io/tvazul/v2/yt/ch11.html", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch11.png"],
        ["index2.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch12.png"],
        ["index2.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch13.png"],
        ["index2.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpndvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch14.png"],
        ["index2.html#https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch15.png"],
        ["index2.html#https://raw.githubusercontent.com/ipstreet312/freeiptv/master/ressources/tvipt/sh/tvi.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch16.png"],
        ["index2.html#https://video-auth4.iol.pt/live_tvi_africa/live_tvi_africa/edge_servers/tviafrica-480p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch17.png"],
        ["index2.html#https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch18.png"],
        ["index2.html#https://video-auth4.iol.pt/live_tvi_reality/live_tvi_reality/edge_servers/tvireality-720_passthrough/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch19.png"],
        ["index2.html#https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch20.png"],
        ["index2.html#https://w1.manasat.com/tvmana-1/smil:tvmana-1.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch21.png"],
        ["index2.html#https://globallive.tdm.com.mo/ch2/ch2.live/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch22.png"],
        ["https://cnnportugal.iol.pt/direto", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch23.png"],
        ["https://embedtv-5.icu/sonychannel", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch24.png"],
        ["https://embedtv-5.icu/cartoonnetwork", "https://backend-mrdannyarmstrong.github.io/tvazul/v2/ch25.png"],
        
    ];
    return channeldb;
}

function checkupdate() {
    needupdate = 0;
    return needupdate;
}

function geturl() {
    url = "";
    return url
}
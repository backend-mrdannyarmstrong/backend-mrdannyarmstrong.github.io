function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch1.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch2.png"],
        ["index3.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpndvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch3.png"],
        ["index3.html#https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch4.png"],
        ["index3.html#https://video-auth6.iol.pt/edge_servers/tvi-480p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8xOS8yMDI2IDEyOjI2OjUyIEFNJmhhc2hfdmFsdWU9M0RML0hIUi84K3pSeEE3alBEWmlGZz09JnZhbGlkbWludXRlcz0xNDQwJmlkPTU3MWQ1ZmIzLTRhNmQtNDg1My1iZTg5LTFmOGQ3OWYwZGJkNg==", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch5.png"],
        ["index3.html#https://video-auth4.iol.pt/live_tvi_africa/live_tvi_africa/edge_servers/tviafrica-480p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch6.png"],
        ["index3.html#https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch7.png"],
        ["index3.html#https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch8.png"],
        ["index2.html#https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch9.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch10.png"],
        ["index2.html#http://v1.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch11.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch12.png"],
        ["index3.html#https://asp7.toonamiaftermath.com/livehttporigin/est/Ibd7c5-xHCbpk-playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch13.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch14.png"],
        ["index3.html#https://linear-59.frequency.stream/dist/plex/59/hls/master/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch15.png"],
        ["index2.html#https://backend-mrdannyarmstrong.github.io/digivision/v1/yt/zen.html", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch16.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["RTP 1", "Conteúdo geral"],
        ["RTP 2", "Conteúdo variado"],
        ["RTP Noticias", "Notícias"],
        ["SIC", "Telenovelas"],
        ["TVI", "Telenovalas e notícias"],
        ["TVI Africa", "Espetáculos de comédia"],
        ["TVI Ficao", "Telenovelas"],
        ["V+", "Conteúdo variado"],
        ["Bob Ross", "Joy of Painting"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["Cartoon Network", "Cartoons"],
        ["Toonami Aftermath", "Cartoons and Anime"],
        ["TNT", "Movies TV shows and sports"],
        ["Hi-Ya", "Asian flicks"],
        ["Zen Music", "Traditional Asian music 24/7"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["index2.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch1.png"],
        ["index2.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch2.png"],
        ["index2.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpndvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch3.png"],
        ["index2.html#https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch4.png"],
        ["index2.html#https://video-auth6.iol.pt/edge_servers/tvi-480p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8xOS8yMDI2IDEyOjI2OjUyIEFNJmhhc2hfdmFsdWU9M0RML0hIUi84K3pSeEE3alBEWmlGZz09JnZhbGlkbWludXRlcz0xNDQwJmlkPTU3MWQ1ZmIzLTRhNmQtNDg1My1iZTg5LTFmOGQ3OWYwZGJkNg==", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch5.png"],
        ["index2.html#https://video-auth4.iol.pt/live_tvi_africa/live_tvi_africa/edge_servers/tviafrica-480p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch6.png"],
        ["index2.html#https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch7.png"],
        ["index2.html#https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch8.png"],
        ["https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch9.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch10.png"],
        ["http://v1.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch11.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch12.png"],
        ["index2.html#https://asp7.toonamiaftermath.com/livehttporigin/est/Ibd7c5-xHCbpk-playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch13.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch14.png"],
        ["index2.html#https://linear-59.frequency.stream/dist/plex/59/hls/master/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch15.png"],
        ["https://backend-mrdannyarmstrong.github.io/digivision/v1/yt/zen.html", "https://backend-mrdannyarmstrong.github.io/digivision/v1/ch16.png"],
    ];
    return channeldb;
}

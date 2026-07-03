function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch1.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch2.png"],
        ["index3.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpndvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch3.png"],
        ["index2.html#https://opto.sic.pt/stream-fullscreen", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch4.png"],
        ["index3.html#https://video-auth6.iol.pt/edge_servers/tvi-720_passthrough/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch5.png"],
        ["index3.html#https://video-auth1.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch7.png"],
        ["index3.html#https://video-auth4.iol.pt/live_tvi_reality/live_tvi_reality/edge_servers/tvireality-720_passthrough/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch6.png"],
        ["index3.html#https://video-auth2.iol.pt/edge_servers/vmais-720p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch8.png"],
        ["index3.html#https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch9.png"],
        ["index3.html#https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch10.png"],
        ["index3.html#https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch11.png"],
        ["index3.html#https://redebrasil.nuvemplay.live/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch12.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtpi.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch13.png"],
        ["index3.html#https://video-auth6.iol.pt/edge_servers/tviinternacional-720p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch14.png"],
        ["index2.html#https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch15.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch16.png"],
        ["index2.html#http://v1.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch17.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch18.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch19.png"],
        ["index2.html#https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/yt/tao.html", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch20.png"],
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
        ["TVI Ficao", "Telenovelas"],
        ["TVI Reality", "Espetáculos de comédia"],
        ["V+", "Conteúdo variado"],
        ["RTP Mundo", "Conteúdo geral"],
        ["TV Cultura", "Conteúdo cultural"],
        ["Record TV", "Telenovalas e notícias"],
        ["SBT", "Telenovalas notícias e programa de jogos"],
        ["Rede Brasil", "Séries americanas clássicas"],
        ["TVI Internacional", "Telenovalas e notícias"],
        ["Bob Ross", "Joy of Painting"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["Cartoon Network", "Cartoons"],
        ["TNT", "Movies TV shows and sports"],
        ["Tao Music", "Traditional Asian music 24/7"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch1.png"],
        ["https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch2.png"],
        ["https://streaming-live.rtp.pt/livetvhlsDVR/rtpndvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch3.png"],
        ["https://opto.sic.pt/stream-fullscreen", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch4.png"],
        ["https://video-auth6.iol.pt/edge_servers/tvi-720_passthrough/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch5.png"],
        ["https://video-auth1.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch7.png"],
        ["https://video-auth4.iol.pt/live_tvi_reality/live_tvi_reality/edge_servers/tvireality-720_passthrough/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch6.png"],
        ["https://video-auth2.iol.pt/edge_servers/vmais-720p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch8.png"],
        ["https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch9.png"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch10.png"],
        ["https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch11.png"],
        ["https://redebrasil.nuvemplay.live/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch12.png"],
        ["https://streaming-live.rtp.pt/liverepeater/rtpi.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch13.png"],
        ["https://video-auth6.iol.pt/edge_servers/tviinternacional-720p/chunks.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8xLzIwMjYgODozNzoyMCBQTSZoYXNoX3ZhbHVlPUIxcDRFa2pTVE5YeDROZkxLNDROU3c9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yY2VlMmQ3Yi1kOTIzLTQyYjktYTBjNi0xODAyM2JhMmMxMDc=", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch14.png"],
        ["https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch15.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch16.png"],
        ["http://v1.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch17.png"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch18.png"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch19.png"],
        ["https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/yt/tao.html", "https://backend-mrdannyarmstrong.github.io/digivision/v1r5054/ch20.png"],
    ];
    return channeldb;
}

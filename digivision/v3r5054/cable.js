function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch1.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch2.png"],
        ["index3.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch3.png"],
        ["index2.html#https://sic.pt/direto", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch4.png"],
        ["index3.html#tvi", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch5.png"],
        ["index3.html#tvific", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch6.png"],
        ["index3.html#tvirel", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch7.png"],
        ["index3.html#tvivps", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch8.png"],
        ["index2.html#https://pluto.tv/us/watch/live-tv/#18785", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch9.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch10.png"],
        ["index2.html#https://i1.weatherstar.dev/", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch11.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch12.png"],
        ["index3.html#https://asp7.toonamiaftermath.com/livehttporigin/est/Ibd7c5-xHCbpk-playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch13.png"],
        ["index2.html#https://pluto.tv/us/watch/live-tv/#18785", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch14.png"],
        ["index2.html#https://pluto.tv/us/watch/live-tv/#31215", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch15.png"],
        ["index2.html#https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/yt/tao.html", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch16.png"],
        ["index.html", "NULL"],
    ];
    tviurl = tviget(1);
    tviurl = "index3.html#" + tviurl;
    channeldb[5][0] = tviurl;
    tvificurl = tviget(2);
    tvificurl = "index3.html#" + tvificurl;
    channeldb[6][0] = tvificurl;
    tvirelurl = tviget(3);
    tvirelurl = "index3.html#" + tvirelurl;
    channeldb[7][0] = tvirelurl;
    tvivmsurl = tviget(4);
    tvivmsurl = "index3.html#" + tvivmsurl;
    channeldb[8][0] = tvivmsurl;
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["RTP 1", "Conteúdo geral"],
        ["RTP 2", "Conteúdo variado"],
        ["RTP Notícias", "Notícias 24 horas por dia, 7 dias por semana."],
        ["SIC", "Telenovelas"],
        ["TVI", "Telenovelas e programas de reality show"],
        ["TVI Ficção", "Telenovelas"],
        ["TVI Reality", "programas de reality show"],
        ["V+", "Telenovelas e programas de reality show"],
        ["Bob Ross", "Joy of Painting"],
        ["The Hill", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["Cartoon Network", "Cartoons"],
        ["Toonami Aftermath", "Cartoons and Anime"],
        ["00s Replay", "Movies from the new mellenium"],
        ["Vevo 2k", "Music from the new mellenium"],
        ["Zen Music", "Traditional Asian music 24/7"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["index2.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch1.png"],
        ["index2.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch2.png"],
        ["index2.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch3.png"],
        ["https://sic.pt/direto", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch4.png"],
        ["index2.html#tvi", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch5.png"],
        ["index2.html#tvific", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch6.png"],
        ["index2.html#tvirel", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch7.png"],
        ["index2.html#tvivps", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch8.png"],
        ["https://pluto.tv/us/watch/live-tv/#18785", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch9.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch10.png"],
        ["https://i1.weatherstar.dev/", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch11.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch12.png"],
        ["index2.html#https://asp7.toonamiaftermath.com/livehttporigin/est/Ibd7c5-xHCbpk-playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch13.png"],
        ["https://pluto.tv/us/watch/live-tv/#18785", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch14.png"],
        ["https://pluto.tv/us/watch/live-tv/#31215", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch15.png"],
        ["https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/yt/tao.html", "https://backend-mrdannyarmstrong.github.io/digivision/v3r5054/ch16.png"],

    ];
    tviurl = tviget(1);
    tviurl = "index2.html#" + tviurl;
    channeldb[4][0] = tviurl;
    tvificurl = tviget(2);
    tvificurl = "index2.html#" + tvificurl;
    channeldb[5][0] = tvificurl;
    tvirelurl = tviget(3);
    tvirelurl = "index2.html#" + tvirelurl;
    channeldb[6][0] = tvirelurl;
    tvivmsurl = tviget(4);
    tvivmsurl = "index2.html#" + tvivmsurl;
    channeldb[7][0] = tvivmsurl;
    return channeldb;
}

function tviget(flagger) {
    let url = "";
    if (flagger == 1) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI.m3u8";
    }
    if (flagger == 2) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI_Ficcao.m3u8";
    }
    if (flagger == 3) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI_Reality.m3u8";
    }
    if (flagger == 4) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/Vmais_TVI.m3u8";
    }
    
    try {
        xhr = new XMLHttpRequest();
        xhr.open("GET", url, false); 
        xhr.send(null);

        if (xhr.status === 200) {
            match = xhr.responseText.match(/https:\/\/\S+/);
            if (match) {
                return match[0];
            }
        }
    } catch (error) {
        console.error("Failed to fetch GitHub file synchronously:", error);
    }
    
    return null;
}

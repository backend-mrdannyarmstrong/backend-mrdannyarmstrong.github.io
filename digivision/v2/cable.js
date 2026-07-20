function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index3.html#https://ec06-krk3.cache.orange.pl/dai4/org1/vb/104/tvp1hd/v1-121.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch1.png"],
        ["index3.html#https://hls3eu.sweet.tv/stream/pv288u4tiszs28eusv7rkx5g242terfn3msvpxd89c8ajx85qwbj6kfnzutikxbe2rj6y9cam43a32zbkdy2v3js2chczszwmjrg2cd93b474sik8v45fnuadj4cy8g38n8zba7fahxwa6zhrdkkd7buka3dx3ueyfqgwjb22exkrh3i73w888p7afxpi5d3pc3wdwi=.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch2.png"],
        ["index3.html#https://www.tvp.info/ogladaj-na-zywo", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch3.png"],
        ["index3.html#https://hls6eu.sweet.tv/stream/8e4vua775pfspiknhfkn3jmyhp665w9ir79yce4fs5fnavef97k3dtxz4a3pr66u6gvrvwjtuh6wfbrry56y2md4erufdu34wyk2t6g4j6kc6gbz65eqaa4msfcmpsdffjzpvktdpxgyv6nenzixbf9uvcunbhcdcccsip28m2wf27skj9vugvq3f23hrq7imm3xfra=.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch4.png"],
        ["index2.html#https://pilot.wp.pl/tv/#polsat-hd", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch5.png"],
        ["index2.html#https://tvivu.com/watch/polsat-film", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch6.png"],
        ["index2.html#https://tvivu.com/watch/polsat-news", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch7.png"],
        ["index2.html#https://pilot.wp.pl/tv/#tv-puls-hd", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch8.png"],
        ["index2.html#https://pilot.wp.pl/tv/#tv-4-hd", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch9.png"],
        ["index3.html#https://stream.4fun.tv:8888/hls/4f_high/index.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch10.png"],
        ["index2.html#https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch11.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch12.png"],
        ["index2.html#http://v1.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch13.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch14.png"],
        ["index3.html#https://asp7.toonamiaftermath.com/livehttporigin/est/Ibd7c5-xHCbpk-playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch15.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch16.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["TVP 1", "Všeobecný obsah"],
        ["TVP 2", "Różnorodna treść"],
        ["TVP Info", "Wiadomości 24/7"],
        ["TVP Sports", "Kanał sportowy"],
        ["PolSat", "Seriale i filmy"],
        ["PolSat Film", "kanał filmowy"],
        ["PolSat News", "Wiadomości 24/7"],
        ["TV Puls", "Różnorodna treść"],
        ["TV4", "Seriale i filmy"],
        ["4Fun TV", "Kanał muzyczny"],
        ["Bob Ross", "Joy of Painting"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["Cartoon Network", "Cartoons"],
        ["Toonami Aftermath", "Cartoons and Anime"],
        ["TNT", "Movies TV shows and sports"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["index2.html#https://ec06-krk3.cache.orange.pl/dai4/org1/vb/104/tvp1hd/v1-121.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch1.png"],
        ["index2.html#https://hls3eu.sweet.tv/stream/pv288u4tiszs28eusv7rkx5g242terfn3msvpxd89c8ajx85qwbj6kfnzutikxbe2rj6y9cam43a32zbkdy2v3js2chczszwmjrg2cd93b474sik8v45fnuadj4cy8g38n8zba7fahxwa6zhrdkkd7buka3dx3ueyfqgwjb22exkrh3i73w888p7afxpi5d3pc3wdwi=.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch2.png"],
        ["index2.html#https://tvp5.cache.orange.pl/tvp/live/W618FE7qBD6NPnlDZnxy4Q/1784500180/video/live/live171/nginx/INF/156/master_v3.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch3.png"],
        ["index2.html#https://hls6eu.sweet.tv/stream/8e4vua775pfspiknhfkn3jmyhp665w9ir79yce4fs5fnavef97k3dtxz4a3pr66u6gvrvwjtuh6wfbrry56y2md4erufdu34wyk2t6g4j6kc6gbz65eqaa4msfcmpsdffjzpvktdpxgyv6nenzixbf9uvcunbhcdcccsip28m2wf27skj9vugvq3f23hrq7imm3xfra=.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch4.png"],
        ["https://pilot.wp.pl/tv/#polsat-hd", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch5.png"],
        ["https://tvivu.com/watch/polsat-film", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch6.png"],
        ["https://tvivu.com/watch/polsat-news", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch7.png"],
        ["https://pilot.wp.pl/tv/#tv-puls-hd", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch8.png"],
        ["https://pilot.wp.pl/tv/#tv-4-hd", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch9.png"],
        ["index2.html#https://stream.4fun.tv:8888/hls/4f_high/index.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch10.png"],
        ["https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch11.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch12.png"],
        ["http://v1.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch13.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch14.png"],
        ["index2.html#https://asp7.toonamiaftermath.com/livehttporigin/est/Ibd7c5-xHCbpk-playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch15.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-mrdannyarmstrong.github.io/digivision/v2/ch16.png"],
    ];
    return channeldb;
}

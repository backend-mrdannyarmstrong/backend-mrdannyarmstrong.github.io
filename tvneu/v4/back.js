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
        ["NULL", "NULL"],
        ["https://the-guardian-3d0e32e7-aa40-49e5-b9d9-c433151fa61a-uk.fast.rakuten.tv/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6437/master.m3u8?ads.Rakuten+TV+EU_channel=&ads.amznbrmid=&ads.amznregion=&ads.amznslots=&ads.app_bundle=com.rakutentv.web&ads.app_name=RakutenTV&ads.app_store_url=rakuten.tv&ads.app_version=&ads.brand_name=&ads.content_classification=15&ads.content_url=rakutentv&ads.device_lmt=0&ads.device_make=firefox&ads.device_model=GENERIC&ads.device_year=2024&ads.did=e796ac3c-4c58-4142-a81d-e26144dde8d3&ads.env=prod&ads.gam_correlator=1545604833847206&ads.gdpr_consent=CQO8ASAQO8ASAAcABBENBiFsAP_gAEPgACiQKrMV5C5cTWFgcTp1QPsEeYUH1sAwgkAAAACBAqABCCAEMBQAgiAgMASABAACAAIAIBBBAQAkCAAEAEAAQAAAAABIIACAgBAIIABAABEBAABACAACAAAAAACIgAAVAAAAkAAAAFKEAEAAAAAAAkAAAAAAAAAAAAIABAAIAAIAAEAIACgAAQAAAAAAAAAAARgAEAkAAAAAAAAAAAAAABAQEAAAAAAgABAAAAAAABBVaCGAAgABYAFQALgAcAA8ACAAEgAKgAZQA0ADUAHAAPAAfgBHACYAFCALgAugBiADQAG8APQAfgBCACGgEQARIAlgBhgDKAGaANEAc4A-AB-gEIAIsAR0AkoBigDXgG4AOIAdQA_oB_wETAIvASIAlYBMQCkQFdgLYAXmAxYBlgDVQGsgPHAfuA_sCP4E3gJzATuAoqBVYAAA.f_wACHwAAAAA&ads.google_ad_manager_nonce=&ads.ifa_type=ppid&ads.market=uk&ads.os_language=&ads.platform=web&ads.player_height=1080&ads.player_width=1920&ads.pod_type=playerpage_midroll&ads.ppid=e796ac3c-4c58-4142-a81d-e26144dde8d3&ads.rtv_channel_name=the-guardian-3d0e32e7-aa40-49e5-b9d9-c433151fa61a_uk&ads.rtv_content_id=6437&ads.rtv_content_language=eng&ads.rtv_language=eng&ads.rtvid=271858&ads.streaming_id=fe770d51-731e-46c0-bc86-9a536be3b490&ads.tivo_devcountry=&ads.tivo_devmakedate=&ads.tivo_mvpd=&ads.tivo_platform=&ads.tivo_usid=&ads.tivo_uxloc=&ads.user_type=visitor&channel_id=6437&publishing_platform_id=5", "https://backend-mrdannyarmstrong.github.io/tvneu/v4/banners/guardian.svg"],
        ["https://v2.weatherscan.net/", "https://backend-mrdannyarmstrong.github.io/tvneu/v4/banners/weatherscan.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26a781-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6903cfae-183e-4d3b-a482-b7acf38ce356", "https://backend-mrdannyarmstrong.github.io/tvneu/v4/banners/anime.svg"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-mrdannyarmstrong.github.io/tvneu/v4/banners/toonami.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v3/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-mrdannyarmstrong.github.io/tvneu/v4/banners/bobross.svg"],
        ["intl/index.html", "https://backend-mrdannyarmstrong.github.io/tvneu/v4/banners/intl.svg"],
        ["legacy/index.html", "https://backend-mrdannyarmstrong.github.io/tvneu/v4/banners/legacy.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
    ];
    return channeldb;
}
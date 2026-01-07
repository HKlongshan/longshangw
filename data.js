// data.js - 網站內容管理文件
const siteData = {
    // 1. 網站基本信息 
    basic: {
        name: "順德龍山同鄉會",
        copyrightYear: "2025",
        logo: "pict/icon.jpg" 
    },

    // 2. 主視覺輪播 
    hero: {
        slides: [
            {
                image: "pict/banner1.jpg", 
                title: "凝聚龍山情，共築中國夢",
                subtitle: "全球龍山鄉親的網上家園"
            },
            {
                image: "pict/banner2.jpg", 
                title: "團結互助，薪火相傳",
                subtitle: "歡迎新會員，共創美好未來"
            },
            {
                image: "pict/banner3.jpg", 
                title: "弘揚龍山文化，促進家鄉發展",
                subtitle: "了解最新活動，參與公益事業"
            }
        ]
    },

    // 3. 會長獻辭
    president: {
        name: "胡國光",
        title: "順德龍山同鄉會會長",
        nameClass: "text-primary font-bold mt-6 text-3xl",
        photo: "pict/huizhang.jpeg", 
        paragraphs: [
            "歡迎訪問順德龍山同鄉會官方網站！作為全球龍山鄉親的橋樑和紐帶，本會始終秉承\"團結鄉親、服務鄉親、造福鄉親\"的宗旨，致力於傳承龍山文化，促進家鄉發展。",
            "近年來，在各位鄉親的大力支持下，同鄉會各項工作取得了長足進步。我們成功舉辦了多場文化交流活動，建立了完善的會員服務體系，並積極參與家鄉建設。這些成績的取得，離不開每一位鄉親的熱心參與和無私奉獻。",
            "展望未來，我們將繼續創新服務方式，拓展服務領域，為全球龍山鄉親搭建更廣闊的交流平台。衷心希望各位鄉親一如既往地關心支持同鄉會工作，共同為傳承龍山文化、促進家鄉發展貢獻力量！"
        ]
    },

    // 4. 本會動態 (6 項，包含詳情 content 和 detailImages 供彈窗使用)
    news: [
        {
            id: 1, 
            date: "2025-02-10",
            title: "2025年新春團拜活動圓滿舉行",
            summary: "2月8日，同鄉會在龍山文化中心舉辦新春團拜活動，200餘位鄉親歡聚一堂，共慶新春佳節...",
            image: "pict/P1.jpeg",
            content: "本次新春團拜活動是疫情後首次大規模線下聚會，現場氣氛熱烈，鄉親們互道祝福。會長張大山先生在致辭中回顧了過去一年的工作，並對新一年的發展進行了展望。活動包括文藝表演、抽獎環節及豐富的午宴。",
            detailImages: [
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P5.jpeg"
            ]
        },
        {
            id: 2,
            date: "2025-01-15",
            title: "同鄉會向龍山小學捐贈教學設備",
            summary: "1月12日，同鄉會向龍山小學捐贈價值50萬元的教學設備，助力家鄉教育事業發展...",
            image: "pict/P2.jpeg",
            content: "本次捐贈儀式在龍山小學禮堂舉行。捐贈的設備包括多媒體教學套件、電腦、以及圖書館新書。會長表示，教育是民族的希望，同鄉會將持續關注家鄉教育發展，貢獻一份力量。",
            detailImages: [
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P5.jpeg"
            ]
        },
        {
            id: 3,
            date: "2024-12-20",
            title: "2024年度會員大會順利召開",
            summary: "12月18日，同鄉會召開2024年度會員大會，審議通過年度工作報告和財務報告...",
            image: "pict/P3.jpeg",
            content: "會員大會順利完成所有議程，包括審議並通過了理事會和監事會的工作報告，以及來年的預算方案。大會選舉了新一屆理事會成員，並明確了未來一年的工作重點，將以服務青年鄉親和傳承文化為核心。",
            detailImages: [
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P5.jpeg"
            ]
        },
        {
            id: 4,
            date: "2024-11-05",
            title: "龍山文化週圓滿落幕",
            summary: "為期七天的龍山文化週活動吸引了眾多鄉親和市民參與，成功展示了龍山豐富的傳統文化...",
            image: "pict/P4.jpeg",
            content: "文化週活動涵蓋了舞獅表演、龍山美食體驗、非物質文化遺產展覽等多個環節。特別是傳統龍山戲曲表演，受到了年輕一代鄉親的熱烈追捧。本會承諾明年將繼續擴大舉辦規模。",
            detailImages: [
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P5.jpeg" 
            ]
        },
        {
            id: 5,
            date: "2024-10-01",
            title: "國慶暨中秋聯誼晚宴",
            summary: "同鄉會於國慶佳節舉辦大型聯誼晚宴，近三百名鄉親共聚一堂，慶祝雙節...",
            image: "pict/P5.jpeg",
            content: "本次晚宴以'月圓龍山情'為主題，設有歌舞表演、詩歌朗誦等環節。會上，本會表彰了一批對家鄉建設有突出貢獻的傑出鄉親。本次活動旨在加強海內外龍山鄉親之間的聯繫和情誼。",
            detailImages: [
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P2.jpeg",
                "pict/P3.jpeg",
                "pict/P4.jpeg",
                "pict/P5.jpeg"
            ]
        },
        {
            id: 6,
            date: "2024-03-6",
            title: "第一屆僑港順德龍山同鄉花炮會燃情启幕",
            summary: "锣鼓喧天庆盛世，烟花璀璨映龙山。顺德龙山花炮会在龙山金紫公园隆重举行。",
            image: "P6HUAPAOHUI/P1.jpeg",
            content: "来自海内外的龙山乡亲、市民游客齐聚一堂，在漫天绚烂与欢声笑语中，共赴这场承载着百年乡愁与美好祈愿的非遗之约，沉浸式感受顺德本土民俗文化的独特魅力。",
            detailImages: [
                "P6HUAPAOHUI/P1.jpeg",
                "P6HUAPAOHUI/P2.jpeg",
                "P6HUAPAOHUI/P3.jpeg",
                "P6HUAPAOHUI/P4.jpeg"
            ]
        }
    ],

    // 5. 龍山風采 (不變)
    gallery: [
        "pict/P13.jpeg",
        "pict/P12.jpeg",
        "pict/P11.jpeg",
        "pict/P10.jpeg",
        "pict/P9.jpeg",
        "pict/P8.jpeg",
        "pict/P7.jpeg",
        "pict/P6.jpeg"
    ],

    // 6. 聯繫我們 (不變)
    contact: {
        address: "香港九龍旺角彌敦道580號恆隆大廈12樓",
        phone: "+852 2770 8156",
        fax: "+852 2770 8156",
        email: "admin@longshan.xin",
        hours: "週一至週五 9:00-12:00",
        qrCode: "pict/huiyuan.png"
    }
};

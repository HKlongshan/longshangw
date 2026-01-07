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
            date: "2025-02-02",
            title: "龍山觀音開庫、燒大炮民俗盛會熱鬧啟幕",
            summary: "傳統「觀音開庫」「燒大炮」民俗儀式，邀鄉親與市民共赴充滿年味與福氣的文化之約，重溫本土非遺風情。",
            image: "P1ZHENGYUE15DAPAO/P1.jpeg",
            content: "傳承數載的「觀音開庫」祈福儀式、熱鬧「燒大炮」民俗登場，鄉親與遊客可沉浸式體驗本土非遺風情，共赴年味濃郁的春日歡會。",
            detailImages: [
                "P1ZHENGYUE15DAPAO/P1.jpeg",
                "P1ZHENGYUE15DAPAO/P2.jpeg",
                "P1ZHENGYUE15DAPAO/P3.jpeg",
                "P1ZHENGYUE15DAPAO/P4.jpeg",
                "P1ZHENGYUE15DAPAO/P5.jpeg",

            ]
        },
        {
            id: 2,
            date: "2025-01-15",
            title: "僑港順德龍山同鄉會2025新春座談會於香港順利舉辦",
            summary: "繼 2024 年 4 月建會 60 週年慶典圓滿落幕后，僑港順德龍山同鄉會 2025 新春座談會於香港順利舉辦。",
            image: "P2XINCHUNZUOTANHUI/P1.jpeg",
            content: "海內外龍山鄉親齊聚一堂，共賀新春、暢敘鄉情，圍繞會務發展、鄉梓建設等議題建言獻策，現場暖意融融，盡顯僑心向聚的深厚情誼。",
            detailImages: [
                "P2XINCHUNZUOTANHUI/P1.jpeg",
                "P2XINCHUNZUOTANHUI/P2.jpeg",
                "P2XINCHUNZUOTANHUI/P3.jpeg",
                "P2XINCHUNZUOTANHUI/P4.jpeg",
                "P2XINCHUNZUOTANHUI/P5.jpeg",
               
            ]
        },
        {
            id: 3,
            date: "2024-08-20",
            title: "2024年度理監事會務大會",
            summary: "8月20日，同鄉會召開2024年度會員大會，審議通過年度工作報告和財務報告...",
            image: "P4LIHUI/P1.jpeg",
            content: "會員大會順利完成所有議程，包括審議並通過了理事會和監事會的工作報告，以及來年的預算方案，並明確了未來一年的工作重點，將以服務青年鄉親和傳承文化為核心。",
            detailImages: [
                "P4LIHUI/P1.jpeg",
                "P4LIHUI/P2.jpeg",
                "P4LIHUI/P3.jpeg",
                "P4LIHUI/P14.jpeg",
                
            ]
        },
        {
            id: 4,
            date: "2024-07-05",
            title: "龍山文化三日兩夜觀光之旅",
            summary: "為期三天的龍山文化活動吸引了眾多鄉親和市民參與，成功展示了龍山豐富的傳統文化...",
            image: "P3ZOUFANGSHUNDE/P1.jpeg",
            content: "文化週活動涵蓋了舞獅表演、龍山美食體驗、非物質文化遺產展覽等多個環節。特別是傳統龍山戲曲表演，受到了年輕一代鄉親的熱烈追捧。本會承諾明年將繼續擴大舉辦規模。",
            detailImages: [
                "P3ZOUFANGSHUNDE/P1.jpeg",
                "P3ZOUFANGSHUNDE/P2.jpeg",
                "P3ZOUFANGSHUNDE/P3.jpeg",
                 
            ]
        },
        {
            id: 5,
            date: "2024-04-20",
            title: "僑港順德龍山同鄉會建會60週年慶典",
            summary: "同鄉會於60週年建會慶典，舉辦大型聯誼晚宴，近三百名鄉親共聚一堂，新春敬老聯歡晚會。",
            image: "P5CHUANGHUI60TH/P1.jpeg",
            content: "六十年櫛風沐雨凝僑心，一甲子薪火相傳聚鄉情。2024 年 4 月 20 日，僑港順德龍山同鄉會建會 60 周年慶典暨敬老聯歡晚會在香港隆重舉行。",
            detailImages: [
                "P5CHUANGHUI60TH/P1.jpeg",
                "P5CHUANGHUI60TH/P2.jpeg",
                "P5CHUANGHUI60TH/P3.jpeg",
                "P5CHUANGHUI60TH/P4.jpeg",
                "P5CHUANGHUI60TH/P5.jpeg"
            ]
        },
        {
            id: 6,
            date: "2024-03-6",
            title: "第一屆僑港順德龍山同鄉花炮會燃情启幕",
            summary: "鑼鼓喧天慶盛世，煙花璀璨映龍山。順德龍山花炮會在龍山金紫公園隆重舉行。",
            image: "P6HUAPAOHUI/P1.jpeg",
            content: "來自海內外的龍山鄉親、市民遊客齊聚一堂，在漫天絢爛與歡聲笑語中，共赴這場承載著百年鄉愁與美好祈願的非遺之約，沉浸式感受順德本土民俗文化的獨特魅力。",
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

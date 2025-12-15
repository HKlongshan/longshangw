// data.js - 網站內容管理文件
const siteData = {
    // 1. 網站基本信息 (不變)
    basic: {
        name: "順德龍山同鄉會",
        copyrightYear: "2025",
        logo: "pict/icon.jpg" 
    },

    // 2. 主視覺輪播 (不變)
    hero: {
        slides: [
            {
                image: "pict/banner1.jpg", //  pict/banner1.jpg
                title: "凝聚龍山情，共築中國夢",
                subtitle: "全球龍山鄉親的網上家園"
            },
            {
                image: "pict/banner2.jpg", //  pict/banner1.jpg
                title: "團結互助，薪火相傳",
                subtitle: "歡迎新會員，共創美好未來"
            },
            {
                image: "pict/banner3.jpg", //  pict/banner1.jpg  
                title: "弘揚龍山文化，促進家鄉發展",
                subtitle: "了解最新活動，參與公益事業"
            }
        ]
    },

    // 3. 會長獻辭 (不變)
    president: {
        name: "張大山",
        title: "順德龍山同鄉會會長",
        photo: "https://s.coze.cn/image/yf5J8XJQNj4/",
        paragraphs: [
            "歡迎訪問順德龍山同鄉會官方網站！作為全球龍山鄉親的橋樑和紐帶，本會始終秉承\"團結鄉親、服務鄉親、造福鄉親\"的宗旨，致力於傳承龍山文化，促進家鄉發展。",
            "近年來，在各位鄉親的大力支持下，同鄉會各項工作取得了長足進步。我們成功舉辦了多場文化交流活動，建立了完善的會員服務體系，並積極參與家鄉建設。這些成績的取得，離不開每一位鄉親的熱心參與和無私奉獻。",
            "展望未來，我們將繼續創新服務方式，拓展服務領域，為全球龍山鄉親搭建更廣闊的交流平台。衷心希望各位鄉親一如既往地關心支持同鄉會工作，共同為傳承龍山文化、促進家鄉發展貢獻力量！"
        ]
    },

    // 4. 本會動態 (重要修改：增加到 6 項並添加詳情字段)
    news: [
        {
            id: 1, // 新增 ID，用於在 JS 中識別
            date: "2025-02-10",
            title: "2025年新春團拜活動圓滿舉行",
            summary: "2月8日，同鄉會在龍山文化中心舉辦新春團拜活動，200餘位鄉親歡聚一堂，共慶新春佳節...",
            image: "https://s.coze.cn/image/RktqwR6JpJo/",
            // 以下為彈窗詳情內容
            content: "本次新春團拜活動是疫情後首次大規模線下聚會，現場氣氛熱烈，鄉親們互道祝福。會長張大山先生在致辭中回顧了過去一年的工作，並對新一年的發展進行了展望。活動包括文藝表演、抽獎環節及豐富的午宴。",
            detailImages: [
                "https://s.coze.cn/image/RktqwR6JpJo/",
                "https://s.coze.cn/image/X0zhJcQ5QHI/",
                "https://via.placeholder.com/300x200?text=Group+Photo"
            ]
        },
        {
            id: 2,
            date: "2025-01-15",
            title: "同鄉會向龍山小學捐贈教學設備",
            summary: "1月12日，同鄉會向龍山小學捐贈價值50萬元的教學設備，助力家鄉教育事業發展...",
            image: "https://s.coze.cn/image/X0zhJcQ5QHI/",
            content: "本次捐贈儀式在龍山小學禮堂舉行。捐贈的設備包括多媒體教學套件、電腦、以及圖書館新書。會長表示，教育是民族的希望，同鄉會將持續關注家鄉教育發展，貢獻一份力量。",
            detailImages: [
                "https://s.coze.cn/image/X0zhJcQ5QHI/",
                "https://s.coze.cn/image/RktqwR6JpJo/",
                "https://via.placeholder.com/300x200?text=Donation+Ceremony"
            ]
        },
        {
            id: 3,
            date: "2024-12-20",
            title: "2024年度會員大會順利召開",
            summary: "12月18日，同鄉會召開2024年度會員大會，審議通過年度工作報告和財務報告...",
            image: "https://via.placeholder.com/400x300?text=News+Image",
            content: "會員大會順利完成所有議程，包括審議並通過了理事會和監事會的工作報告，以及來年的預算方案。大會選舉了新一屆理事會成員，並明確了未來一年的工作重點，將以服務青年鄉親和傳承文化為核心。",
            detailImages: [
                "https://via.placeholder.com/300x200?text=Meeting+View",
                "https://via.placeholder.com/300x200?text=Annual+Report"
            ]
        },
        // 新增 3 個活動，達到 6 個 (橫三豎二)
        {
            id: 4,
            date: "2024-11-05",
            title: "龍山文化週圓滿落幕",
            summary: "為期七天的龍山文化週活動吸引了眾多鄉親和市民參與，成功展示了龍山豐富的傳統文化...",
            image: "https://s.coze.cn/image/mcZPeWcBeq0/",
            content: "文化週活動涵蓋了舞獅表演、龍山美食體驗、非物質文化遺產展覽等多個環節。特別是傳統龍山戲曲表演，受到了年輕一代鄉親的熱烈追捧。本會承諾明年將繼續擴大舉辦規模。",
            detailImages: [
                "https://s.coze.cn/image/mcZPeWcBeq0/",
                "https://s.coze.cn/image/jr0oa58bcGA/"
            ]
        },
        {
            id: 5,
            date: "2024-10-01",
            title: "國慶暨中秋聯誼晚宴",
            summary: "同鄉會於國慶佳節舉辦大型聯誼晚宴，近三百名鄉親共聚一堂，慶祝雙節...",
            image: "https://s.coze.cn/image/jt6EF7qB2Jc/",
            content: "本次晚宴以'月圓龍山情'為主題，設有歌舞表演、詩歌朗誦等環節。會上，本會表彰了一批對家鄉建設有突出貢獻的傑出鄉親。本次活動旨在加強海內外龍山鄉親之間的聯繫和情誼。",
            detailImages: [
                "https://s.coze.cn/image/jt6EF7qB2Jc/",
                "https://s.coze.cn/image/vVJI8hC6xwU/",
                "https://via.placeholder.com/300x200?text=Dinner+Hall"
            ]
        },
        {
            id: 6,
            date: "2024-09-15",
            title: "青年創業分享會成功舉辦",
            summary: "針對年輕鄉親舉辦的創業分享會，邀請了三位成功企業家分享經驗，反應熱烈...",
            image: "https://via.placeholder.com/400x300?text=Startup+Event",
            content: "分享會吸引了超過 100 位青年鄉親參加，企業家們就市場趨勢、融資渠道、團隊建設等議題進行了深入探討。會後，同鄉會成立了青年創業導師團，將為有需要的鄉親提供長期支持。",
            detailImages: [
                "https://via.placeholder.com/300x200?text=Speakers",
                "https://via.placeholder.com/300x200?text=Audience"
            ]
        }
    ],

    // 5. 龍山風采 (不變)
    gallery: [
        "https://s.coze.cn/image/rJrnTQvv2kQ/",
        "https://s.coze.cn/image/_qsH7RmyM2s/",
        "https://s.coze.cn/image/KSFjZrdZ2x8/",
        "https://s.coze.cn/image/PNa-Kdu5xWM/",
        "https://s.coze.cn/image/mcZPeWcBeq0/",
        "https://s.coze.cn/image/jr0oa58bcGA/",
        "https://s.coze.cn/image/jt6EF7qB2Jc/",
        "https://s.coze.cn/image/vVJI8hC6xwU/"
    ],

    // 6. 聯繫我們 (不變)
    contact: {
        address: "廣東省佛山市順德區龍山鎮同鄉路88號龍山同鄉會大廈",
        phone: "+86 757 8888 8888",
        fax: "+86 757 8888 8889",
        email: "info@longshantongxianghui.org",
        hours: "週一至週五 9:00-17:00",
        qrCode: "https://s.coze.cn/image/K0YYgw2FiNo/"
    }
};

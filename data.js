// data.js - 網站內容管理文件
const siteData = {
    // 1. 網站基本信息
    basic: {
        name: "順德龍山同鄉會",
        copyrightYear: "2025",
        // 修改這裡：指向你上傳到 pict 文件夾的圖片
        logo: "pict/icon.jpg" 
    },

    // 2. 主視覺輪播 (這裡改成了數組，可以放多張圖片)
    hero: {
        title: "凝聚龍山情，共築中國夢",
        subtitle: "全球龍山鄉親的網上家園",
        // 修改這裡：這是三張輪播圖，你可以上傳圖片到 pict 然後改成 "pict/banner1.jpg" 等
        images: [
            "https://s.coze.cn/image/F7cPpHU4ZU0/", // 圖片 1
            "https://s.coze.cn/image/rJrnTQvv2kQ/", // 圖片 2 (示例)
            "https://s.coze.cn/image/_qsH7RmyM2s/"  // 圖片 3 (示例)
        ]
    },

    // 3. 會長獻辭
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

    // 4. 本會動態
    news: [
        {
            date: "2025-02-10",
            title: "2025年新春團拜活動圓滿舉行",
            summary: "2月8日，同鄉會在龍山文化中心舉辦新春團拜活動，200餘位鄉親歡聚一堂，共慶新春佳節...",
            image: "https://s.coze.cn/image/RktqwR6JpJo/",
            link: "#"
        },
        {
            date: "2025-01-15",
            title: "同鄉會向龍山小學捐贈教學設備",
            summary: "1月12日，同鄉會向龍山小學捐贈價值50萬元的教學設備，助力家鄉教育事業發展...",
            image: "https://s.coze.cn/image/X0zhJcQ5QHI/",
            link: "#"
        },
        {
            date: "2024-12-20",
            title: "2024年度會員大會順利召開",
            summary: "12月18日，同鄉會召開2024年度會員大會，審議通過年度工作報告和財務報告...",
            image: "https://via.placeholder.com/400x300?text=News+Image",
            link: "#"
        }
    ],

    // 5. 龍山風采
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

    // 6. 聯繫我們
    contact: {
        address: "廣東省佛山市順德區龍山鎮同鄉路88號龍山同鄉會大廈",
        phone: "+86 757 8888 8888",
        fax: "+86 757 8888 8889",
        email: "info@longshantongxianghui.org",
        hours: "週一至週五 9:00-17:00",
        qrCode: "https://s.coze.cn/image/K0YYgw2FiNo/"
    }
};

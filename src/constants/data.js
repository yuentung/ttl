import Logo from './images/logo.png';
import Banner1 from './images/banner1.png';
import Banner2 from './images/banner2.png';
import Intro1 from './images/intro1.png';
import Intro2 from './images/intro2.png';
import About from './images/about.png';
import Product1 from './images/product1.png';
import Product2 from './images/product2.png';
import Product3 from './images/product3.png';
import Product4 from './images/product4.png';
import Clock from './images/clock.png';
import Mail from './images/mail.png';
import Phone from './images/phone.png';
import IG from './images/ig.png';
import FB from './images/fb.png';
import Map from './images/map.png';

const data = {
    home: {
        navbar: {
            logo: Logo,
            navList: [
                {
                    text: '關於我們',
                    link: '',
                },
                {
                    text: '產品資訊',
                    link: '',
                },
                {
                    text: '使用耗材',
                    link: '',
                },
                {
                    text: '聯絡資訊',
                    link: '',
                },
            ],
        },
        swiper: [
            {
                image: Banner1,
                title: '全自動<br />中空玻璃生產線',
                subTitle: 'INSULATING GLASS PRODUCTION',
            },
            {
                image: Banner2,
                title: '高品質<br />威斯卡系統門窗',
                subTitle: 'INSULATING GLASS PRODUCTION',
            },
        ],
        intro: [
            {
                subTitle: 'TTL SERVICE',
                title: '全自動<br />中空玻璃生產',
                description: '隨著國內玻璃加工行業的發展以及人們對中空玻璃的優點性能認識的不斷深入，中空玻璃的應用範圍在不斷擴大，除在玻璃幕牆、汽車、飛機等方面得到廣泛應用外，目前已開始進入尋常百姓家。',
                image: Intro1,
            },
            {
                subTitle: 'VC SERVICE',
                title: '全自動<br />大樓門窗生產',
                description: '隨著國內玻璃加工行業的發展以及人們對中空玻璃的優點性能認識的不斷深入，中空玻璃的應用範圍在不斷擴大，除在玻璃幕牆、汽車、飛機等方面得到廣泛應用外，目前已開始進入尋常百姓家。',
                image: Intro2,
            },
        ],
        about: {
            image: About,
            subTitle: 'ABOUT US',
            title: '關於我們',
            storyList: [
                {
                    time: '2001',
                    title: '在全自動模式下',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。One key start whole assembly line linkage under automatic model is utilized uniquely worldwide with simple operation. ',
                },
                {
                    time: '2006',
                    title: '最優質的產品及服務',
                    description: '「太子龍開發有限公司」設立於 2001 年，最主要的銷售項目為：中空玻璃生產 線、複層玻璃材料、玻璃自動加工設備、門窗加工設備、節能門窗及五金配件。 全世界倡導節能綠建築時。',
                },
                {
                    time: '2019',
                    title: '在全自動模式下',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。One key start whole assembly line linkage under automatic model is utilized uniquely worldwide with simple operation. ',
                },
            ],
        },
        products: {
            subTitle: 'PRODUCT',
            title: '產品介紹',
            productList: [
                {
                    image: Product1,
                    title: '玻璃切割機－Pujinli',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                },
                {
                    image: Product2,
                    title: '中空玻璃生產線-BOZA',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                },
                {
                    image: Product3,
                    title: '熱熔膠槍',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                },
                {
                    image: Product4,
                    title: '玻璃切割機－Pujinli',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                },
            ],
        },
        footer: {
            image: Banner1,
            info: {
                address: {
                    text: '桃園市八德區廣福路1123巷51之6號'
                },
                serviceHours: {
                    icon: Clock,
                    text: '8:00 AM — 6:00 PM',
                },
                mail: {
                    icon: Mail,
                    text: 't3753270@gmail.com',
                },
                phone: {
                    icon: Phone,
                    text: '03-3753270',
                },
                share: {
                    link: '',
                },
                ig: {
                    icon: IG,
                    link: '',
                },
                fb: {
                    icon: FB,
                    link: '',
                },
            },
            navList: [
                {
                    text: '公司資訊',
                    link: '',
                },
                {
                    text: '工程案例',
                    link: '',
                },
                {
                    text: '機械設備銷售',
                    link: '',
                    subNavList: [
                        {
                            text: '複層玻璃生產線',
                            link: '',
                        },
                        {
                            text: '玻璃切割機',
                            link: '',
                        },
                        {
                            text: '熱熔膠機',
                            link: '',
                        },
                    ],
                },
                {
                    text: 'VC 威斯卡門窗',
                    link: '',
                    subNavList: [
                        {
                            text: 'VC 威斯卡門窗',
                            link: '',
                        },
                        {
                            text: '門窗產品',
                            link: '',
                        },
                        {
                            text: '消耗性產品',
                            link: '',
                        },
                    ],
                },
            ],
            map: Map,
        }
    },
};

export default data;
import Logo from './images/logo.png';
import DarkLogo from './images/logo_dark.png';
import Banner1 from './images/banner1.png';
import Banner2 from './images/banner2.png';
import Intro1 from './images/intro1.png';
import Intro2 from './images/intro2.png';
import About from './images/about.png';
import TextImage from './images/text.png';
import TTLProduct1 from './images/ttl_product1.png';
import TTLProduct2 from './images/ttl_product2.png';
import TTLProduct3 from './images/ttl_product3.png';
import TTLProduct4 from './images/ttl_product4.png';
import VCProduct1 from './images/vc_product1.png';
import VCProduct2 from './images/vc_product2.png';
import VCProduct3 from './images/vc_product3.png';
import VCProduct4 from './images/vc_product4.png';

const data = {
    home: {
        navbar: {
            logo: Logo,
            darkLogo: DarkLogo,
            navList: [
                {
                    text: '公司資訊',
                    link: '',
                },
                {
                    text: '機器設備銷售',
                    link: '',
                    subNavList: [
                        {
                            text: '複層玻璃生產線',
                            link: '',
                            lastNavList: [
                                {
                                    text: '接角',
                                    link: '',
                                },
                                {
                                    text: '分子篩',
                                    link: '',
                                },
                                {
                                    text: '超級格條',
                                    link: '',
                                },
                                {
                                    text: '塑膠角料',
                                    link: '',
                                },
                                {
                                    text: '中空玻璃專用鋁條',
                                    link: '',
                                },
                                {
                                    text: '除膜機專用除膜輪',
                                    link: '',
                                },
                                {
                                    text: '熱熔丁基膠',
                                    link: '',
                                },
                                {
                                    text: '雙組份硅酮密封膠',
                                    link: '',
                                },
                                {
                                    text: '雙組份硅酮結構膠',
                                    link: '',
                                },
                            ],
                        },
                        {
                            text: '玻璃切割機',
                            link: '',
                        },
                        {
                            text: '熱熔膠機',
                            link: '',
                            lastNavList: [
                                {
                                    text: '芬熱熔膠',
                                    link: '',
                                },
                                {
                                    text: '南寶熱熔膠',
                                    link: '',
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'VC 威斯卡門窗',
                    link: '',
                    subNavList: [
                        {
                            text: '門窗產品',
                            link: '',
                            lastNavList: [
                                {
                                    text: '推開窗',
                                    link: '',
                                },
                                {
                                    text: '橫拉窗',
                                    link: '',
                                },
                                {
                                    text: '氣密門',
                                    link: '',
                                },
                                {
                                    text: '塑膠接角',
                                    link: '',
                                },
                                {
                                    text: '中空玻璃專用鋁條',
                                    link: '',
                                },
                                {
                                    text: '除膜機專用除膜輪',
                                    link: '',
                                },
                                {
                                    text: '熱熔丁基膠',
                                    link: '',
                                },
                                {
                                    text: '雙組份硅酮密封膠',
                                    link: '',
                                },
                                {
                                    text: '雙組份硅酮結構膠',
                                    link: '',
                                },
                            ],
                        },
                        {
                            text: '消耗性產品',
                            link: '',
                            lastNavList: [
                                {
                                    text: '芬熱熔膠',
                                    link: '',
                                },
                                {
                                    text: '南寶熱熔膠',
                                    link: '',
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '工程案例',
                    link: '',
                    subNavList: [
                        {
                            text: '',
                            link: '',
                            lastNavList: [
                                {
                                    text: '電梯大樓陽台窗',
                                    link: '',
                                },
                                {
                                    text: '別墅採光罩及玻璃安裝',
                                    link: '',
                                },
                                {
                                    text: '住宅推開窗及折疊紗窗',
                                    link: '',
                                },
                                {
                                    text: '住宅氣密門',
                                    link: '',
                                },
                                {
                                    text: '招待所平行回縮推拉門',
                                    link: '',
                                },
                                {
                                    text: '住宅格子窗',
                                    link: '',
                                },
                                {
                                    text: '住宅內導內開窗',
                                    link: '',
                                },
                                {
                                    text: '住宅外開上懸窗',
                                    link: '',
                                },
                                {
                                    text: '住宅三合一通風門',
                                    link: '',
                                },
                                {
                                    text: '機架料組合架及工作桌',
                                    link: '',
                                },
                                {
                                    text: '住宅樓梯扶手',
                                    link: '',
                                },
                                {
                                    text: '自動門',
                                    link: '',
                                },
                                {
                                    text: '淋浴拉門',
                                    link: '',
                                },
                                {
                                    text: '摺疊門',
                                    link: '',
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '聯絡我們',
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
            textImage: TextImage,
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
                    time: '2009',
                    title: '在全自動模式下',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。One key start whole assembly line linkage under automatic model is utilized uniquely worldwide with simple operation. ',
                },
                {
                    time: '2012',
                    title: '在全自動模式下',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。One key start whole assembly line linkage under automatic model is utilized uniquely worldwide with simple operation. ',
                },
                {
                    time: '2015',
                    title: '在全自動模式下',
                    description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。One key start whole assembly line linkage under automatic model is utilized uniquely worldwide with simple operation. ',
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
                [
                    {
                        image: TTLProduct1,
                        title: '玻璃切割機－Pujinli',
                        description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                    },
                    {
                        image: TTLProduct2,
                        title: '中空玻璃生產線-BOZA',
                        description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                    },
                    {
                        image: TTLProduct3,
                        title: '熱熔膠槍',
                        description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                    },
                    {
                        image: TTLProduct4,
                        title: '玻璃切割機－Pujinli',
                        description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                    },
                ],
                [
                    {
                        image: VCProduct1,
                        title: '玻璃切割機－Pujinli',
                        description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                    },
                    {
                        image: VCProduct2,
                        title: '中空玻璃生產線-BOZA',
                        description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                    },
                    {
                        image: VCProduct3,
                        title: '熱熔膠槍',
                        description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                    },
                    {
                        image: VCProduct4,
                        title: '玻璃切割機－Pujinli',
                        description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
                    },
                ]
            ],
        },
        footer: {
            image: Banner1,
            info: {
                address: {
                    text: '桃園市八德區廣福路1123巷51之6號'
                },
                serviceHours: {
                    text: '8:00 AM — 6:00 PM',
                },
                mail: {
                    text: 't3753270@gmail.com',
                },
                phone: {
                    text: '03-3753270',
                },
                share: {
                    link: '',
                },
                ig: {
                    link: '/',
                },
                fb: {
                    link: '/',
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
        }
    },
};

export default data;

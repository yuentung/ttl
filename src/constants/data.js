import Logo from './images/logo.png';
import DarkLogo from './images/logo_dark.png';
import HomeBanner1 from './images/banner_home1.png';
import HomeBanner2 from './images/banner_home2.png';
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
import AboutBanner from './images/banner_about.png';
import Feature1 from './images/feature1.png';
import Feature2 from './images/feature2.png';
import Feature3 from './images/feature3.png';
import AboutIntro1 from './images/about_intro1.png';
import AboutIntro2 from './images/about_intro2.png';
import ContactBanner from './images/banner_contact.png';
import CasesBanner from './images/banner_cases.png';
import Case1 from './images/case1.png';
import Agent from './images/agent.png';

const data = {
  home: {
    navbar: {
      logo: Logo,
      darkLogo: DarkLogo,
      navList: [
        {
          text: '公司資訊',
          link: '/about',
        },
        {
          text: '機器設備銷售',
          link: '/list/equipment',
          subNavList: [
            {
              text: '複層玻璃生產線',
              link: '/list/laminated_glass_production_line',
              lastNavList: [
                {
                  text: '接角',
                  link: '/view/1',
                },
                {
                  text: '分子篩',
                  link: '/view/2',
                },
                {
                  text: '超級格條',
                  link: '/view/3',
                },
                {
                  text: '塑膠角料',
                  link: '/view/4',
                },
                {
                  text: '中空玻璃專用鋁條',
                  link: '/view/5',
                },
                {
                  text: '除膜機專用除膜輪',
                  link: '/view/6',
                },
                {
                  text: '熱熔丁基膠',
                  link: '/view/7',
                },
                {
                  text: '雙組份硅酮密封膠',
                  link: '/view/8',
                },
                {
                  text: '雙組份硅酮結構膠',
                  link: '/view/9',
                },
              ],
            },
            {
              text: '玻璃切割機',
              link: '/list/window_cutting_machine',
            },
            {
              text: '熱熔膠機',
              link: '/list/hot_glue_machine',
              lastNavList: [
                {
                  text: '芬熱熔膠',
                  link: '/view/10',
                },
                {
                  text: '南寶熱熔膠',
                  link: '/view/11',
                },
              ],
            },
          ],
        },
        {
          text: 'VC 威斯卡門窗',
          link: '/list/vc',
          subNavList: [
            {
              text: '門窗產品',
              link: '/list/doors_and_window',
              lastNavList: [
                {
                  text: '推開窗',
                  link: '/view/12',
                },
                {
                  text: '橫拉窗',
                  link: '/view/13',
                },
                {
                  text: '氣密門',
                  link: '/view/14',
                },
                {
                  text: '塑膠接角',
                  link: '/view/15',
                },
                {
                  text: '中空玻璃專用鋁條',
                  link: '/view/16',
                },
                {
                  text: '除膜機專用除膜輪',
                  link: '/view/17',
                },
                {
                  text: '熱熔丁基膠',
                  link: '/view/1',
                },
                {
                  text: '雙組份硅酮密封膠',
                  link: '/view/2',
                },
                {
                  text: '雙組份硅酮結構膠',
                  link: '/view/3',
                },
              ],
            },
            {
              text: '消耗性產品',
              link: '/list/consumable_products',
              lastNavList: [
                {
                  text: '芬熱熔膠',
                  link: '/view/4',
                },
                {
                  text: '南寶熱熔膠',
                  link: '/view/5',
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
          link: '/contact',
        },
      ],
    },
    swiper: [
      {
        image: HomeBanner1,
        title: '全自動<br />中空玻璃生產線',
        subTitle: 'INSULATING GLASS PRODUCTION',
      },
      {
        image: HomeBanner2,
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
        {
          image: TTLProduct1,
          mainCategory: 'equipment',
          subCategory: 'window_cutting_machine',
          title: '(equipment)window_cutting_machine',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: TTLProduct2,
          mainCategory: 'equipment',
          subCategory: 'laminated_glass_production_line',
          title: '(equipment)laminated_glass_production_line',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: TTLProduct3,
          mainCategory: 'equipment',
          subCategory: 'hot_glue_machine',
          title: '(equipment)hot_glue_machine',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: TTLProduct4,
          mainCategory: 'equipment',
          subCategory: 'window_cutting_machine',
          title: '(equipment)window_cutting_machine2',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: TTLProduct1,
          mainCategory: 'equipment',
          subCategory: 'window_cutting_machine',
          title: '(equipment)window_cutting_machine3',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: TTLProduct2,
          mainCategory: 'equipment',
          subCategory: 'laminated_glass_production_line',
          title: '(equipment)laminated_glass_production_line2',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: TTLProduct3,
          mainCategory: 'equipment',
          subCategory: 'hot_glue_machine',
          title: '(equipment)hot_glue_machine2',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: TTLProduct4,
          mainCategory: 'equipment',
          subCategory: 'window_cutting_machine',
          title: '(equipment)window_cutting_machine4',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: TTLProduct4,
          mainCategory: 'equipment',
          subCategory: 'window_cutting_machine',
          title: '(equipment)window_cutting_machine5',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: VCProduct1,
          mainCategory: 'vc',
          subCategory: 'doors_and_window',
          title: '(vc)doors_and_window',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: VCProduct2,
          mainCategory: 'vc',
          subCategory: 'doors_and_window',
          title: '(vc)doors_and_window2',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: VCProduct3,
          mainCategory: 'vc',
          subCategory: 'consumable_products',
          title: '(vc)consumable_products',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: VCProduct4,
          mainCategory: 'vc',
          subCategory: 'consumable_products',
          title: '(vc)consumable_products2',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: VCProduct1,
          mainCategory: 'vc',
          subCategory: 'doors_and_window',
          title: '(vc)doors_and_window3',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: VCProduct2,
          mainCategory: 'vc',
          subCategory: 'doors_and_window',
          title: '(vc)doors_and_window4',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: VCProduct3,
          mainCategory: 'vc',
          subCategory: 'consumable_products',
          title: '(vc)consumable_products3',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
        {
          image: VCProduct4,
          mainCategory: 'vc',
          subCategory: 'consumable_products',
          title: '(vc)consumable_products4',
          description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
        },
      ],
    },
    footer: {
      image: HomeBanner1,
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
          link: '/about',
        },
        {
          text: '工程案例',
          link: '/case',
        },
        {
          text: '機械設備銷售',
          link: '/list/equipment',
          subNavList: [
            {
              text: '複層玻璃生產線',
              link: '/list/laminated_glass_production_line',
            },
            {
              text: '玻璃切割機',
              link: '/list/window_cutting_machine',
            },
            {
              text: '熱熔膠機',
              link: '/list/hot_glue_machine',
            },
          ],
        },
        {
          text: 'VC 威斯卡門窗',
          link: '/list/vc',
          subNavList: [
            {
              text: '門窗產品',
              link: '/list/doors_and_window',
            },
            {
              text: '消耗性產品',
              link: '/list/consumable_products',
            },
          ],
        },
      ],
    }
  },
  about: {
    banner: {
      image: AboutBanner,
      title: 'ABOUT US',
      subTitle: '關於我們',
    },
    content: {
      title: '十年施工經驗<br />技術材料始終講究',
      description: '十年施工經驗，技術材料始終講究！材質耐力雙檢驗保險，陽台、樓梯、天井皆能施作，歡迎免費諮詢。風吹日曬依然堅固，安心十年保固！眾多口碑業界最高規格，材質拉力皆定期送驗，保護家人安危首選。施工人員定期教育安全訓練。',
      featureList: [
        {
          image: Feature1,
          description: '價格透明<br />口碑推薦',
        },
        {
          image: Feature2,
          description: '研發到施工採<br />一貫作業程序',
        },
        {
          image: Feature3,
          description: '嚴謹的態度<br />品質的堅持',
        },
      ],
      introList: [
        {
          image: AboutIntro1,
          title: '專業熱枕‧服務至上',
          subTitle: 'FEATURE O1',
          description: '我們以「客戶滿意、專業用心」為企業經營理念，堅持嚴選防墜網材質用料、積極培訓專業施工團隊。<br />此外，本公司為業界首獲國家品質保證金像獎的商家，並獨創「全省免費到府丈量估價」及「客戶ERP系統」，用心維護用戶的基本權益，故多年來累積豐碩成果，廣受各界客戶好評。',
        },
        {
          image: AboutIntro2,
          title: '專業、品質、用心',
          subTitle: 'FEATURE O2',
          description: '提倡兒童居家安全，及各式防墜系統推廣。<br />主要銷售隱形鐵窗材料零件買賣及 OEM 代工，各類大型建案防墜工程規劃，大樓隱形防墜網，防墜窗施工安裝，特殊案件規劃，為全國最大隱形防墜網的領導廠商。<br />為了進一步服務客戶與消費者，太子龍逐漸轉型為隱形鐵窗及工程防護網的服務業者，提供各類隱形鐵窗專業施工服務與建材批發，並陸續於全國各地成立分公司以快速滿足顧客需求。',
        },
      ],
    },
  },
  contact: {
    banner: {
      image: ContactBanner,
      title: 'CONTACT US',
      subTitle: '聯絡我們',
    },
    content: {
      description: '我們會在一週內由專人提供您專業的回覆，或是您可以從下方的管道聯繫我們。',
    },
    description: '我們會在一週內由專人提供您專業的回覆，或是您可以從下方的管道聯繫我們。',
  },
  case: {
    banner: {
      image: CasesBanner,
      title: 'CASES',
      subTitle: '工程案例',
    },
  },
  categoryList: {
    all: {
      text: '全部產品',
    },
    equipment: {
      text: '機器設備銷售',
      subCategoryList: {
        laminated_glass_production_line: {
          text: '複層玻璃生產線',
        },
        window_cutting_machine: {
          text: '玻璃切割機',
        },
        hot_glue_machine: {
          text: '熱熔膠機',
        },
      },
    },
    vc: {
      text: 'VC 威斯卡門窗',
      subCategoryList: {
        doors_and_window: {
          text: '門窗產品',
        },
        consumable_products: {
          text: '消耗性產品',
        },
      },
    },
  },
  productList: [
    {
      id: 1,
      image: TTLProduct1,
      mainCategory: 'equipment',
      subCategory: 'window_cutting_machine',
      title: '(equipment)window_cutting_machine',
      description: 'WORX 品牌主要以推出園藝/DIY電動工具產品<br/>銅製槍嘴/陶瓷熱敏原件/高強度工程塑料機身<br/>− 無線簡單安全操作，15秒快速出膠 (膠合溫度160度)<br/>− 35分鐘使用續航力(充飽電狀態)<br/>− 具 加熱指示燈(紅/綠燈) 及 充電指示燈(紅/綠燈)<br/>− 4分鐘自動關機，節能省電，避免過度熔膠<br/>− 手柄底部金屬支撐腳，站立平穩，取放自如<br/>− 人體工學手柄設計，握持舒適，不易疲勞<br/>− 內附 充電器(100~240V 50/60Hz)x1、熱熔膠條x2(條) + 鐵製專用收納盒x1',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
      youTubeEmbedId: '35okcZrvO_Q',
      agent: Agent,
    },
    {
      id: 2,
      image: TTLProduct2,
      mainCategory: 'equipment',
      subCategory: 'laminated_glass_production_line',
      title: '(equipment)laminated_glass_production_line',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 3,
      image: TTLProduct3,
      mainCategory: 'equipment',
      subCategory: 'hot_glue_machine',
      title: '(equipment)hot_glue_machine',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 4,
      image: TTLProduct4,
      mainCategory: 'equipment',
      subCategory: 'window_cutting_machine',
      title: '(equipment)window_cutting_machine2',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 5,
      image: TTLProduct1,
      mainCategory: 'equipment',
      subCategory: 'window_cutting_machine',
      title: '(equipment)window_cutting_machine3',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 6,
      image: TTLProduct2,
      mainCategory: 'equipment',
      subCategory: 'laminated_glass_production_line',
      title: '(equipment)laminated_glass_production_line2',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 7,
      image: TTLProduct3,
      mainCategory: 'equipment',
      subCategory: 'hot_glue_machine',
      title: '(equipment)hot_glue_machine2',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 8,
      image: TTLProduct4,
      mainCategory: 'equipment',
      subCategory: 'window_cutting_machine',
      title: '(equipment)window_cutting_machine4',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 9,
      image: TTLProduct4,
      mainCategory: 'equipment',
      subCategory: 'window_cutting_machine',
      title: '(equipment)window_cutting_machine5',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 10,
      image: VCProduct1,
      mainCategory: 'vc',
      subCategory: 'doors_and_window',
      title: '(vc)doors_and_window',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 11,
      image: VCProduct2,
      mainCategory: 'vc',
      subCategory: 'doors_and_window',
      title: '(vc)doors_and_window2',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 12,
      image: VCProduct3,
      mainCategory: 'vc',
      subCategory: 'consumable_products',
      title: '(vc)consumable_products',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 13,
      image: VCProduct4,
      mainCategory: 'vc',
      subCategory: 'consumable_products',
      title: '(vc)consumable_products2',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 14,
      image: VCProduct1,
      mainCategory: 'vc',
      subCategory: 'doors_and_window',
      title: '(vc)doors_and_window3',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 15,
      image: VCProduct2,
      mainCategory: 'vc',
      subCategory: 'doors_and_window',
      title: '(vc)doors_and_window4',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 16,
      image: VCProduct3,
      mainCategory: 'vc',
      subCategory: 'consumable_products',
      title: '(vc)consumable_products3',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
    {
      id: 17,
      image: VCProduct4,
      mainCategory: 'vc',
      subCategory: 'consumable_products',
      title: '(vc)consumable_products4',
      description: '在全自動模式下，只需輕輕按下“一鍵取片”按鍵，聯動整條切割線。',
      imageList: [
        TTLProduct1,
        TTLProduct2,
        TTLProduct3,
        TTLProduct4,
        VCProduct1,
      ],
    },
  ],
  caseList: [
    {
      id: 1,
      mainCategory: 'equipment',
      image: Case1,
      title: '台南清水漾',
      description: '位於台南市區的台南清水漾 Villa 旅館，在當地擁有極高的知名度，本次清水漾Villa特別採用了古銅艷消色正新完美氣密門產品，不但是從室內看出去搭配衛浴或客廳都能呈現出超高的質感，從戶外泳池看進室內，更是美感爆表',
    },
    {
      id: 2,
      mainCategory: 'equipment',
      image: Case1,
      title: '桃園紅點設計宅',
      description: '由於屋主喜歡大量的採光，所以將在一般人家中本來為牆面之處設計了大量的固定窗。但由於這些牆面並沒有進出的需求，因此透過大面積的固定窗，以及推開窗不對稱的搭配方式，去營造出不同的線條感，同時也可以兼具日常通風的需求。',
    },
    {
      id: 3,
      mainCategory: 'equipment',
      image: Case1,
      title: '宜蘭古典安農莊園民宿',
      description: '位於台南市區的台南清水漾 Villa 旅館，在當地擁有極高的知名度，本次清水漾Villa特別採用了古銅艷消色正新完美氣密門產品，不但是從室內看出去搭配衛浴或客廳都能呈現出超高的質感，從戶外泳池看進室內，更是美感爆表',
    },
    {
      id: 4,
      mainCategory: 'equipment',
      image: Case1,
      title: '竹山精品宅',
      description: '由於屋主喜歡大量的採光，所以將在一般人家中本來為牆面之處設計了大量的固定窗。但由於這些牆面並沒有進出的需求，因此透過大面積的固定窗，以及推開窗不對稱的搭配方式，去營造出不同的線條感，同時也可以兼具日常通風的需求。',
    },
    {
      id: 5,
      mainCategory: 'equipment',
      image: Case1,
      title: '苑裡南窩綠丘',
      description: '位於台南市區的台南清水漾 Villa 旅館，在當地擁有極高的知名度，本次清水漾Villa特別採用了古銅艷消色正新完美氣密門產品，不但是從室內看出去搭配衛浴或客廳都能呈現出超高的質感，從戶外泳池看進室內，更是美感爆表',
    },
    {
      id: 6,
      mainCategory: 'equipment',
      image: Case1,
      title: '苗栗水樣西湖民宿',
      description: '由於屋主喜歡大量的採光，所以將在一般人家中本來為牆面之處設計了大量的固定窗。但由於這些牆面並沒有進出的需求，因此透過大面積的固定窗，以及推開窗不對稱的搭配方式，去營造出不同的線條感，同時也可以兼具日常通風的需求。',
    },
    {
      id: 7,
      mainCategory: 'equipment',
      image: Case1,
      title: '台南清水漾',
      description: '位於台南市區的台南清水漾 Villa 旅館，在當地擁有極高的知名度，本次清水漾Villa特別採用了古銅艷消色正新完美氣密門產品，不但是從室內看出去搭配衛浴或客廳都能呈現出超高的質感，從戶外泳池看進室內，更是美感爆表',
    },
    {
      id: 8,
      mainCategory: 'vc',
      image: Case1,
      title: '桃園紅點設計宅',
      description: '由於屋主喜歡大量的採光，所以將在一般人家中本來為牆面之處設計了大量的固定窗。但由於這些牆面並沒有進出的需求，因此透過大面積的固定窗，以及推開窗不對稱的搭配方式，去營造出不同的線條感，同時也可以兼具日常通風的需求。',
    },
  ],
};

export default data;

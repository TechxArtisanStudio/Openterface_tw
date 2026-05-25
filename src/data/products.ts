import { docsPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface KeyMod Series',
    slogan: '將手機變為智能鍵盤',
    subtitle: '為科技愛好者、專業人士和遊戲玩家設計的可編程鍵盤與鼠標控制方案。',
    description:
      '一款緊湊型可編程 USB + Bluetooth HID 模擬器，可將您的手機轉化為便攜式鍵盤和觸控板。基於 Openterface Mini-KVM 成熟的 HID 核心打造 —— 即插即用，100% 開源。',
    seoDescription:
      'KeyMod Series 將您的手機變為便攜式鍵盤和觸控板。支持 USB + Bluetooth HID 模擬，開源設計，非常適合自助終端維護和工作流快捷鍵。',
    keywords: 'KeyMod, HID emulator, phone keyboard, Bluetooth keyboard, USB keyboard, open source',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: '立即支持',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      '為自助終端或電視設置攜帶全尺寸鍵盤非常不便',
      '移動辦公中需要可編程宏來簡化工作流',
      '許多 HID 工具不開源，自定義程度有限',
    ],
    solutions: [
      '將手機作為便攜式鍵盤和觸控板使用',
      '在緊湊設備中集成 USB 和 Bluetooth HID',
      '100% 開源，並由 Openterface 應用提供支持',
    ],
    hwFeatures: [
      { title: '緊湊外形', description: '方便放入口袋，適合現場工作和旅行。' },
      { title: 'USB + Bluetooth', description: '雙重連接方式，確保最佳設備兼容性。' },
      { title: '開源硬件', description: '基於成熟的 Openterface HID 核心，設計透明可靠。' },
    ],
    swFeatures: [
      { title: 'KeyMod 應用', description: '通過手機配置宏、佈局和手柄配置文件。' },
      { title: '跨平臺', description: '通過 Openterface 應用，支持 Android、iPadOS 和桌面端主機。' },
      { title: '開源', description: '全棧代碼託管於 GitHub，歡迎社區貢獻。' },
    ],
    specs: [
      { label: '連接方式', value: 'USB-C + Bluetooth LE' },
      { label: 'HID 模式', value: 'Keyboard, mouse, gamepad' },
      { label: '許可協議', value: 'Open source hardware & software' },
    ],
    useCases: ['智能電視與自助終端輸入', '移動工作流宏', '遊戲與輔助功能設置'],
    docLinks: [
      { label: '功能特性', href: docsPath('/product/keymod/features/') },
      { label: '開箱清單', href: docsPath('/product/keymod/whats-in-the-box/') },
      { label: '連接指南', href: docsPath('/product/keymod/how-to-connect/') },
      { label: '常見問題', href: docsPath('/product/keymod/faq/') },
      { label: '下載 KeyMod 應用', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface KVM-GO Series',
    slogan: '能掛在鑰匙扣上的超緊湊 KVM',
    subtitle: '應對技術關鍵時刻 —— 即插即用，隨心掌控。',
    description:
      '集成視頻接口（HDMI、DisplayPort 或 VGA）的新一代 KVM-over-USB 解決方案。超緊湊鑰匙扣大小，專為數據中心和機房的快速 IT 運維而設計。',
    seoDescription:
      '使用 Openterface KVM-Go 掌控無頭計算機。內置 HDMI/DP/VGA，鑰匙扣大小，專為 IT 專業人士打造的 4K KVM-over-USB。',
    keywords: 'KVM-Go, KVM over USB, ultra-compact KVM, keychain KVM, 4K KVM, headless control',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: '立即預訂',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    painPoints: [
      '傳統 KVM 設備笨重且需要額外的視頻線纜',
      '現場緊急訪問服務器需要便攜式工具',
      '在無網絡訪問的情況下，對無頭設備進行故障排除效率低下',
    ],
    solutions: [
      '內置視頻接口，告別繁雜線纜',
      '鑰匙扣外形，隨時隨地觸手可及',
      'KVM-over-USB —— 受控端無需網絡或驅動程序',
    ],
    hwFeatures: [
      { title: '內置視頻接口', description: '提供 HDMI、DisplayPort 或 VGA 型號，無需外部線纜。' },
      { title: '鑰匙扣尺寸', description: 'Openterface 系列中體積最小的 KVM-over-USB 設備。' },
      { title: '4K 支持', description: '為現代顯示器提供高分辨率視頻採集。' },
    ],
    swFeatures: [
      { title: 'Openterface Qt 應用', description: '跨平臺控制端，支持 Windows、macOS 和 Linux。' },
      { title: 'MicroSD 切換', description: '可切換存儲空間，用於存放便攜式系統鏡像和工具。' },
      { title: '開源技術棧', description: '由社區驅動的固件和主機端應用。' },
    ],
    specs: [
      { label: '視頻', value: 'HDMI / DP / VGA (model dependent)' },
      { label: '分辨率', value: 'Up to 4K' },
      { label: '連接方式', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['數據中心巡檢', '無頭設備設置', '現場 IT 維護與個人實驗室搶修'],
    docLinks: [
      { label: '功能特性', href: docsPath('/product/kvm-go/features/') },
      { label: 'Beta 版快速入門', href: docsPath('/product/kvm-go/beta-quick-start/') },
      { label: '連接指南', href: docsPath('/product/kvm-go/how-to-connect/') },
      { label: '常見問題', href: docsPath('/product/kvm-go/faq/') },
      { label: '下載應用', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: '將筆記本電腦變為 KVM 控制台',
    subtitle: '簡化您的科技生活。',
    description:
      '即插即用的 KVM-over-USB 解決方案。通過 USB 和 HDMI，在筆記本電腦上直接控制旁邊的無頭計算機 —— 無需額外的外設或網絡。',
    seoDescription:
      'Openterface Mini-KVM：支持 HDMI 的即插即用 KVM-over-USB。無需網絡，即可在筆記本電腦上控制無頭計算機。',
    keywords: 'Mini-KVM, KVM over USB, headless control, HDMI KVM, plug and play KVM',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: '立即下單',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    painPoints: [
      '每次維修服務器都要搬運顯示器和鍵盤非常不便',
      '網絡 KVM 需要複雜的配置和穩定的連接',
      'IT 專業人士日常需要一款可靠的便攜式 KVM',
    ],
    solutions: [
      '將現有的筆記本電腦作為 KVM 控制台',
      '在緊湊設備中集成 HDMI 採集和 USB HID',
      '自 2024 年以來，已獲得 5000 多名社區成員的認可',
    ],
    hwFeatures: [
      { title: 'HDMI 採集', description: '將受控端的完整視頻傳輸至您的主機筆記本電腦。' },
      { title: 'USB 切換', description: '在主機和受控端之間切換 USB 設備。' },
      { title: '擴展引腳', description: '提供硬件 hack 和自定義集成選項。' },
    ],
    swFeatures: [
      { title: 'Qt / macOS / Android 應用', description: '適配主流平臺的高性能原生應用。' },
      { title: '開源', description: '完全開放的硬件和軟件生態系統。' },
      { title: '活躍社區', description: '通過 Discord 和 GitHub 提供支持，並定期更新固件。' },
    ],
    specs: [
      { label: '視頻輸入', value: 'HDMI' },
      { label: 'USB 接口', value: 'USB-C with switchable port' },
      { label: '狀態', value: 'Shipping — Crowd Supply' },
    ],
    useCases: ['個人實驗室管理', '開發工作站並排控制', 'IT 工作臺故障排除'],
    docLinks: [
      { label: '功能特性', href: docsPath('/product/minikvm/features/') },
      { label: 'USB 切換', href: docsPath('/product/minikvm/usb-switch/') },
      { label: '技術支持', href: docsPath('/product/minikvm/support/') },
      { label: '常見問題', href: docsPath('/product/minikvm/faq/') },
      { label: '下載應用', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'uConsole KVM Extension',
    slogan: '為您的 uConsole 注入 KVM 能量',
    subtitle: '將便攜式 uConsole 轉化為功能齊全的 KVM 終端。',
    description:
      '為 Clockwork uConsole 增加 KVM-over-USB 功能的硬件擴展。內置鍵盤 and 顯示屏，是便攜式 IT 工作的理想選擇。',
    seoDescription:
      'uConsole KVM Extension 為 Clockwork uConsole 便攜式計算機添加了 KVM-over-USB 功能。',
    keywords: 'uConsole, KVM extension, portable KVM, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: '瞭解更多',
    buyHref: docsPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      '便攜式控制台缺乏用於控制無頭受控端的集成 KVM 功能',
      '現場技術人員希望一機多用',
    ],
    solutions: [
      '適配 uConsole 外形的原生擴展板',
      '在便攜設備上運行完整的 Openterface KVM 技術棧',
    ],
    hwFeatures: [
      { title: 'uConsole 原生設計', description: '專為 Clockwork uConsole 量身打造。' },
      { title: '緊湊型 PCB', description: '可安裝在 uConsole 機殼內部。' },
    ],
    swFeatures: [
      { title: 'Openterface 應用', description: '使用與 Mini-KVM 和 KVM-GO 相同且值得信賴的軟件。' },
      { title: '安裝指南', description: '提供詳盡的硬件和軟件安裝文檔。' },
    ],
    specs: [
      { label: '兼容性', value: 'Clockwork uConsole' },
      { label: '認證', value: 'OSHWA certified' },
    ],
    useCases: ['便攜式數據中心工具', '移動創客與個人實驗室'],
    docLinks: [
      { label: '硬件安裝', href: docsPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: '軟件設置', href: docsPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: '連接指南', href: docsPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: '常見問題', href: docsPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Openterface Accessories',
    slogan: '完善您的裝備',
    subtitle: '為專業人士打造的高品質線纜、適配器和工具包。',
    description:
      '精選必備配件，包括視頻適配器、高速線纜和存儲解決方案。選用 TxA 商店的高品質裝備，提升您的 Openterface 使用體驗。',
    seoDescription: 'Openterface 配件 —— 線纜、適配器、工具包和視頻接口。',
    keywords: 'KVM accessories, HDMI cable, USB-C cable, toolkit bag',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: '立即購買',
    buyHref: siteConfig.links.shop,
    painPoints: ['現場缺少合適的線纜會延誤每一次維修'],
    solutions: ['經過 Openterface 產品測試的精選配件'],
    hwFeatures: [
      { title: '視頻適配器', description: 'HDMI、VGA 及各種特殊接口。' },
      { title: '高速線纜', description: '專為 KVM 工作負載打造的 USB-C 和 Type-A 線纜。' },
      { title: '工具包', description: '整潔收納您的全套 Openterface 設備。' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['現場裝備整理', '視頻格式轉換', 'IT 工具包備用線纜'],
    docLinks: [
      { label: '所有規格', href: docsPath('/product/accessories/') },
      { label: 'TxA 商店', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);

import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod Series",
  slogan: "將手機變為智能鍵盤",
  subtitle: "為科技愛好者、專業人士和遊戲玩家設計的可編程鍵盤與鼠標控制方案。",
  status: 'pre-launch',
  description:
    "一款緊湊型可編程 USB + Bluetooth HID 模擬器，可將您的手機轉化為便攜式鍵盤和觸控板。基於 Openterface Mini-KVM 成熟的 HID 核心打造 —— 即插即用，100% 開源。",
  seoDescription:
    "KeyMod Series 將您的手機變為便攜式鍵盤和觸控板。支持 USB + Bluetooth HID 模擬，開源設計，非常適合自助終端維護和工作流快捷鍵。",
  keywords:
    "KeyMod, HID emulator, phone keyboard, Bluetooth keyboard, USB keyboard, open source",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "立即支持",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "為自助終端或電視設置攜帶全尺寸鍵盤非常不便",
    "移動辦公中需要可編程宏來簡化工作流",
    "許多 HID 工具不開源，自定義程度有限",
  ],
  solutions: [
    "將手機作為便攜式鍵盤和觸控板使用",
    "在緊湊設備中集成 USB 和 Bluetooth HID",
    "100% 開源，並由 Openterface 應用提供支持",
  ],
  hwFeatures: [
    { title: "緊湊外形", description: "方便放入口袋，適合現場工作和旅行。" },
    { title: "USB + Bluetooth", description: "雙重連接方式，確保最佳設備兼容性。" },
    { title: "開源硬件", description: "基於成熟的 Openterface HID 核心，設計透明可靠。" },
  ],
  swFeatures: [
    { title: "KeyMod 應用", description: "通過手機配置宏、佈局和手柄配置文件。" },
    { title: "跨平臺", description: "通過 Openterface 應用，支持 Android、iPadOS 和桌面端主機。" },
    { title: "開源", description: "全棧代碼託管於 GitHub，歡迎社區貢獻。" },
  ],
  specs: [
    { label: "連接方式", value: "USB-C + Bluetooth LE" },
    { label: "HID 模式", value: "Keyboard, mouse, gamepad" },
    { label: "許可協議", value: "Open source hardware & software" },
  ],
  useCases: [
    "智能電視與自助終端輸入",
    "移動工作流宏",
    "遊戲與輔助功能設置",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "功能特性", href: docsPath("/product/keymod/features/") },
    { label: "開箱清單", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "連接指南", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "常見問題", href: docsPath("/product/keymod/faq/") },
    { label: "下載 KeyMod 應用", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};

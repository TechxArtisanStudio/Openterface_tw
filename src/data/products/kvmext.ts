import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "uConsole KVM Extension",
  slogan: "為您的 uConsole 注入 KVM 能量",
  subtitle: "將便攜式 uConsole 轉化為功能齊全的 KVM 終端。",
  status: 'oshwa',
  description:
    "為 Clockwork uConsole 增加 KVM-over-USB 功能的硬件擴展。內置鍵盤 and 顯示屏，是便攜式 IT 工作的理想選擇。",
  seoDescription:
    "uConsole KVM Extension 為 Clockwork uConsole 便攜式計算機添加了 KVM-over-USB 功能。",
  keywords:
    "uConsole, KVM extension, portable KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "瞭解更多",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "便攜式控制台缺乏用於控制無頭受控端的集成 KVM 功能",
    "現場技術人員希望一機多用",
  ],
  solutions: [
    "適配 uConsole 外形的原生擴展板",
    "在便攜設備上運行完整的 Openterface KVM 技術棧",
  ],
  hwFeatures: [
    { title: "uConsole 原生設計", description: "專為 Clockwork uConsole 量身打造。" },
    { title: "緊湊型 PCB", description: "可安裝在 uConsole 機殼內部。" },
  ],
  swFeatures: [
    { title: "Openterface 應用", description: "使用與 Mini-KVM 和 KVM-GO 相同且值得信賴的軟件。" },
    { title: "安裝指南", description: "提供詳盡的硬件和軟件安裝文檔。" },
  ],
  specs: [
    { label: "兼容性", value: "Clockwork uConsole" },
    { label: "認證", value: "OSHWA certified" },
  ],
  useCases: [
    "便攜式數據中心工具",
    "移動創客與個人實驗室",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "硬件安裝", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "軟件設置", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "連接指南", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "常見問題", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};

import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO Series",
  slogan: "能掛在鑰匙扣上的超緊湊 KVM",
  subtitle: "應對技術關鍵時刻 —— 即插即用，隨心掌控。",
  status: 'pre-order',
  description:
    "集成視頻接口（HDMI、DisplayPort 或 VGA）的新一代 KVM-over-USB 解決方案。超緊湊鑰匙扣大小，專為數據中心和機房的快速 IT 運維而設計。",
  seoDescription:
    "使用 Openterface KVM-Go 掌控無頭計算機。內置 HDMI/DP/VGA，鑰匙扣大小，專為 IT 專業人士打造的 4K KVM-over-USB。",
  keywords:
    "KVM-Go, KVM over USB, ultra-compact KVM, keychain KVM, 4K KVM, headless control",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "立即預訂",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "Funded on Dec 30, 2025", backers: "478" },
  painPoints: [
    "傳統 KVM 設備笨重且需要額外的視頻線纜",
    "現場緊急訪問服務器需要便攜式工具",
    "在無網絡訪問的情況下，對無頭設備進行故障排除效率低下",
  ],
  solutions: [
    "內置視頻接口，告別繁雜線纜",
    "鑰匙扣外形，隨時隨地觸手可及",
    "KVM-over-USB —— 受控端無需網絡或驅動程序",
  ],
  hwFeatures: [
    { title: "內置視頻接口", description: "提供 HDMI、DisplayPort 或 VGA 型號，無需外部線纜。" },
    { title: "鑰匙扣尺寸", description: "Openterface 系列中體積最小的 KVM-over-USB 設備。" },
    { title: "4K 支持", description: "為現代顯示器提供高分辨率視頻採集。" },
  ],
  swFeatures: [
    { title: "Openterface Qt 應用", description: "跨平臺控制端，支持 Windows、macOS 和 Linux。" },
    { title: "MicroSD 切換", description: "可切換存儲空間，用於存放便攜式系統鏡像和工具。" },
    { title: "開源技術棧", description: "由社區驅動的固件和主機端應用。" },
  ],
  specs: [
    { label: "視頻", value: "HDMI / DP / VGA (model dependent)" },
    { label: "分辨率", value: "Up to 4K" },
    { label: "連接方式", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "數據中心巡檢",
    "無頭設備設置",
    "現場 IT 維護與個人實驗室搶修",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "功能特性", href: docsPath("/product/kvm-go/features/") },
    { label: "Beta 版快速入門", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "連接指南", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "常見問題", href: docsPath("/product/kvm-go/faq/") },
    { label: "下載應用", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};

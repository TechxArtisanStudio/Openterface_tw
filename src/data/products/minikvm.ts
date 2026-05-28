import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "將筆記本電腦變為 KVM 控制台",
  subtitle: "簡化您的科技生活。",
  status: 'shipping',
  description:
    "即插即用的 KVM-over-USB 解決方案。通過 USB 和 HDMI，在筆記本電腦上直接控制旁邊的無頭計算機 —— 無需額外的外設或網絡。",
  seoDescription:
    "Openterface Mini-KVM：支持 HDMI 的即插即用 KVM-over-USB。無需網絡，即可在筆記本電腦上控制無頭計算機。",
  keywords:
    "Mini-KVM, KVM over USB, headless control, HDMI KVM, plug and play KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "立即下單",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "Funded on Jun 13, 2024", backers: "3,775" },
  painPoints: [
    "每次維修服務器都要搬運顯示器和鍵盤非常不便",
    "網絡 KVM 需要複雜的配置和穩定的連接",
    "IT 專業人士日常需要一款可靠的便攜式 KVM",
  ],
  solutions: [
    "將現有的筆記本電腦作為 KVM 控制台",
    "在緊湊設備中集成 HDMI 採集和 USB HID",
    "自 2024 年以來，已獲得 5000 多名社區成員的認可",
  ],
  hwFeatures: [
    { title: "HDMI 採集", description: "將受控端的完整視頻傳輸至您的主機筆記本電腦。" },
    { title: "USB 切換", description: "在主機和受控端之間切換 USB 設備。" },
    { title: "擴展引腳", description: "提供硬件 hack 和自定義集成選項。" },
  ],
  swFeatures: [
    { title: "Qt / macOS / Android 應用", description: "適配主流平臺的高性能原生應用。" },
    { title: "開源", description: "完全開放的硬件和軟件生態系統。" },
    { title: "活躍社區", description: "通過 Discord 和 GitHub 提供支持，並定期更新固件。" },
  ],
  specs: [
    { label: "視頻輸入", value: "HDMI" },
    { label: "USB 接口", value: "USB-C with switchable port" },
    { label: "狀態", value: "Shipping — Crowd Supply" },
  ],
  useCases: [
    "個人實驗室管理",
    "開發工作站並排控制",
    "IT 工作臺故障排除",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "功能特性", href: docsPath("/product/minikvm/features/") },
    { label: "USB 切換", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "技術支持", href: docsPath("/product/minikvm/support/") },
    { label: "常見問題", href: docsPath("/product/minikvm/faq/") },
    { label: "下載應用", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};

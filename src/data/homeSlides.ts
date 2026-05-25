import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: '將手機變為迷你鍵盤',
    description:
      '一款緊湊型 USB + Bluetooth HID 模擬器，可將您的手機轉化為便攜式鍵盤和觸控板。即插即用，100% 開源。非常適合自助終端、智能電視維護和工作流快捷鍵。',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: '立即支持', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: '查看產品', href: '/products/keymod/' },
    progressSmall: 'KeyMod 系列',
    progressLarge: '將手機變為迷你鍵盤',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: '能掛在鑰匙扣上的超緊湊 KVM',
    description:
      '專為掛在鑰匙扣上而設計，助您在關鍵時刻化解難題。這款新一代 KVM-over-USB 設備專為現場快速 IT 運維而生。',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: '立即預訂', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: '查看產品', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    progressSmall: 'KVM-GO 系列',
    progressLarge: '能掛在鑰匙扣上的超緊湊 KVM',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: '專為專業人士打造的緊湊型 KVM 方案',
    description:
      '一款緊湊、功能豐富且開源的 KVM-over-USB 解決方案，助您輕鬆應對即時 IT 任務和故障排查，簡化科技生活。',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: '立即下單', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: '查看產品', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    progressSmall: 'Mini-KVM 系列',
    progressLarge: '專為專業人士打造的緊湊型 KVM 方案',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: '選用高品質配件，完善您的裝備',
    description:
      '探索我們的必備配件系列，包括視頻適配器、高速線纜和存儲解決方案。選用專為專業人士設計的高品質配件，提升您的 Openterface 使用體驗。',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop Accessories',
    primaryCta: { label: '立即購買', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: '查看配件', href: '/products/accessories/' },
    progressSmall: 'TxA 商店',
    progressLarge: '選用高品質配件，完善您的裝備',
  },
];

export const homeSeo = {
  title: 'Openterface | 為 IT 專業人士打造的超緊湊 KVM 解決方案',
  description:
    '探索 Openterface —— 超緊湊 KVM-over-USB 解決方案，包括 KVM-GO 系列（鑰匙扣大小）、Mini-KVM 系列以及 uConsole KVM Extension。',
  keywords:
    'KVM-over-USB, KVM 切換器, 便攜式 KVM, USB KVM, 無頭服務器管理, KVM-GO, Mini-KVM, KeyMod',
};

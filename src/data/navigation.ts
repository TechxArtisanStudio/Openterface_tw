import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: '產品',
    href: '#',
    children: [
      { label: 'KeyMod 系列', href: '/products/keymod/' },
      { label: 'KVM-GO 系列', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: '配件', href: '/products/accessories/' },
    ],
  },
  { label: '視頻', href: '/videos/' },
  { label: '使用案例', href: '/use-cases/' },
  { label: '關於我們', href: '/about/' },
  { label: '文檔', href: docsPath(), external: true },
  { label: '資訊', href: newsPath(), external: true },
  { label: '商店', href: siteConfig.links.shop, external: true },
];

import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "產品",
    href: '/products/',
    children: [
      { label: "全部產品", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "配件", href: '/accessories/' },
    ],
  },
  {
    label: "應用",
    href: '/app/',
    children: [
      { label: "全部應用", href: '/app/' },
      { label: "KVM 控制", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "媒體", href: '/videos/' },
  { label: "關於我們", href: '/about/' },
  { label: "文件", href: docsPath(), external: true },
  { label: "新聞", href: newsPath(), external: true },
  { label: "商店", href: siteConfig.links.shop, external: true },
];

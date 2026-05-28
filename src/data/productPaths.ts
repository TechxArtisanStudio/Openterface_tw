/** Flat marketing URLs from slug-map SSOT (legacy nested slugs → short paths). */
export const PRODUCT_FLAT_PATHS: Record<string, string> = {
  keymod: '/keymod/',
  'kvm-go': '/kvmgo/',
  minikvm: '/minikvm/',
  'uconsole-kvm-extension': '/kvmext/',
  accessories: '/accessories/',
};

export const productsHubOrder = [
  'keymod',
  'kvm-go',
  'minikvm',
  'uconsole-kvm-extension',
  'accessories',
] as const;

export function productFlatPath(slug: string): string {
  return PRODUCT_FLAT_PATHS[slug] ?? `/products/${slug}/`;
}

export const productsHubSeo = {
  title: '產品',
  description:
    '面向 IT 專業人士、開發者和創客的超緊湊 KVM-over-USB 硬體與開源應用。',
  keywords: 'Openterface 產品, KeyMod, KVM-GO, Mini-KVM, KVM 擴展, 配件, KVM 應用',
};

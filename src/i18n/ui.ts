export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "產品指南、常見問題、教學和應用下載請前往 docs.openterface.com。",
    "homeMessage": "教學、常見問題、應用下載和產品指南請前往 docs.openterface.com。",
    "linkLabel": "開啟文件 ↗",
    "productMessage": "詳細規格、設定指南和常見問題請前往 docs.openterface.com。"
  },
  "homeSubscribe": {
    "kicker": "保持關注",
    "heading": "第一時間取得 KVM-GO、KeyMod 和 Mini-KVM 更新",
    "description": "產品發表、韌體更新和實用 IT 技巧 — 每月最多一封，無垃圾郵件，只有 Openterface 團隊的實用資訊。",
    "benefitCrowdfunding": "群眾募資和預購窗口的優先通知",
    "benefitGuides": "設定指南和應用程式發行說明",
    "benefitUnsubscribe": "隨時一鍵取消訂閱",
    "submitLabel": "訂閱更新",
    "namePlaceholder": "姓名（選填）",
    "emailPlaceholder": "電子郵件 *",
    "footnote": "每月最多一封郵件。隨時可取消訂閱。洽詢：info@openterface.com"
  }
};

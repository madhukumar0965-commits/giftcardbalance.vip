/**
 * WEBSITE CONFIGURATION
 * ====================================================
 * Change your website name, domain, branding, and metadata here.
 * Editing this single file updates the entire site automatically!
 */

export const siteConfig = {
  // 1. Primary Identity
  siteName: "Gift Card Balance",
  domain: "giftcardbalance.vip",
  siteUrl: "https://giftcardbalance.vip",
  brandInitial: "GCB",

  // 2. SEO & Head Metadata
  metaTitle: "GiftCardMall/MyGift | Official Website | Check Your Balance",
  metaDescription:
    "Independent GiftCardMall/MyGift balance guide. Learn how to safely check a gift card balance, review transactions, activate or register a card, and fix declined-card issues.",
  author: "Gift Card Spend",
  themeColor: "#17324d",
  lastReviewedDate: "September 28, 2026",
  schemaDateModified: "2026-09-28",

  // 3. Social / Open Graph & Twitter Cards
  ogTitle: "GiftCardMall/MyGift Balance Guide | Gift Card Spend",
  ogDescription:
    "A clear, independent guide to GiftCardMall/MyGift balance checks, card activation, registration, transactions, and declined-card troubleshooting.",
  twitterTitle: "GiftCardMall/MyGift Balance Guide",
  twitterDescription:
    "Independent help for GiftCardMall/MyGift balance, activation, registration, transactions, and card-use questions.",

  // 4. Navigation Links
  navLinks: [
    { label: "Balance", href: "#balance" },
    { label: "Activation", href: "#activation" },
    { label: "Declined card", href: "#declined" },
    { label: "FAQ", href: "#faq" }
  ]
};

export default siteConfig;
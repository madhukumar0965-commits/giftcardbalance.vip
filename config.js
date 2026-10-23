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
  brandInitial: "GC",

  // 2. SEO & Head Metadata
  metaTitle: "GiftCardMall/MyGift | View Balance | Official Gift Card Site",
  metaDescription:
    "Searching for giftcardmall/mygift or www.giftcardmall.com/mygift? Learn how to find your card's real balance-check service, read available funds, understand transactions.",
  author: "Gift Card Spend",
  themeColor: "#17324d",
  lastReviewedDate: "September 28, 2026",
  schemaDateModified: "2026-09-28",

  // 3. Social / Open Graph & Twitter Cards
  ogTitle: "GiftCardMall/Mygift | View Balance | Official Gift Card Site",
  ogDescription:
    "Searching for giftcardmall/mygift or www.giftcardmall.com/mygift? Learn how to find your card's real balance-check service, read available funds, understand transactions.",
  twitterTitle: "GiftCardMall/Mygift | View Balance | Official Gift Card Site",
  twitterDescription:
    "Searching for giftcardmall/mygift or www.giftcardmall.com/mygift? Learn how to find your card's real balance-check service, read available funds, understand transactions.",
  // 4. Navigation Links
  navLinks: [
    { label: "Balance", href: "#balance" },
    { label: "Activation", href: "#activation" },
    { label: "Declined card", href: "#declined" },
    { label: "FAQ", href: "#faq" }
  ]
};

export default siteConfig;

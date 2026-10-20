# GiftCardSpend Clone - Next.js Application

A replica of [giftcardspend.com](https://giftcardspend.com/) built with **Next.js (App Router)** and Vanilla CSS, featuring a separate configuration file to easily customize the website name, domain, branding, and metadata.

---

## ⚙️ How to Change the Website Name and Domain

All website identity, domain names, links, and SEO metadata are managed in a single file:

📄 **[`config.js`](./config.js)**

```javascript
export const siteConfig = {
  // 1. Change your website name & domain here:
  siteName: "Gift Card Spend",
  domain: "giftcardspend.com",
  siteUrl: "https://giftcardspend.com",
  brandInitial: "G",

  // 2. SEO & Head Metadata:
  metaTitle: "GiftCardMall/MyGift | Official Website | Check Your Balance",
  metaDescription: "Independent GiftCardMall/MyGift balance guide...",
  author: "Gift Card Spend",
  themeColor: "#17324d",
  lastReviewedDate: "September 28, 2026",
  schemaDateModified: "2026-09-28",

  // 3. Social / Open Graph & Twitter:
  ogTitle: "GiftCardMall/MyGift Balance Guide | Gift Card Spend",
  ogDescription: "A clear, independent guide to GiftCardMall/MyGift...",
  twitterTitle: "GiftCardMall/MyGift Balance Guide",
  twitterDescription: "Independent help for GiftCardMall/MyGift...",
  
  // 4. Navigation Links:
  navLinks: [
    { label: "Balance", href: "#balance" },
    { label: "Activation", href: "#activation" },
    { label: "Declined card", href: "#declined" },
    { label: "FAQ", href: "#faq" }
  ]
};
```

Whenever you update `config.js`, all of the following update automatically:
- Sticky header logo mark initial and site name
- Top notice bar domain reference
- Title tag, meta descriptions, and Open Graph tags
- Canonical URL and Schema.org JSON-LD structured data
- All in-page domain references (Safety warning, FAQ questions/answers, Trademark notices)
- Footer branding, date, and domain link

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build:
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── config.js             # 👈 Dedicated configuration for Website Name, Domain, & Metadata
├── app/
│   ├── layout.jsx        # Root Layout with dynamic SEO & Schema.org JSON-LD
│   ├── page.jsx          # Complete Page with all sections from giftcardspend.com
│   ├── globals.css       # Complete CSS design system and responsive styles
│   └── icon.svg          # Dynamic SVG Favicon matching brand mark
├── package.json          # Next.js dependencies and scripts
└── next.config.js        # Next.js configuration
```

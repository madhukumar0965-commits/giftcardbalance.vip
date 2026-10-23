import './globals.css';
import siteConfig from '../config';

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  authors: [{ name: siteConfig.author }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.twitterTitle,
    description: siteConfig.twitterDescription,
  },
};

export const viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        description:
          'Independent educational website covering gift card balance, prepaid card use, activation, registration, transaction and troubleshooting topics.',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.siteName,
        publisher: { '@id': `${siteConfig.siteUrl}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.siteUrl}/#webpage`,
        url: siteConfig.siteUrl,
        name: `${siteConfig.ogTitle}`,
        description: `Independent GiftCardMall/MyGift balance, activation, registration, transaction and declined-card help.`,
        isPartOf: { '@id': `${siteConfig.siteUrl}/#website` },
        about: [
          { '@type': 'Thing', name: 'GiftCardMall/MyGift' },
          { '@type': 'Thing', name: 'gift card balance check' },
          { '@type': 'Thing', name: 'prepaid gift card activation' },
        ],
        breadcrumb: { '@id': `${siteConfig.siteUrl}/#breadcrumb` },
        inLanguage: 'en-US',
        dateModified: siteConfig.schemaDateModified,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteConfig.siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: siteConfig.siteName,
            item: siteConfig.siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'GiftCardMall/MyGift Balance Guide',
            item: `${siteConfig.siteUrl}/#giftcardmall-mygift`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is GiftCardMall/MyGift?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GiftCardMall/MyGift is a search phrase commonly used by cardholders looking for balance, activation, registration and transaction information for certain prepaid gift cards. Use the exact website and support information printed on your own card or packaging before entering card details.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I check a GiftCardMall MyGift balance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use the balance or card-management website printed on the back of your card or its carrier. Confirm the domain carefully before entering the card number, expiration date or security code. This website does not collect card credentials or display balances.',
            },
          },
          {
            '@type': 'Question',
            name: `Is www.giftcardmall.com/mygift the same as ${siteConfig.siteName}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `No. ${siteConfig.domain} is an independent informational website and is not GiftCardMall, MyGift, Blackhawk Network, Visa, Mastercard or a card issuer.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Why is my gift card declined even when it has a balance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common causes can include a purchase total above the available balance, pending authorization holds, merchant restrictions, billing address or ZIP mismatches, or a card that needs issuer-specific activation or registration. Use the support information printed on the card for account-specific help.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if a GiftCardMall/MyGift page asks for unusual information?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Stop and verify the domain against the address printed on the card or packaging. Do not send card numbers, CVV, PIN or security codes through email, text, chat or social media.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="_v_tY9MaQ_3Bzv1PA5TES3_XDJywwkZ4HWHPpd67Ja8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="giftcardmall-mygift">
        {children}
      </body>
    </html>
  );
}

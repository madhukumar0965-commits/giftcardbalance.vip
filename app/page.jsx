import siteConfig from '../config';

export default function HomePage() {
  return (
    <>
      {/* Top Notice Bar */}
      <div className="topbar">
        <div className="wrap">
          <div>
            <strong>Independent guide:</strong> {siteConfig.domain} does not process or access gift card balances.
          </div>
          <a href="#safety">Card safety first →</a>
        </div>
      </div>

      {/* Sticky Header */}
      <header>
        <div className="wrap nav">
          <a className="brand" href="/" aria-label={`${siteConfig.siteName} home`}>
            <span className="brand-mark" aria-hidden="true">
              {siteConfig.brandInitial}
            </span>
            <span>{siteConfig.siteName}</span>
          </a>
          <nav aria-label="Primary navigation">
            <ul>
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="wrap">
        {/* Breadcrumbs */}
        <div className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <span>GiftCardMall/MyGift Balance Guide</span>
        </div>

        {/* Hero Section */}
        <section className="hero" aria-labelledby="page-title">
          <div>
            <div className="eyebrow">Balance • activation • card help</div>
            <h1 id="page-title">
              GiftCardMall<span className="slash">/</span>MyGift Balance &amp; Card Help
            </h1>
            <p className="lead">
              Searching for <strong>giftcardmall/mygift</strong>, <strong>www.giftcardmall.com/mygift</strong>, a{' '}
              <strong>GiftCardMall balance check</strong>, or <strong>MyGift balance</strong> help? This independent
              guide explains the safest way to find the correct card-management information, understand your available
              gift card balance, review transactions, and troubleshoot common prepaid-card problems.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#balance">
                How to check a balance
              </a>
              <a className="btn btn-secondary" href="#faq">
                Read common questions
              </a>
            </div>
            <div className="safe-note">
              <span className="check-icon" aria-hidden="true">✓</span>
              <span>
                Use the exact website or phone number printed on your own physical card or packaging. Never enter a card
                number, CVV, PIN or expiration date on this website.
              </span>
            </div>
          </div>

          <aside className="hero-card" aria-label="Popular GiftCardMall MyGift searches">
            <h2>Popular cardholder searches</h2>
            <div className="search-intents">
              <div className="intent">
                <span>giftcardmall/mygift</span>
                <small>portal help</small>
              </div>
              <div className="intent">
                <span>www.giftcardmall.com/mygift</span>
                <small>website lookup</small>
              </div>
              <div className="intent">
                <span>GiftCardMall balance check</span>
                <small>balance</small>
              </div>
              <div className="intent">
                <span>MyGift card activation</span>
                <small>activation</small>
              </div>
              <div className="intent">
                <span>Visa gift card balance</span>
                <small>prepaid card</small>
              </div>
              <div className="intent">
                <span>gift card declined</span>
                <small>troubleshooting</small>
              </div>
            </div>
          </aside>
        </section>

        {/* Trust Strip */}
        <div className="trust-strip" aria-label="Page principles">
          <div className="trust-item">No balance form</div>
          <div className="trust-item">No card data collection</div>
          <div className="trust-item">Independent information</div>
          <div className="trust-item">Safety-focused guidance</div>
        </div>

        {/* Balance Section */}
        <section id="balance">
          <div className="balance-box">
            <div className="balance-panel">
              <h2>How to check a GiftCardMall/MyGift balance safely</h2>
              <p>
                A balance check should start with the information printed on the physical card, carrier, receipt or
                issuer documentation—not with a lookalike page found in search results.
              </p>
              <ul>
                <li>Turn the card over and find the balance or card-management website.</li>
                <li>Type that address directly and verify the spelling in the browser bar.</li>
                <li>Use only the card details requested by the verified card-management service.</li>
                <li>Review available balance and recent transaction history before spending.</li>
              </ul>
            </div>

            <div className="checklist">
              <div className="check">
                <div className="tick">1</div>
                <div>
                  <b>Read the card first</b>
                  <span>
                    If your card specifically references giftcardmall/mygift or www.giftcardmall.com/mygift, follow the
                    directions printed on that card or its packaging.
                  </span>
                </div>
              </div>
              <div className="check">
                <div className="tick">2</div>
                <div>
                  <b>Check the exact domain</b>
                  <span>
                    Look for misspellings, added words, unusual subdomains or a different domain before entering
                    sensitive card information.
                  </span>
                </div>
              </div>
              <div className="check">
                <div className="tick">3</div>
                <div>
                  <b>Compare balance and transactions</b>
                  <span>
                    A recent purchase, refund, reversal or authorization hold can make the available balance different
                    from what you expect.
                  </span>
                </div>
              </div>
              <div className="check">
                <div className="tick">4</div>
                <div>
                  <b>Use issuer support for account-specific issues</b>
                  <span>
                    For a missing balance, unauthorized transaction, lost card or unresolved decline, call the
                    customer-service number printed on the card.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="warning" id="safety">
            <strong>Safety reminder:</strong> {siteConfig.domain} is not a balance portal and does not ask for your
            full card number, CVV, PIN, security code or expiration date. If a page reached through a search result asks
            for gift card credentials, confirm the domain against your physical card before continuing.
          </div>
        </section>

        {/* Activation & Registration Section */}
        <section id="activation">
          <div className="section-head">
            <h2>GiftCardMall/MyGift activation, registration &amp; transaction basics</h2>
            <p>
              Card instructions vary by issuer and product. The safest approach is to follow the directions on your card
              instead of assuming every Visa or Mastercard gift card uses the same portal.
            </p>
          </div>

          <div className="grid-3">
            <article className="card">
              <span className="num">01</span>
              <h3>Gift card activation</h3>
              <p>
                Many prepaid gift cards are activated at the register when payment is completed. If your packaging gives
                separate MyGift activation instructions, follow those exact issuer directions.
              </p>
            </article>
            <article className="card">
              <span className="num">02</span>
              <h3>Card registration</h3>
              <p>
                Some cards allow or require a billing address or ZIP code for online purchases. Enter personal information
                only on the verified card-management page named on your card.
              </p>
            </article>
            <article className="card">
              <span className="num">03</span>
              <h3>Transaction history</h3>
              <p>
                Recent transactions can explain a lower-than-expected prepaid card balance. Pay attention to pending
                holds, completed purchases, reversals and refunds.
              </p>
            </article>
          </div>
        </section>

        {/* Declined Card Troubleshooting */}
        <section id="declined">
          <div className="section-head">
            <h2>Why a gift card can be declined even with money left</h2>
            <p>
              A declined GiftCardMall or MyGift card does not always mean the card has a zero balance. These are common
              issues to check before contacting cardholder support.
            </p>
          </div>

          <div className="table-wrap" role="region" aria-label="Gift card declined troubleshooting table" tabIndex={0}>
            <table>
              <thead>
                <tr>
                  <th>Possible issue</th>
                  <th>What it means</th>
                  <th>What to check</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Purchase is above available balance</td>
                  <td>The total including tax, tip or shipping may exceed the amount left on the card.</td>
                  <td>Confirm the current gift card balance and ask the merchant about split payment.</td>
                </tr>
                <tr>
                  <td>Pending authorization hold</td>
                  <td>Hotels, gas stations, restaurants and some online merchants can temporarily reserve more than the final charge.</td>
                  <td>Review transaction history and wait for pending holds to settle where appropriate.</td>
                </tr>
                <tr>
                  <td>Billing ZIP or address mismatch</td>
                  <td>Some online merchants validate billing information for prepaid cards.</td>
                  <td>Use the registration options provided by the verified issuer site, if your card supports them.</td>
                </tr>
                <tr>
                  <td>Merchant restrictions</td>
                  <td>Some merchants, subscriptions or transaction types may not accept certain prepaid cards.</td>
                  <td>Check the cardholder agreement and merchant payment policy.</td>
                </tr>
                <tr>
                  <td>Card-specific issue</td>
                  <td>The card may require issuer support for activation, replacement or disputed activity.</td>
                  <td>Call the customer-service number printed on the card or its packaging.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Topics Cloud */}
        <section aria-labelledby="search-topics-title">
          <div className="section-head">
            <h2 id="search-topics-title">Related GiftCardMall/MyGift balance topics</h2>
            <p>
              These related phrases reflect common informational search intent around prepaid gift cards. They are
              included here as readable topic coverage rather than hidden keyword blocks.
            </p>
          </div>
          <div className="keyword-cloud" aria-label="Related search topics">
            <span>giftcardmall/mygift balance</span>
            <span>www.giftcardmall.com/mygift</span>
            <span>GiftCardMall MyGift balance check</span>
            <span>MyGift card balance</span>
            <span>GiftCardMall activation</span>
            <span>MyGift activation</span>
            <span>register GiftCardMall card</span>
            <span>prepaid gift card balance</span>
            <span>Visa gift card balance check</span>
            <span>Mastercard gift card balance</span>
            <span>gift card transaction history</span>
            <span>gift card declined with balance</span>
            <span>gift card pending transaction</span>
            <span>gift card billing ZIP</span>
            <span>check prepaid card balance</span>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section id="faq">
          <div className="section-head">
            <h2>GiftCardMall/MyGift FAQ</h2>
            <p>
              Quick answers for people searching GiftCardMall/MyGift, www.giftcardmall.com/mygift, MyGift balance, card
              activation and prepaid-card troubleshooting.
            </p>
          </div>

          <div className="faq">
            <details open>
              <summary>What is GiftCardMall/MyGift?</summary>
              <p>
                GiftCardMall/MyGift is a search phrase commonly used by cardholders looking for balance, activation,
                registration and transaction information for certain prepaid gift cards. Use the exact card-management
                website or phone number printed on your own card or packaging before entering any card details.
              </p>
            </details>
            <details>
              <summary>How do I check a GiftCardMall MyGift balance?</summary>
              <p>
                Find the balance-check or card-management address printed on the card, carrier or packaging. Type it
                directly, verify the domain carefully, then follow the issuer's instructions. {siteConfig.domain} cannot
                see or retrieve your balance.
              </p>
            </details>
            <details>
              <summary>Is www.giftcardmall.com/mygift the same website as {siteConfig.domain}?</summary>
              <p>
                No. {siteConfig.domain} is an independent informational website. It is not GiftCardMall, MyGift, Blackhawk
                Network, Visa, Mastercard or a card issuer, and it does not process gift card balances or card activations.
              </p>
            </details>
            <details>
              <summary>What information may be needed for a MyGift balance check?</summary>
              <p>
                A verified issuer card-management service may request information printed on the card, such as the card
                number, expiration date and security code. Enter those details only on the exact card-management site named
                on the card or packaging.
              </p>
            </details>
            <details>
              <summary>Why is my Visa gift card balance lower than expected?</summary>
              <p>
                Recent purchases, temporary authorization holds, tips, refunds that have not posted, reversals or other
                transaction activity can change the available balance. Review recent transactions through the verified
                issuer service.
              </p>
            </details>
            <details>
              <summary>Why is my gift card declined even though it has a balance?</summary>
              <p>
                Possible reasons include a purchase total above the available balance, a pending authorization hold,
                merchant restrictions, a billing address or ZIP mismatch, or a card-specific activation issue. For
                account-specific help, use the support number printed on the card.
              </p>
            </details>
            <details>
              <summary>Can {siteConfig.domain} activate or register my card?</summary>
              <p>
                No. This site provides educational information only. Activation, registration, balance checks,
                transaction disputes and card replacements must be handled through the verified issuer or
                card-management information printed on your card.
              </p>
            </details>
            <details>
              <summary>What should I do if a page asks for my gift card details?</summary>
              <p>
                Verify the full browser address against the website printed on your physical card or packaging. Do not
                share a card number, CVV, PIN or security code through email, chat, text messages, comments or social
                media.
              </p>
            </details>
          </div>
        </section>

        {/* Disclaimer Banner */}
        <section className="disclaimer" aria-labelledby="disclaimer-title">
          <h2 id="disclaimer-title">Independent site &amp; trademark notice</h2>
          <p>
            {siteConfig.domain} is an independent informational website and is not affiliated with, endorsed by,
            operated by or connected to GiftCardMall, MyGift, Blackhawk Network, Visa, Mastercard or any card issuer. Brand
            and product names are used only to identify the topics discussed. This website does not sell cards, activate
            cards, retrieve balances or collect card credentials.
          </p>
          <p>
            For the safest balance, activation, registration, transaction or support experience, use the exact contact
            information printed on your own card, card carrier, receipt or issuer documentation.
          </p>
          <a className="btn btn-secondary" href={siteConfig.siteUrl}>
            Visit {siteConfig.domain}
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="wrap footer-grid">
          <div>
            <strong>{siteConfig.siteName}</strong>
            <br />
            Independent information about gift card balances, prepaid card use, activation, registration, transaction
            history and common card problems.
            <br />
            Last reviewed: {siteConfig.lastReviewedDate}.
          </div>
          <div className="footer-links">
            <a href="#balance">Balance guide</a>
            <a href="#activation">Activation</a>
            <a href="#declined">Declined card</a>
            <a href="#faq">FAQ</a>
            <a href={siteConfig.siteUrl}>{siteConfig.domain}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

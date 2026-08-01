import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  Cross,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const whatsappNumber = '255765169859'

const books = [
  {
    number: '01',
    title: 'Jitambue wewe ni nani',
    eyebrow: 'Utambulisho ndani ya Kristo',
    description:
      'Mwongozo wa kukusaidia kuvunja mitazamo iliyokufunga, kuelewa thamani yako, na kuishi kutoka katika utambulisho ambao Mungu amekupa.',
    tone: 'indigo',
    message:
      "Habari, nataka kununua kitabu 'Jitambue wewe ni nani' kwa TSh 10,000. Nitalipa kwa M-Pesa 0765169859.",
  },
  {
    number: '02',
    title: 'Ishi Kwa kusudi la Mungu',
    eyebrow: 'Maisha yenye mwelekeo',
    description:
      'Hatua za kiroho na kiutendaji za kutambua vipawa vyako, kusikiliza uongozi wa Mungu, na kuchukua hatua kwa imani.',
    tone: 'terracotta',
    message:
      "Habari, nataka kununua kitabu 'Ishi Kwa kusudi la Mungu' kwa TSh 10,000. Nitalipa kwa M-Pesa 0765169859.",
  },
]

const purposeSteps = [
  {
    title: 'Mtafute Mungu kwa maombi na Neno Lake',
    text: 'Kusudi la Mungu halijulikani kwa kubahatisha. Anza kwa kujenga ukaribu na Mungu na kuomba hekima kwa moyo wa kutii.',
    verse: 'Mithali 3:5–6',
  },
  {
    title: 'Jitambue wewe ni nani ndani ya Kristo',
    text: 'Tambua utambulisho wako kabla ya kutafuta kazi yako. Kusudi huanza unapojiona kama Mungu anavyokuona.',
    verse: 'Waefeso 2:10',
  },
  {
    title: 'Tambua vipawa, karama na uwezo wako',
    text: 'Mungu ameweka ndani yako uwezo maalum kwa ajili ya kuwahudumia wengine. Chunguza kile unachofanya kwa uhai na ufanisi.',
    verse: '1 Petro 4:10',
  },
  {
    title: 'Sikiliza uongozi wa Roho Mtakatifu',
    text: 'Jifunze kutambua amani, msukumo na maonyo ya Roho Mtakatifu katika maamuzi yako ya kila siku.',
    verse: 'Warumi 8:14',
  },
  {
    title: 'Chukua hatua kwa imani na uvumilie',
    text: 'Mwelekeo huwa wazi zaidi unapotembea. Anza na hatua uliyo nayo leo, kisha endelea kuwa mwaminifu.',
    verse: 'Yakobo 2:17',
  },
]

function HomePage() {
  return (
    <main>
      <nav className="site-nav" aria-label="Urambazaji mkuu">
        <a className="brand" href="#mwanzo" aria-label="MindRenewalGuide mwanzo">
          <span className="brand-mark"><Cross size={16} strokeWidth={2.2} /></span>
          <span>MindRenewal<span>Guide</span></span>
        </a>
        <div className="nav-links">
          <a href="#vitabu">Vitabu</a>
          <a href="#makala">Makala</a>
          <a href="#wasiliana">Wasiliana</a>
        </div>
        <a
          className="nav-action"
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} /> WhatsApp
        </a>
        <a
          className="mobile-menu"
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Wasiliana nasi kupitia WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
      </nav>

      <header className="hero" id="mwanzo">
        <div className="hero-grain" />
        <div className="hero-copy reveal reveal-one">
          <p className="kicker"><span /> Imani inayobadilisha fikra</p>
          <h1>Fikra mpya.<br /><em>Maisha mapya.</em></h1>
          <p className="hero-intro">
            Vitabu vya Kikristo vinavyounganisha Neno la Mungu na saikolojia
            ya utambuzi—ili ukue kiroho, ujitambue na uishi kwa kusudi.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#vitabu">
              Gundua vitabu <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#makala">Soma makala <ArrowDown size={16} /></a>
          </div>
        </div>

        <div className="hero-art reveal reveal-two" aria-hidden="true">
          <div className="sun-disc" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-book book-back">
            <span className="cover-small">MindRenewalGuide</span>
            <strong>ISHI KWA<br /><i>KUSUDI</i><br />LA MUNGU</strong>
            <span className="cover-symbol"><Sparkles size={28} /></span>
          </div>
          <div className="hero-book book-front">
            <span className="cover-small">MindRenewalGuide</span>
            <strong>JITAMBUE<br /><i>WEWE NI</i><br />NANI</strong>
            <span className="cover-symbol"><Brain size={32} /></span>
          </div>
          <span className="art-note">Miongozo ya ukuaji<br />wa ndani</span>
        </div>

        <div className="hero-proof reveal reveal-three">
          <div><BookOpen size={20} /><span><strong>Vitabu 2</strong> vya kukujenga</span></div>
          <div><Brain size={20} /><span><strong>Imani + saikolojia</strong> kwa vitendo</span></div>
        </div>
      </header>

      <section className="manifesto section-shell">
        <p className="section-label">Kwa nini MindRenewalGuide?</p>
        <div className="manifesto-grid">
          <h2>Mabadiliko ya kweli<br />huanzia <em>ndani.</em></h2>
          <div className="manifesto-copy">
            <p>Tunaamini kuwa Neno la Mungu hubadilisha maisha linapokutana na fikra zilizo tayari kufanywa upya.</p>
            <p>Kila kitabu kimeandikwa kwa Kiswahili rahisi, kikiwa na mafunzo ya kina na hatua unazoweza kuanza kutumia leo.</p>
          </div>
        </div>
      </section>

      <section className="books-section" id="vitabu">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-label light">Maktaba yetu</p>
              <h2>Chagua mwanzo wako.</h2>
            </div>
            <p>Vitabu vya kidijitali vinatumwa moja kwa moja baada ya kuthibitisha malipo.</p>
          </div>

          <div className="book-list">
            {books.map((book) => (
              <article className="book-row" key={book.number}>
                <span className="book-number">{book.number}</span>
                <div className={`book-cover ${book.tone}`} aria-label={`Jalada la ${book.title}`}>
                  <span>MindRenewalGuide</span>
                  <h3>{book.title}</h3>
                  <div className="cover-line" />
                  {book.tone === 'indigo' ? <Brain size={44} /> : <Sparkles size={44} />}
                  <small>Renew your mind. Discover your purpose.</small>
                </div>
                <div className="book-info">
                  <p className="book-eyebrow">{book.eyebrow}</p>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <div className="book-meta">
                    <span className="price">TSh 10,000<small>/=</small></span>
                    <span className="format"><Check size={15} /> PDF / Digital</span>
                  </div>
                  <a
                    className="button button-accent"
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(book.message)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agiza kwa WhatsApp <ArrowRight size={18} />
                  </a>
                  <p className="payment-note">Lipa kwa M-Pesa: <strong>0765 169 859</strong></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-section section-shell" id="makala">
        <div className="article-intro">
          <p className="section-label">Makala ya kukuza imani</p>
          <p className="article-count">Dakika 5 za kusoma</p>
          <h2>Hatua 5 za kulijua kusudi la Mungu maishani</h2>
          <p className="article-lead">Kusudi si fumbo la kutisha. Mara nyingi Mungu hutufunulia hatua inayofuata tunapokuwa tayari kumsikiliza na kutembea naye.</p>
        </div>

        <div className="steps">
          {purposeSteps.map((step, index) => (
            <article className="step" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <small>{step.verse}</small>
            </article>
          ))}
        </div>

        <blockquote>
          <span>“</span>
          <p>Inuka, uangaze; kwa kuwa nuru yako imekuja, na utukufu wa Bwana umekuzukia.</p>
          <cite>Isaya 60:1</cite>
        </blockquote>
      </section>

      <section className="contact-section" id="wasiliana">
        <div className="contact-orbit" />
        <div className="contact-content">
          <p className="section-label light">Uko tayari kuanza?</p>
          <h2>Safari yako ya mabadiliko<br />inaanza na <em>hatua moja.</em></h2>
          <p>Tuma ujumbe WhatsApp kuagiza kitabu au kuuliza swali. Tunajibu kwa urahisi na kukuelekeza jinsi ya kulipa kupitia M-Pesa.</p>
          <a
            className="button button-light"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Habari MindRenewalGuide, ningependa kujua zaidi kuhusu vitabu vyenu.')}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} /> Anza mazungumzo
          </a>
          <p className="contact-number">WhatsApp + M-Pesa <strong>0765 169 859</strong></p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#mwanzo">
          <span className="brand-mark"><Cross size={16} /></span>
          <span>MindRenewal<span>Guide</span></span>
        </a>
        <p>Vitabu vya kujenga imani, fikra na kusudi.</p>
        <p>© 2026 MindRenewalGuide Publications</p>
      </footer>
    </main>
  )
}

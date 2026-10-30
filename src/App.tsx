import { useRef, useState, type PointerEvent } from 'react';
import { ArrowUpRight, CalendarDays, Instagram, MapPin, Music2, Pause, Play, Ticket } from 'lucide-react';

const ticketUrl = 'https://ticketon.kz/concerts/event/tckt2-bakr-bolshoy-solnyy-kontsert-v-almaty?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAVQ-mxleHRuA2FlbQExAHBkb2YCZmRpZBZRFG5sm8ReSFN0mEWiCMHsgwHpU6h-c3J0YwZhcHBfaWQPMTI0MDI0NTc0Mjg3NDE0AAGnz1xG5uXMW0bYnAgkadrc12XURpgfBAsVYbBbkFF5ItznEhE-ZoC2HZV2O5Y_aem_kI4aEJcxwtDQTz9iGeoH-A';

function App() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  function moveArtist(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--move-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 14}px`);
    event.currentTarget.style.setProperty('--move-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 10}px`);
  }
  function resetArtist() {
    sceneRef.current?.style.setProperty('--move-x', '0px');
    sceneRef.current?.style.setProperty('--move-y', '0px');
  }
  return (
    <main className="invite-shell">
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />

      <nav className="topbar">
        <a className="brand" href="#top" aria-label="BAKR — на главную">
          BAKR<span className="brand-dot">.</span>
        </a>
        <div className="topbar-meta">
          <span className="live-dot" />
          <span>LIVE IN ALMATY</span>
        </div>
        <a className="nav-ticket" href={ticketUrl} target="_blank" rel="noreferrer">
          Билеты <ArrowUpRight size={16} strokeWidth={1.8} />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> ПРИГЛАШЕНИЕ НА КОНЦЕРТ</div>
          <p className="edition">ONE NIGHT ONLY / ALMATY 2026</p>
          <h1>BAKR</h1>
          <p className="lead">Встретимся<br /><em>на концерте.</em></p>

          <div className="rule" />

          <div className="event-facts">
            <div className="date-block">
              <strong>28.11</strong>
              <span>НОЯБРЯ</span>
            </div>
            <div className="venue-block">
              <h2>ALMATY ARENA</h2>
              <span><MapPin size={13} /> АЛМАТЫ</span>
            </div>
          </div>

          <div className="guest">
            <div className="guest-line" />
            <div>
              <span>СПЕЦИАЛЬНЫЙ ГОСТЬ</span>
              <strong>SADRADDIN</strong>
            </div>
          </div>

          <a className="primary-button" href={ticketUrl} target="_blank" rel="noreferrer">
            <Ticket size={19} strokeWidth={1.8} />
            Купить билет
            <ArrowUpRight className="button-arrow" size={17} strokeWidth={1.8} />
          </a>
          <nav className="social-links" aria-label="Социальные сети">
            <a className="social-button" href="https://www.instagram.com/bayandyuly?obrf=bDhjamYyYm9rNDI3&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <Instagram size={17} aria-hidden="true" />
              Instagram
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a className="social-button" href="https://www.tiktok.com/@bayandyuly?_r=1&_t=ZS-9AyiLsPZ8ev" target="_blank" rel="noopener noreferrer">
              <Music2 size={17} aria-hidden="true" />
              TikTok
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="poster-wrap">
          <div className={`artist-scene${paused ? ' is-paused' : ''}`} ref={sceneRef} onPointerMove={moveArtist} onPointerLeave={resetArtist}>
            <div className="stage-grid" aria-hidden="true" />
            <div className="stage-halo" aria-hidden="true" />
            <span className="scene-label">BAKR / LIVE</span>
            <div className="orbit orbit-back" aria-hidden="true" />
            <div className="artist-parallax">
              <img className="artist-image" src="/bakr-artist.png" alt="BAKR в чёрной куртке, шапке и очках" width="1060" height="1484" fetchPriority="high" />
            </div>
            <div className="orbit orbit-front" aria-hidden="true" />
            <div className="stage-spark spark-one" aria-hidden="true" />
            <div className="stage-spark spark-two" aria-hidden="true" />
            <span className="scene-date" aria-hidden="true">28 / 11</span>
            <button className="motion-toggle" type="button" aria-label={paused ? 'Включить анимацию' : 'Приостановить анимацию'} aria-pressed={paused} onClick={() => { resetArtist(); setPaused(!paused); }}>
              {paused ? <Play size={14} /> : <Pause size={14} />}<span>{paused ? 'Включить' : 'Пауза'}</span>
            </button>
          </div>
          <p className="poster-caption">ALMATY · 28 NOVEMBER · 2026</p>
        </div>
      </section>

      <section className="details-strip">
        <div><CalendarDays size={17} /><span>28 НОЯБРЯ 2026</span></div>
        <div><MapPin size={17} /><span>ALMATY ARENA, АЛМАТЫ</span></div>
        <a href={ticketUrl} target="_blank" rel="noreferrer">ЗАБРАТЬ БИЛЕТ <ArrowUpRight size={16} /></a>
      </section>

      <footer>
        <span>BAKR · LIVE IN ALMATY</span>
        <span>© 2026 / GOLDEN MEDIA GROUP</span>
      </footer>
    </main>
  );
}

export default App;

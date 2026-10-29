import React, { useEffect, useState } from 'react';
import { BRAND_ASSETS } from '../data/lanjutData';

function getFormattedWibTime() {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    return formatter.format(now).replace(/\./g, ':');
  } catch {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }
}

export default function SiteFooter({
  onNavigate,
  onNavigateLandingSection,
  onOpenDocsChapter,
}) {
  const [timeString, setTimeString] = useState(getFormattedWibTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeString(getFormattedWibTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (e, callback) => {
    if (
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();
      callback();
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top: Brand Wordmark & Tagline */}
        <div className="footer-brand-row">
          <div className="footer-brand-group">
            <a
              href="/"
              className="footer-brand-logo"
              aria-label="Beranda LANJUT"
              onClick={(e) => handleLinkClick(e, () => onNavigate('landing'))}
            >
              <img
                src={BRAND_ASSETS.wordmark}
                alt="Logo Wordmark LANJUT"
                className="footer-wordmark-img"
                width="142"
                height="38"
              />
            </a>
            <p className="footer-brand-tagline">
              Platform Panduan Navigasi Pendidikan Tinggi Siswa SMK
            </p>
          </div>
        </div>

        {/* Middle: Multi-Column Content + Modern Clock Card (Inspired by web SUSI) */}
        <div className="footer-columns-grid">
          {/* Column 1: Tentang / Portofolio EDILAKSO */}
          <div className="footer-col">
            <span className="footer-col-kicker">TENTANG</span>
            <p className="footer-col-text">
              <strong>LANJUT</strong> (Layanan Navigasi Jalur Untuk Kuliah)
              adalah panduan informasi pendidikan tinggi independen yang
              dikembangkan dalam ekosistem proyek portofolio EDILAKSO untuk
              membantu siswa SMK merencanakan kelanjutan studi secara terarah.
            </p>
          </div>

          {/* Column 2: Jelajah */}
          <div className="footer-col">
            <span className="footer-col-kicker">JELAJAH</span>
            <ul className="footer-col-links">
              <li>
                <a
                  href="/"
                  onClick={(e) =>
                    handleLinkClick(e, () => onNavigate('landing'))
                  }
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/#tentang-lanjut"
                  onClick={(e) =>
                    handleLinkClick(e, () =>
                      onNavigateLandingSection('tentang-lanjut')
                    )
                  }
                >
                  Tentang LANJUT
                </a>
              </li>
              <li>
                <a
                  href="/#peta-jalur-smk"
                  onClick={(e) =>
                    handleLinkClick(e, () =>
                      onNavigateLandingSection('peta-jalur-smk')
                    )
                  }
                >
                  Peta Jalur SMK
                </a>
              </li>
              <li>
                <a
                  href="/panduan"
                  onClick={(e) =>
                    handleLinkClick(e, () => onOpenDocsChapter('bab-1'))
                  }
                >
                  Panduan Lengkap
                </a>
              </li>
              <li>
                <a
                  href="/download"
                  onClick={(e) =>
                    handleLinkClick(e, () => onNavigate('download'))
                  }
                  className="footer-link-gold"
                >
                  Download APK
                </a>
              </li>
              <li>
                <a
                  href="/#privasi-faq-kontak"
                  onClick={(e) =>
                    handleLinkClick(e, () =>
                      onNavigateLandingSection('privasi-faq-kontak')
                    )
                  }
                >
                  Privasi &amp; FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Sumber Resmi */}
          <div className="footer-col">
            <span className="footer-col-kicker">SUMBER RESMI</span>
            <ul className="footer-col-links">
              <li>
                <a
                  href="https://snpmb.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  Portal SNPMB (snpmb.id) &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://snpmb.id/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  FAQ Resmi SNPMB &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://tka.kemendikdasmen.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  TKA Kemendikdasmen &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://pusmendik.kemendikdasmen.go.id/tka/simulasi_tka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  Simulasi TKA Pusmendik &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Live Clock Widget Card (Web SUSI Reference) */}
          <div className="footer-col footer-clock-col">
            <div className="footer-clock-card">
              <span className="footer-clock-label">WAKTU SAAT INI</span>
              <div className="footer-clock-display" aria-live="off">
                <span className="footer-clock-digits">{timeString}</span>
                <span className="footer-clock-tz">WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Divider & Minimalist Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 &ndash; LANJUT (Layanan Navigasi Jalur Untuk Kuliah) &bull; EDILAKSO Group
          </p>
        </div>
      </div>
    </footer>
  );
}

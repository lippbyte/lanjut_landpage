import React from 'react';
import { HOW_ITS_MADE_DATA } from '../../data/lanjutData';
import Reveal from '../Reveal';

export default function BuiltBySection() {
  return (
    <section
      className="built-by-section"
      id="pembuatan-lanjut"
      aria-labelledby="built-by-heading"
    >
      <div className="built-by-container">
        <Reveal className="built-by-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            <span>{HOW_ITS_MADE_DATA.eyebrow}</span>
          </div>
          <h2 className="section-title" id="built-by-heading">
            Bagaimana LANJUT Dibuat?
          </h2>
          <p className="section-lead">{HOW_ITS_MADE_DATA.lead}</p>
        </Reveal>

        <div className="built-by-grid" role="list">
          {HOW_ITS_MADE_DATA.cards.map((card, idx) => (
            <Reveal
              key={card.badge}
              as="article"
              className="built-by-card"
              role="listitem"
              delay={idx * 80}
            >
              <span className="built-by-badge">{card.badge}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="built-by-honesty-banner" delay={180}>
          <strong>Konteks Portofolio &amp; Independensi:</strong>{' '}
          {HOW_ITS_MADE_DATA.honestyStatement}
        </Reveal>
      </div>
    </section>
  );
}


import React from 'react';
import { CROSSROADS_NODES } from '../../data/lanjutData';
import Reveal from '../Reveal';

export default function ProblemSection() {
  return (
    <section
      className="crossroads-section"
      id="persimpangan"
      aria-labelledby="crossroads-heading"
    >
      <div className="crossroads-container">
        <Reveal>
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            <span>Konteks Masalah &bull; Titik Awal Perjalanan</span>
          </div>
          <h2 className="section-title" id="crossroads-heading">
            Tantangan Nyata Siswa SMK Saat Merencanakan Kuliah
          </h2>
          <p className="section-lead">
            Kurikulum SMK menyiapkan keterampilan praktik yang kuat. Namun bagi
            siswa yang berencana melanjutkan pendidikan tinggi, proses mencari
            informasi kuliah kerap menghadirkan tiga kendala konkret berikut:
          </p>
          <div className="crossroads-note-box">
            <strong>Catatan Konteks:</strong> Gambaran di samping merangkum
            kendala perencanaan studi yang sering dihadapi siswa SMK saat
            menjajaki perguruan tinggi—bukan klaim bahwa seluruh siswa mengalami
            situasi yang seragam.
          </div>
        </Reveal>

        {/* Single Branching Route Composition */}
        <div
          className="branch-map-wrapper"
          role="list"
          aria-label="Tiga Tantangan Utama Siswa SMK"
        >
          <div className="branch-trunk-line" aria-hidden="true" />

          {CROSSROADS_NODES.map((node, idx) => (
            <Reveal
              key={node.marker}
              className="branch-node-item"
              role="listitem"
              delay={idx * 90}
            >
              <div className="branch-node-marker" aria-hidden="true">
                {node.marker}
              </div>
              <div className="branch-node-Connector" aria-hidden="true" />
              <span className="branch-question-tag">{node.tag}</span>
              <h3 className="branch-node-title">{node.title}</h3>
              <p className="branch-node-desc">
                {node.descBefore}
                {node.bold1 && <strong>{node.bold1}</strong>}
                {node.descMiddle}
                {node.bold2 && <strong>{node.bold2}</strong>}
                {node.descAfter}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


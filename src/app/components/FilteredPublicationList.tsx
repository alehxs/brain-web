'use client';

import { useState } from 'react';
import { type Institution, INSTITUTION_NAMES } from '@/data/people';
import PublicationCard, { type Publication } from './cards/PublicationCard';

const INSTITUTION_ORDER: Institution[] = ['UH', 'ASU', 'GT', 'WVU', 'UMBC', 'UMH', 'TEC', 'UAB', 'NEU'];

export default function FilteredPublicationList({ publications }: { publications: Publication[] }) {
  const [activeFilter, setActiveFilter] = useState<'all' | Institution>('all');

  // Only show chips for institutions that actually have publications
  const activeInstitutions = INSTITUTION_ORDER.filter((id) =>
    publications.some((p) => p.institution?.includes(id))
  );

  const countByInstitution = Object.fromEntries(
    activeInstitutions.map((id) => [
      id,
      publications.filter((p) => p.institution?.includes(id)).length,
    ])
  );

  const filtered =
    activeFilter === 'all'
      ? publications
      : publications.filter((p) => p.institution?.includes(activeFilter));

  return (
    <div>
      {/* Filter chips */}
      <div
        role="group"
        aria-label="Filter by institution"
        className="flex flex-wrap gap-2 pb-6 mb-6 border-b border-slate-200"
      >
        <button
          onClick={() => setActiveFilter('all')}
          aria-pressed={activeFilter === 'all'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeFilter === 'all'
              ? 'bg-[var(--deep-teal)] text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
            <rect x="1" y="1" width="6" height="6" rx="1" />
            <rect x="9" y="1" width="6" height="6" rx="1" />
            <rect x="1" y="9" width="6" height="6" rx="1" />
            <rect x="9" y="9" width="6" height="6" rx="1" />
          </svg>
          All
          <span aria-hidden="true" className={`text-xs font-normal ${activeFilter === 'all' ? 'text-white/70' : 'text-slate-400'}`}>
            {publications.length}
          </span>
          <span className="sr-only">— {publications.length} results</span>
        </button>

        {activeInstitutions.map((id) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            aria-pressed={activeFilter === id}
            title={INSTITUTION_NAMES[id]}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === id
                ? 'bg-[var(--deep-teal)] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {id}
            <span aria-hidden="true" className={`text-xs font-normal ${activeFilter === id ? 'text-white/70' : 'text-slate-400'}`}>
              {countByInstitution[id]}
            </span>
            <span className="sr-only">— {countByInstitution[id]} results</span>
          </button>
        ))}
      </div>

      {/* Live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {filtered.length === 0
          ? 'No results found.'
          : `${filtered.length} ${filtered.length === 1 ? 'publication' : 'publications'} shown.`}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <svg className="w-12 h-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <p className="text-slate-500 text-sm">No results found.</p>
          <button
            onClick={() => setActiveFilter('all')}
            className="mt-3 text-sm text-[var(--deep-teal)] hover:underline"
          >
            Show all
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {filtered.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      )}
    </div>
  );
}

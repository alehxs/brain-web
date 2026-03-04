'use client';

import { useState } from 'react';
import Image from 'next/image';
import Card from './cards/primitives/Card';
import { type Person, type Institution, INSTITUTION_NAMES } from '@/data/people';
import { toSlug } from '@/lib/slug';

// Explicit order matches the institution tier layout: lead site first, then US sites, then international
const INSTITUTIONS: Institution[] = ['UH', 'ASU', 'GT', 'WVU', 'UMBC', 'UMH', 'TEC'];

type Props = {
  people: Person[];
  variant?: 'faculty' | 'student';
};

export default function PeopleGrid({ people, variant = 'student' }: Props) {
  const [activeFilter, setActiveFilter] = useState<'all' | Institution>('all');
  const [query, setQuery] = useState('');

  const filtered = people.filter((p) => {
    const matchesInstitution = activeFilter === 'all' || p.affiliation.includes(activeFilter);
    const matchesQuery = query === '' || p.name.toLowerCase().includes(query.toLowerCase());
    return matchesInstitution && matchesQuery;
  });

  const countByInstitution = Object.fromEntries(
    INSTITUTIONS.map((id) => [id, people.filter((p) => p.affiliation.includes(id)).length])
  );

  return (
    <div>
      {/* Search bar — focus ring on wrapper so outline-none on input is safe */}
      <div className="flex items-center gap-2 mb-4 px-4 py-2.5 rounded-full border border-slate-300 bg-white shadow-sm w-full max-w-[480px] focus-within:ring-2 focus-within:ring-[var(--deep-teal)] focus-within:border-transparent transition-shadow">
        <svg className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="search"
          placeholder="Search by name…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          aria-label="Search by name"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="text-slate-400 hover:text-slate-600 shrink-0"
          >
            <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filter pills */}
      <div
        role="group"
        aria-label="Filter by institution"
        className="flex flex-wrap gap-2 pb-6 mb-2 border-b border-slate-200"
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
            {people.length}
          </span>
          <span className="sr-only">— {people.length} results</span>
        </button>
        {INSTITUTIONS.map((id) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            aria-pressed={activeFilter === id}
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

      {/* Live region announces result count to screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {filtered.length === 0
          ? 'No results found.'
          : `${filtered.length} ${filtered.length === 1 ? 'person' : 'people'} shown.`}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <svg className="w-12 h-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <p className="text-slate-500 text-sm">No results found.</p>
          <button
            onClick={() => { setActiveFilter('all'); setQuery(''); }}
            className="mt-3 text-sm text-[var(--deep-teal)] hover:underline"
          >
            Show all
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filtered.map((person) =>
            variant === 'faculty' ? (
              <FacultyCard key={person.name} person={person} />
            ) : (
              <StudentCard key={person.name} person={person} />
            )
          )}
        </div>
      )}
    </div>
  );
}

function FacultyCard({ person }: { person: Person }) {
  const university = person.affiliation[0] ? INSTITUTION_NAMES[person.affiliation[0]] : undefined;
  const slug = person.slugOverride ?? toSlug(person.name);
  return (
    <Card href={`/organization/faculty/${slug}`} className="group">
      <Card.Media ratio="3/4" className="rounded-t-lg bg-slate-100">
        {person.src ? (
          <Image
            src={person.src}
            alt={person.name}
            fill
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-slate-200">
            <svg className="w-16 h-16 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        )}
      </Card.Media>
      <Card.Body>
        <h3 className="text-sm font-bold text-slate-900 line-clamp-2">{person.name}</h3>
        {person.tags[0] && (
          <p className="mt-1 text-xs text-slate-600 line-clamp-2">{person.tags[0]}</p>
        )}
        {university && (
          <p className="text-[10px] text-slate-500 leading-snug mt-1 line-clamp-2">{university}</p>
        )}
      </Card.Body>
    </Card>
  );
}

function StudentCard({ person }: { person: Person }) {
  const university = person.affiliation[0] ? INSTITUTION_NAMES[person.affiliation[0]] : undefined;
  return (
    <Card
      href={person.href}
      className="flex flex-col overflow-hidden bg-white h-full border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
    >
      <Card.Media ratio="4/5" className="bg-slate-100">
        {person.src ? (
          <Image
            src={person.src}
            alt={person.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-slate-300">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        )}
      </Card.Media>
      <Card.Body className="flex flex-col justify-center flex-1 border-t border-slate-100">
        <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight mb-1">
          {person.name}
        </h3>
        <p className="text-xs text-slate-600 font-medium leading-snug line-clamp-2">
          {person.tags[0] || ''}
        </p>
        {university && (
          <p className="text-[10px] text-slate-500 leading-snug mt-1 line-clamp-2">{university}</p>
        )}
      </Card.Body>
    </Card>
  );
}

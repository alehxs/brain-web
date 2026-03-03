'use client';

import { useState } from 'react';
import Image from 'next/image';
import Card from './cards/primitives/Card';
import { type Person, type Institution, INSTITUTION_NAMES } from '@/data/people';

// Explicit order matches the institution tier layout: lead site first, then US sites, then international
const INSTITUTIONS: Institution[] = ['UH', 'ASU', 'GT', 'WVU', 'UMBC', 'UMH', 'TEC'];

type Props = {
  people: Person[];
  variant?: 'faculty' | 'student';
};

export default function PeopleGrid({ people, variant = 'student' }: Props) {
  const [activeFilter, setActiveFilter] = useState<'all' | Institution>('all');

  const filtered =
    activeFilter === 'all'
      ? people
      : people.filter((p) => p.affiliation.includes(activeFilter));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeFilter === 'all'
              ? 'bg-[var(--deep-teal)] text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          All
        </button>
        {INSTITUTIONS.map((id) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === id
                ? 'bg-[var(--deep-teal)] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span className="relative w-4 h-4 flex-shrink-0">
              <Image
                src={`/logos/sites/${id.toLowerCase()}.png`}
                alt=""
                fill
                className="object-contain"
              />
            </span>
            {id}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filtered.map((person) =>
          variant === 'faculty' ? (
            <FacultyCard key={person.name} person={person} />
          ) : (
            <StudentCard key={person.name} person={person} />
          )
        )}
      </div>
    </div>
  );
}

function FacultyCard({ person }: { person: Person }) {
  const university = person.affiliation[0] ? INSTITUTION_NAMES[person.affiliation[0]] : undefined;
  return (
    <Card href={person.href} className="group">
      <Card.Media ratio="3/4" className="rounded-t-lg bg-slate-100">
        {person.src ? (
          <Image
            src={person.src}
            alt={person.name}
            fill
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

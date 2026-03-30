import React, { useMemo } from 'react';
import PeopleHeader from '../components/people/PeopleHeader';
import FacultyCard from '../components/people/FacultyCard';
import MemberCard from '../components/people/MemberCard';
import { PEOPLE } from '../data/peopleData';
import { motion } from 'framer-motion';

const SectionDivider = ({ title }) => (
  <div className="flex items-center gap-4 mb-10 w-full">
    <div className="w-12 h-px bg-slate-200 dark:bg-slate-700" />
    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white uppercase tracking-widest shrink-0">
      {title}
    </h2>
    <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
  </div>
);

const People = () => {
  // Segment data by category
  const faculty = useMemo(() => PEOPLE.filter((p) => p.category === 'Faculty'), []);
  const phdStudents = useMemo(() => PEOPLE.filter((p) => p.category === 'PhD Students'), []);
  const ugResearchers = useMemo(() => PEOPLE.filter((p) => p.category === 'UG Researchers'), []);
  const alumni = useMemo(() => PEOPLE.filter((p) => p.category === 'Alumni'), []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* Premium Hero Header */}
      <PeopleHeader />

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* FACULTY SECTION */}
          {faculty.length > 0 && (
            <div>
              <SectionDivider title="Faculty Investigators" />
              <div className="flex flex-col gap-6">
                {faculty.map((person, index) => (
                  <FacultyCard key={person.id} person={person} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* PHD STUDENTS SECTION */}
          {phdStudents.length > 0 && (
            <div>
              <SectionDivider title="PhD Scholars" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {phdStudents.map((person, index) => (
                  <MemberCard key={person.id} person={person} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* UG RESEARCHERS SECTION */}
          {ugResearchers.length > 0 && (
            <div>
              <SectionDivider title="Undergraduate Researchers" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ugResearchers.map((person, index) => (
                  <MemberCard key={person.id} person={person} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* ALUMNI SECTION */}
          {alumni.length > 0 && (
            <div>
              <SectionDivider title="Alumni Network" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-80 hover:opacity-100 transition-opacity duration-500">
                {alumni.map((person, index) => (
                  <MemberCard key={person.id} person={person} index={index} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
};

export default People;

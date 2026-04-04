import Hero from '@/components/sections/hero'
import SectionD from '@/components/sections/sectionD'
import SectionE from '@/components/sections/sectionE'
import SectionF from '@/components/sections/sectionF'
import SectionG from '@/components/sections/sectionG'
import React from 'react'

function Bca() {
  return (
		<main>
			<Hero id={"bca-hero"} />
			<SectionE id={"program-overview"} />
			<SectionF id={"highlights"} />
			<SectionG id={"career-pathways"} />
			<SectionD id={"bca-cta"} />
		</main>
  );
}

export default Bca
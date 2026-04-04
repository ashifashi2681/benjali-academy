import HeroC from '@/components/sections/heroC'
import SectionA from '@/components/sections/sectionA'
import SectionB from '@/components/sections/sectionB'
import SectionC from '@/components/sections/sectionC'
import SectionD from '@/components/sections/sectionD'
import React from 'react'

function AdvancedStudies() {
  return (
		<main>
			<HeroC id={"adv-studies-hero"} />
			<SectionA id={"tracking"} />
			<SectionB id={"research-innovation"} />
			<SectionC id={"enrollment"} />
			<SectionD id={'adv-std-cta'}/>
		</main>
  );
}

export default AdvancedStudies
import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdAnalytics, MdArchitecture, MdShield, MdToken } from "react-icons/md";

function SectionG({id}) {
	const data = [
		{
			icon: <MdArchitecture />,
			dataIcon: "architecture",
			title: "Software Architect",
		},
		{
			icon: <MdToken />,
			dataIcon: "token",
			title: "Product Designer",
		},
		{
			icon: <MdAnalytics />,
			dataIcon: "analytics",
			title: "Systems Analyst",
		},
		{
			icon: <MdShield />,
			dataIcon: "shield person",
			title: "Security Expert",
		},
	];
	return (
		// Career Pathways
		<Section id={id}>
			<div className="bg-surface rounded-3xl p-8 lg:p-16 shadow-lg border border-border/50 overflow-hidden relative">
				<div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<Heading classNameName="mb-6">Career Outcomes</Heading>
						<p className="main-description text-text-secondary mb-6">
							Our graduates don't just find jobs; they build
							careers in high-impact organizations across the
							globe.
						</p>
						<div className="grid sm:grid-cols-2 gap-6">
							{data?.map((itm, i) => (
								<Card key={i} icon={itm.icon} dataIcon={itm.dataIcon} title={itm.title} />
							))}
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-4">
							<img
								className="rounded-2xl w-full h-48 object-cover shadow-md"
								data-alt="A focused developer working on multiple monitors showing complex code structures in a modern minimalist office"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR25npq6UP5kWc9JH-02Eprxr5wpoCcst9L7wA0Y1Q46Ei42Qr_MPjU-OK0v_sAPat0zw0a99R4Aj0tGiHHY9fltblfXFORe38zQiFP6iJfdA1sKcvRDRDwPPNHYSJSiMv-Kh3Ad1dlm_UpSjrPwDtgcZvjhRsE9WHfNm0wQuIX4fvEREEFB4GXNMf1VxIOA4gpRwBRUeoQjiKB11s0AXGYazeRBFD4xvURanFPCKpmAyAyBusVRE3tL1QHXS5CDu1KaJNmdvkRDcM"
							/>
							<img
								className="rounded-2xl w-full h-64 object-cover shadow-md"
								data-alt="A creative professional sketching user interface wireframes on a tablet with vibrant colors and sleek design tools"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSUBPGY7et0AWygrshDAsGbIx652IIuzg9FazAxnZohbrzGzMa4O6YWgFLewjg4s3-68DBjFRPemGu7CsD-qXIT3Y-_OOuNEbOWiJIwZmpovbmLnRy8mjAtNeTaAGC6In_X9D6qxTXeJOH4-vLaIxRjCbZYYP77Y4liq-iNG85uP3zkUmr-1_bwtL7a3XpUq73SO6wd24LDho7E7ZokepS9yS5_OGKB5zZ0BJANaUhnSFdhHVCex1LeH85VWqcMfIMqlFRTQ8SZL_0"
							/>
						</div>
						<div className="space-y-4 pt-8">
							<img
								className="rounded-2xl w-full h-64 object-cover shadow-md"
								data-alt="Data scientist analyzing complex digital charts and 3D data visualizations on a large screen in a dim lab setting"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD3cbx9DgaxBirJzhWznbXhY49TZYLWBd6Iy9q2dfyk8RN_F9lWv-cMv1F_xQrUKnd6DE1A3eNGvjpX3NfOJZwFBW0oR47OOBgyBUtG4-3p6idPpiHSHBb18C_4fm4qTY200wp7G06yc4LicZB2-8RG1eJTLLBJe2ojX0L9Wi8uFwK0aMg0iEmh3RUvcLEFLvVdg5OU3okvth_pAfEU8KsEw3VTdmn-jwRmb11sXndAqlmASIu8ML0RK5v6-wHBZjr9YblBNIo70KP"
							/>
							<img
								className="rounded-2xl w-full h-48 object-cover shadow-md"
								data-alt="Team of diverse tech professionals having a collaborative meeting around a white board in a bright workspace"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9D34oUzSDXwy1uh21VtgRyzSy12wvWXYjTkTHCIW4G08MkUqnmzRyF6BzvWw5PD08iA46iPagznBGr37rfhQwpTDCwYfWA8Ga0UKQsQKVDktY3GK1iNK7pHcuW811QB26w0-DvpA-QrbxtXKUWwLB7ET0JHwTJeYSj8XorLALgHMuJuG6ifIBdqqzdfpvf4o6Nag9-BgPBOb3wxSfOMq2oT8808_SzH1jaTGte0OHoaVORxflVCa21WA7BD9eayMZBJ1e15ViAjLO"
							/>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default SectionG;

const Card = ({ icon, dataIcon, title }) => (
	<div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/10">
		<span className="text-secondary-500 text-md" data-icon={dataIcon}>
			{icon}
		</span>
		<span className="font-semibold text-text-secondary text-sm">{title}</span>
	</div>
);

import { use, useState } from "react";
import type { TechnologyType } from "../TechnologiesType";
import AvailableTechnologies from "./AvailableTechnologies";
import SelectedTechnologies from "./SelectedTechnologies";

export interface TechnologiesProps {
    fetchTechnologies: Promise<TechnologyType[]>;
}

export default function Technologies({ fetchTechnologies }: TechnologiesProps) {
    const AllTechnologies = use(fetchTechnologies);
    const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyType[]>([]);
    return (
        <div className="container mx-auto px-4">
            <div className="text-center md:text-start  py-8">
                <span className="text-text-primary font-bold text-3xl">
                    Explore the </span>
                <span className="font-bold text-3xl brand-color">
                    Technologies</span>
                <p className="text-text-secondary">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <AvailableTechnologies AllTechnologies={AllTechnologies} setSelectedTechnologies={setSelectedTechnologies}
                    selectedTechnologies={selectedTechnologies} />
                <SelectedTechnologies selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
            </div>
        </div>
    )
}
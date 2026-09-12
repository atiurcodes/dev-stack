import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../TechnologiesType";
import AvailableTechnologiesCard from "./AvailableTechnologiesCard";

export interface AvailableTechnologiesProps {
    AllTechnologies: TechnologyType[];
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: Dispatch<SetStateAction<TechnologyType[]>>;
}

export default function AvailableTechnologies({ AllTechnologies, selectedTechnologies, setSelectedTechnologies }: AvailableTechnologiesProps) {
    return (
        <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    AllTechnologies.map(technology => <AvailableTechnologiesCard key={technology.id} technology={technology}
                        selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />)
                }
            </div>
        </div>
    )
}
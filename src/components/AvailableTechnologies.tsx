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
        <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    AllTechnologies.map((technology, index) => <AvailableTechnologiesCard key={index} technology={technology}
                        selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />)
                }
            </div>
        </div>
    )
}
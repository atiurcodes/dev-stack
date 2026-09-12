import type { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import type { TechnologyType } from "../TechnologiesType";
import { toast } from "react-toastify";


export interface SelectedTechnologiesCardProps {
    selectedTechnology: TechnologyType;
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: Dispatch<SetStateAction<TechnologyType[]>>;
}

export default function SelectedTechnologiesCard({ selectedTechnology, selectedTechnologies, setSelectedTechnologies }: SelectedTechnologiesCardProps) {
    const handleRemoveStackButton = (selectedTechnology: TechnologyType): void => {
        const remainingTechnologies = selectedTechnologies.filter(tech => tech.name !== selectedTechnology.name);
        setSelectedTechnologies(remainingTechnologies);
        toast.info(`${selectedTechnology.name} has been removed.`);
    }
    return (
        <div className="flex justify-between items-center border border-gray-100 rounded-xl px-4 py-2 gap-3">
            <div className="flex justify-center gap-2">
                <img src={selectedTechnology.icon} alt={selectedTechnology.name} width={50} height={50} />
                <div>
                    <h2 className="text-xl font-semibold text-[#0F172A]">{selectedTechnology.name}</h2>
                    <span className="text-sm text-[#64748B]">{selectedTechnology.category}</span>
                </div>
            </div>
            <span className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors duration-200 shrink-0"
                onClick={() => handleRemoveStackButton(selectedTechnology)}><IoClose size={35} /></span>
        </div>
    )
}
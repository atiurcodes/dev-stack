import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../TechnologiesType";
import SelectedTechnologiesCard from "./SelectedTechnologiesCard";

export interface SelectedTechnologiesProps {
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: Dispatch<SetStateAction<TechnologyType[]>>;
}

export default function SelectedTechnologies({ selectedTechnologies, setSelectedTechnologies }: SelectedTechnologiesProps) {
    const handleRemoveAllButton = (): void => {
        setSelectedTechnologies([]);
    }
    return (
        <div className="md:col-span-3 border border-gray-100 p-6 rounded-xl shadow-sm bg-base-100">
            <h2 className="text-[#0F172A] text-xl md:text-3xl font-semibold">Your Stack</h2>
            <p className="text-[#94A3B8] text-xl py-2">{selectedTechnologies.length ? `${selectedTechnologies.length} technology selected.` :
                'No technologies selected yet.'}</p>
            <div className="flex flex-col gap-2 pt-2 mb-6">
                {selectedTechnologies.length === 0 ? (
                    <div className="p-7 border-2 border-dotted border-gray-200 rounded-xl">
                        <p className="text-[#64748B] text-center">Your stack is empty.</p>
                    </div>
                ) : (
                    selectedTechnologies.map((selectedTechnology, index) => (
                        <SelectedTechnologiesCard
                            key={index}
                            selectedTechnology={selectedTechnology}
                            selectedTechnologies={selectedTechnologies}
                            setSelectedTechnologies={setSelectedTechnologies}
                        />
                    ))
                )}
            </div>
            {
                selectedTechnologies.length > 0 && (
                    <button className="btn btn-outline btn-secondary w-full hover:bg-red-500 hover:text-white text-xl font-semibold 
                    transition-colors duration-300"
                        onClick={handleRemoveAllButton}>
                        Remove All</button>
                )
            }
        </div>
    )
}
import { FaCheck, FaStar } from "react-icons/fa";
import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../TechnologiesType";
import { badgeColors } from "../constants/BadgeColors";
import { toast } from "react-toastify";


export interface AvailableTechnologiesCardProps {
    technology: TechnologyType;
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: Dispatch<SetStateAction<TechnologyType[]>>;
}

export default function AvailableTechnologiesCard({ technology, selectedTechnologies, setSelectedTechnologies }: AvailableTechnologiesCardProps) {
    const handleAddStuckButton = (technology: TechnologyType): void => {
        const newTechnologies = [...selectedTechnologies, technology];
        setSelectedTechnologies(newTechnologies);
        toast.success(`${technology.name} added to your stack successfully!`);
    }
    const isSelected = selectedTechnologies.some(sTech => sTech.id === technology.id);
    return (
        <div className={`border ${isSelected ? 'border-green-300' : 'border-gray-100'} p-6 rounded-xl shadow-sm bg-base-100 hover:-translate-y-1 hover:shadow-lg 
            transition-all duration-300`}>
            <div className="flex justify-between pb-5">
                <img src={technology.icon} alt={technology.name} width={35} height={35} />
                <h2 className={`px-3 py-1 rounded-full ${badgeColors[technology.badge]}`}>{technology.badge}</h2>
            </div>
            <h2 className="text-xl font-bold text-primary">{technology.name}</h2>
            <p className="text-[#64748B]">{technology.description}</p>
            <div className="divider"></div>
            <div className="flex flex-wrap items-center gap-3 pb-4">
                <button className="bg-base-200 px-2 py-1 rounded-md  shrink-0">{technology.category}</button>
                <span className="text-secondary shrink-0">{technology.difficulty}</span>
                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-yellow-500 fill-yellow-500"><FaStar size={20} /></span>
                    <span className="text-xl text-primary font-semibold">{technology.rating}</span>
                </div>
            </div>
            <button className={`${isSelected ? 'bg-green-200 text-green-500 cursor-not-allowed' : 'bg-primary text-white cursor-pointer'} w-full py-3 rounded-xl font-semibold`}
                disabled={isSelected}
                onClick={() => handleAddStuckButton(technology)}>
                {isSelected ? (
                    <>  <div className="flex items-center justify-center gap-2">
                        <FaCheck className="text-green-500" />
                        <span>Added to Stack</span>
                    </div>
                    </>
                ) : (
                    "Add to Stack"
                )}
            </button>
        </div>
    )
}
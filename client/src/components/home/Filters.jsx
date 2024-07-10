import { filterValues } from "../../constants"

const Filters = ({ filterValue, setFilterValue }) => {
    return (
        <div className="flex items-center max-sm:justify-between sm:gap-3">
            {filterValues.map((value, i) => (
                <div key={i} className={`${filterValue === value && 'border-b-2'} border-btn-1 px-2 sm:px-4 py-2 text-sm sm:text-base text-center cursor-pointer hover:border-b-2`} onClick={() => setFilterValue(value)}>
                    {value}
                </div>
            ))}
        </div>
    )
}

export default Filters
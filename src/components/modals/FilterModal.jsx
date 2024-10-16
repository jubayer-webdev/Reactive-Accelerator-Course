import PropTypes from "prop-types";

const FilterModal = ({ filterCategory }) => {
    return (
        <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-button"
            tabIndex="-1"
            id="filter-dropdown"
        >
            <div className="py-1" role="none">
                {filterCategory?.map((item) => (
                    <label
                        key={item?.id}
                        className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
                    >
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                            // id="filter-option-1"
                            id={item?.id}
                        />
                        <span className="ml-2">{item?.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

FilterModal.propTypes = {
    filterCategory: PropTypes.array.isRequired,
};

export default FilterModal;

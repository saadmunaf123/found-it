const Types = ["all", "lost", "found"];

const Categories = [
    "all",
    "Accessories",
    "Bags",
    "Books",
    "Clothing",
    "Documents",
    "Electronics",
    "Footwear",
    "Jewelry",
    "Keys",
    "Stationery",
    "Wallets",
];

const Statuses = ["all", "active", "claimed", "unclaimed", "recovered"];

const Search = () => {
    return (
        <div className="flex w-full flex-col gap-4 rounded border border-nav bg-box p-4 text-start font-space-mono text-[10px] font-medium uppercase tracking-widest sm:gap-5 sm:p-6 sm:text-[11px] md:tracking-[0.2em] transition delay-50 duration-250 hover:-translate-y-1  hover:shadow-lg">

            {/* Search Filters */}
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">

                {/* Search */}
                <div className="flex w-full flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="search">Search</label>

                    <input
                        className="w-full rounded border border-nav bg-white px-3 py-2 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
                        type="text"
                        id="search"
                        placeholder="What are you looking for?"
                    />
                </div>

                {/* Type */}
                <div className="flex w-full flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="type">Type</label>

                    <select
                        className="w-full rounded border border-nav bg-white px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                        id="type"
                    >
                        {Types.map((type) => (
                            <option key={type} value={type}>
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Category */}
                <div className="flex w-full flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="category">Category</label>

                    <select
                        className="w-full rounded border border-nav bg-white px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                        id="category"
                    >
                        {Categories.map((category) => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Status */}
                <div className="flex w-full flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="status">Status</label>

                    <select
                        className="w-full rounded border border-nav bg-white px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                        id="status"
                    >
                        {Statuses.map((status) => (
                            <option key={status} value={status}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            {/* Buttons */}
            <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-2">

                <button
                    className="w-full rounded px-4 py-2 text-gray-700 uppercase focus:outline-none focus:ring-2 focus:ring-gray-400 sm:w-auto"
                >
                    Clear
                </button>

                <button
                    className="w-full rounded bg-gray-800 px-4 py-2 text-white uppercase hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-600 sm:w-auto"
                >
                    Search
                </button>

            </div>

        </div>
    );
};

export default Search;
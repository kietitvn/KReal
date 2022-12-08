import Router from "next/router";

const SearchBox = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className="home1-advnc-search home9" onClick={handleSubmit}>
            <ul className="h1ads_1st_list mb0">
                <li className="list-inline-item">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Enter keyword..."
                        />
                    </div>
                </li>
                {/* End list-inline-item */}

                <li className="list-inline-item">
                    <div className="search_option_button">
                        <button
                            onClick={() => Router.push("/listing-list-v1")}
                            type="submit"
                            className="btn btn-thm"
                        >
                            Search
                        </button>
                    </div>
                </li>
                {/* End search_option_button */}
            </ul>
        </form>
    );
};

export default SearchBox;

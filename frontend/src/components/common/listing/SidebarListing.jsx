import Categorie from "./Categorie";
import FeaturedListings from "./FeaturedListings";
import FeatureProperties from "./FeatureProperties";
import FilteringItem from "./FilteringItem";

const SidebarListing = () => {
    return (
        <div className="sidebar_listing_grid1">
            <div className="sidebar_listing_list">
                <div className="sidebar_advanced_search_widget">
                    <FilteringItem />
                </div>
            </div>
            {/* End .sidebar_listing_list */}

            <div className="terms_condition_widget">
                <h4 className="title">Featured Properties</h4>
                <div className="sidebar_feature_property_slider">
                    <FeatureProperties />
                </div>
            </div>
            {/* End .Featured Properties */}

            <div className="terms_condition_widget">
                <h4 className="title">Categories Property</h4>
                <div className="widget_list">
                    <ul className="list_details">
                        <Categorie />
                    </ul>
                </div>
            </div>
            {/* End .Categories Property */}

            <div className="sidebar_feature_listing">
                <h4 className="title">Recently Viewed</h4>
                <FeaturedListings />
            </div>
            {/* End .Recently Viewed */}
        </div>
    );
};

export default SidebarListing;

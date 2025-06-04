const StickyHeading = () => {
  return (
    <div className="sticky-nav-tabs">
      <ul className="sticky-nav-tabs-container">
        <li className="list-inline-item nav-item active">
          <a className="sticky-nav-tab" href="#tab-1">
            Details
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a className="sticky-nav-tab" href="#tab-2">
            Features
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a className="sticky-nav-tab" href="#tab-3">
            Locations
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a className="sticky-nav-tab" href="#tab-4">
            Plans
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a className="sticky-nav-tab" href="#tab-5">
            Video
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a className="sticky-nav-tab" href="#tab-6">
            Reviews
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StickyHeading;

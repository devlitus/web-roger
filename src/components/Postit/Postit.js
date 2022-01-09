export const Postit = ({ text }) => {
  return (
    <div className="container">
      <div className="container-inner">
        <div className="sticky-container">
          <div className="sticky-outer">
            <div className="sticky">
              <svg width="0" height="0">
                <defs>
                  <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                    <path
                      d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                      strokeLinejoin="round"
                      strokeLinecap="square"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="sticky-content">
                <a href="service">
                  {" "}
                  <span>{text}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

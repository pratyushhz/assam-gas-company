import React from 'react';

const SidebarLayout = ({ leftContent, sidebarContent }) => {
  return (
    <div className="row">
      {/* Left Content */}
      <div className="col-sm-12 col-md-12 col-lg-8">
        {leftContent}
      </div>
      
      {/* Right Sidebar */}
      <div className="col-sm-12 col-md-12 col-lg-4">
        {sidebarContent}
      </div>
    </div>
  );
};

export default SidebarLayout;

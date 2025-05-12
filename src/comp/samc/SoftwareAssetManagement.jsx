import React from "react";

const SoftwareAssetManagement = () => {
  return (
    <div className="bg-white p-8  mx-auto">
      {/* Header Section */}
      <div className="text-[#EA993F] text-xl font-bold">
        Software Asset Management
      </div>

      {/* Areas of Mastery */}
      <div className="mt-8 flex gap-20 ">
        <h2 className="text-gray-900 text-[100px] w-1/2 leading-[100%] font-light mt-4">
          Optimize Your
          <br />
          Future
        </h2>
        <div className="w-1/2">
          <span className="bg-gray-900 text-white text-lg font-bold px-2">
            AREAS OF MASTERY
          </span>
          <div className="grid grid-cols-2 gap-4 mt-4 text-[#EA993F] text-sm">
            <div className="space-y-3">
              <div>SAM Advisory »</div>
              <div>SAM Health Check and Heat Map »</div>
              <div>SAM Program Design and Development »</div>
              <div>SAM Tool Selection and Evaluation »</div>
              <div>Policy Development »</div>
            </div>
            <div className="space-y-3">
              <div>Process Design and Improvement »</div>
              <div>Program and Project Management »</div>
              <div>Software Audit Defense »</div>
              <div>Stakeholder Engagement »</div>
              <div>Strategy and Governance »</div>
            </div>
          </div>
        </div>
      </div>

      {/* Budget and Importance Section */}
      <div className="mt-8 flex  gap-20">
        <div className="w-1/2">
          <div className="text-[#EA993F] text-[36px] leading-relaxed font-medium">
            Software takes up <span className="font-bold">20-35% </span> of the
            typical IT budget, and enterprise software purchasing and upgrades
            are on the rise.
          </div>
          <div className="mt-4 space-y-4">
            <img
              src="/path/to/image1.jpg"
              alt="Software Image 1"
              className="w-full h-auto"
            />
            <img
              src="/path/to/image2.jpg"
              alt="Software Image 2"
              className="w-full h-auto"
            />
            <img
              src="/path/to/image3.jpg"
              alt="Software Image 3"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-gray-900 text-[26px] font-light leading-relaxed">
            Our hyper-connected world runs on software. As your organization
            grows, so does the complexity of its software usage. Software asset
            management is a discipline that leads to substantial cost savings
            and operational efficiencies if done right.
          </div>
          <div className="mt-4 text-gray-900 text-sm font-light leading-relaxed ">
            Our Software Asset Management (SAM) experts help you save money,
            avoid compliance headaches, and mitigate risk by helping you
            establish a robust SAM program, SAM strategy, SAM governance,
            developing and designing SAM policies and processes, and advising on
            the right tools to maintain its oversight.
          </div>
          <div className="mt-8">
            <span className="bg-[#EA993F] text-white text-[30px] font-bold px-2 py">
              Our clients' Software Asset Management programs have resulted in:
            </span>
            <div className="mt-4 text-gray-900 text-sm font-light space-y-2">
              <div>› Reduced audit exposure</div>
              <div>› Mitigated financial risk to their organization</div>
              <div>› Reduced security risk from unauthorized software</div>
              <div>› Cybersecurity and SAM teams collaboration</div>
              <div>› Increased operational efficiency</div>
              <div>› Improved budgeting process and financial controls</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
    </div>
  );
};

export default SoftwareAssetManagement;

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: 'url("/images/nahteava.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "102%",
      }}
      className=" fixe bottom-0 left-0 w-full -z-1 bg-[#E4E4E4] text-[#313131] pt16 pb-10 h-[772px] overflowscroll"
    >
      <div className="max-w7xl mx-auto p  pt12 bordert border-gray-300 relative">
        {/* Top CTA */}
        <div className="grid grid-cols-12 flex-col md:flex-row justify-between items-start md:items-center pb12">
          <div className=" col-span-3 mb-6 md:mb-0 border-r"></div>
          <div className=" col-span-9 pt-4  mb-6 md:mb-0 border-l  border-[#ccc]">
            <h2 className="text-[38px] pl-6 font-medium text-[#121212] mb-2">
              How can we help you today?
            </h2>
            {/* <button className="bg-gray900 font-normal pb-10 group underline text-[24px] text-[#4A4A4A] hover:text-[#FF8200] cursor-pointer px-4 py-2 rounded  transition flex items-center justify-center">
              Let’s Talk
              <span className="absolute overflow-hidden w-4 h-3 ml-1 -mr-[126px] ">
                <span className="absolute text-amber-50 left-0 top-0 transition-all duration-300 group-hover:translate-x-2 opacity-100 group-hover:opacity-0">
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 5.25L11.6275 5.25L7.435 1.0575L8.5 0L14.5 6L8.5 12L7.4425 10.9425L11.6275 6.75L0.5 6.75V5.25Z"
                      fill="#4A4A4A"
                    />
                  </svg>
                </span>

                <span className="absolute text-amber-50 left-[-1rem] top-0 opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 5.25L11.6275 5.25L7.435 1.0575L8.5 0L14.5 6L8.5 12L7.4425 10.9425L11.6275 6.75L0.5 6.75V5.25Z"
                      fill="#FF8200"
                    />
                  </svg>
                </span>
              </span>
            </button> */}

            <button className="relative group text-[24px] text-[#4A4A4A] cursor-pointer px-6 py-2 mb-15 font-normal transition duration-300 hover:text-[#FF8200] after:content-[''] after:absolute after:bottom-2 after:left-6 after:h-[1px] after:w-[85%] after:bg-[#4A4A4A] hover:after:bg-[#FF8200] after:transition-all after:duration-300 hover:after:w-[85%]">
              Let’s Talk
              {/* Arrow Container */}
              <span className="absolute overflow-hidden w-4 h-3 ml-3 -mr-[115px] top-[50%] translate-y-[-50%]">
                {/* First Arrow (fade out on hover) */}
                <span className="absolute left-0 top-0 transition-all duration-300 group-hover:translate-x-2 opacity-100 group-hover:opacity-0">
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 5.25L11.6275 5.25L7.435 1.0575L8.5 0L14.5 6L8.5 12L7.4425 10.9425L11.6275 6.75L0.5 6.75V5.25Z"
                      fill="#4A4A4A"
                    />
                  </svg>
                </span>

                {/* Second Arrow (slides in on hover) */}
                <span className="absolute left-[-1rem] top-0 opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 5.25L11.6275 5.25L7.435 1.0575L8.5 0L14.5 6L8.5 12L7.4425 10.9425L11.6275 6.75L0.5 6.75V5.25Z"
                      fill="#FF8200"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-12 border- border-t border-[#ccc] ">
          {/* Copyright */}
          {/* <div className="grid grid-cols-12 border-b border-gray-200"> */}
          <div className="col-span-3 pt-4 relative ">
            <div className="absolute top-0 right-0 w-[1px] h-[120%] bg-[#CCCCCC] z-1"></div>
            <p className="text-[20px] col-span-3 borderr border-[#ccc] px-6">
              © 2014 - 2025 Nahteava, LLC. All rights reserved.
            </p>
          </div>
          <div className="col-span-9 border- border-[#ccc] pl-6 pt-4">
            {/* Services (2 columns) */}
            <div className="flex gap-20 pb-8 font-mark text-[20px]">
              <div className=" text-[#4A4A4A]">
                <h4 className="font-normal  text-[#9E9E9E] mb-3 text-[28px] font-mark">
                  Services
                </h4>
                <div className="flex gap-4 font-mark text-[20px]">
                  <div className="flex gap-10 font-mark text-[20px]">
                    <ul className="space-y-3 cursor-pointer">
                      <li className="hover:text-[#FF8200]">
                        Advisory Services
                      </li>
                      <li className="hover:text-[#FF8200]">
                        IT Asset Management
                      </li>
                      <li className="hover:text-[#FF8200]">AI Management</li>
                      <li className="hover:text-[#FF8200]">
                        Organization and Change
                      </li>
                    </ul>
                    <ul className="space-y-3 cursor-pointer">
                      <li className="hover:text-[#FF8200]">
                        Software Asset Management
                      </li>
                      <li className="hover:text-[#FF8200]">
                        Software Industry Consulting
                      </li>
                      <li className="hover:text-[#FF8200]">
                        Executive Strategy
                      </li>
                      <li className="hover:text-[#FF8200]">
                        Software Consulting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" text-[#4A4A4A]">
                <h4 className="font-normal  text-[#9E9E9E] mb-3 text-[28px] font-mark">
                  Company
                </h4>
                <div className="grid grid-cols-1 gap-2 font-mark text-[20px]">
                  <div className="flex gap-10 font-mark text-[20px]">
                    <ul className="space-y-3 cursor-pointer">
                      <li className="hover:text-[#FF8200]">Services</li>
                      <li className="hover:text-[#FF8200]">Insights</li>
                      <li className="hover:text-[#FF8200]">Industries</li>
                      <li className="hover:text-[#FF8200]">About Us</li>
                    </ul>
                    <ul className="space-y-3 cursor-pointer">
                      <li className="hover:text-[#FF8200]">Careers</li>
                      <li className="hover:text-[#FF8200]">Contact</li>
                      <li className="hover:text-[#FF8200]">Subscribe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="border- pr-32 text-[20px] font-mark px-0 border-gray-300 pt-10 pb-40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4  font-mark text-[#4a4a4a]">
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#FF8200]">
                  Terms & Conditions
                </a>
                <span>|</span>
                <a href="#" className="hover:text-[#FF8200]">
                  Privacy Policy
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#FF8200]">
                  LinkedIn
                </a>
                <span>|</span>
                <a href="#" className="hover:text-[#FF8200]">
                  Instagram
                </a>
                <span>|</span>
                <a href="#" className="hover:text-[#FF8200]">
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        {/* Background brand name */}
      </div>
    </footer>
  );
}

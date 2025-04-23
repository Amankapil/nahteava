// // components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full -z-1 bg-[#E4E4E4] text-[#313131] pt-16 pb-10 ">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top CTA */}
//         <div className="flex justify-between items-center border-t border-b border-[#C4C4C4] py-6">
//           <h2 className="text-2xl md:text-3xl font-medium">
//             How can we help you today?
//           </h2>
//           <a
//             href="#"
//             className="underline text-base font-medium flex items-center gap-1"
//           >
//             Let’s Talk →
//           </a>
//         </div>

//         {/* Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 text-sm text-[#313131]">
//           {/* Copyright */}
//           <div className="flex flex-col justify-between">
//             <p>© 2014 - 2025 Nahteava, LLC. All rights reserved.</p>
//           </div>

//           {/* Services & Company */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h4 className="font-semibold text-gray-400 mb-3">Services</h4>
//               <ul className="space-y-2">
//                 <li>Advisory Services</li>
//                 <li>IT Asset Management</li>
//                 <li>AI Management</li>
//                 <li>Organization and Change</li>
//                 <li>Software Asset Management</li>
//                 <li>Software Industry Consulting</li>
//                 <li>Executive Strategy</li>
//                 <li>Software Consulting</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold text-gray-400 mb-3">Company</h4>
//               <ul className="space-y-2">
//                 <li>Consulting Services</li>
//                 <li>Insights</li>
//                 <li>Industries</li>
//                 <li>About Us</li>
//                 <li>Careers</li>
//                 <li>Contact</li>
//                 <li>Subscribe</li>
//               </ul>
//             </div>
//           </div>

//           {/* Legal and Social */}
//           <div className="flex flex-col justify-between space-y-4">
//             <div className="flex gap-4 text-sm">
//               <a href="#" className="underline">
//                 Terms & Conditions
//               </a>
//               <span>|</span>
//               <a href="#" className="underline">
//                 Privacy Policy
//               </a>
//             </div>

//             <div className="flex gap-4 text-sm">
//               <a href="#" className="underline">
//                 LinkedIn
//               </a>
//               <span>|</span>
//               <a href="#" className="underline">
//                 Instagram
//               </a>
//               <span>|</span>
//               <a href="#" className="underline">
//                 X (Twitter)
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Big Background Text */}
//       <div className="absolute bottom-0 left-0 right-0 text-[#CFCFCF] text-[120px] font-bold opacity-30 leading-none z-0 select-none">
//         <div className="px-6 overflow-hidden whitespace-nowrap">nahteava</div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full -z-1 bg-[#E4E4E4] text-[#313131] pt-16 pb-10 ">
      <div className="max-w7xl mx-auto p  pt-12 border-t border-gray-300 relative">
        {/* Top CTA */}
        <div className="grid grid-cols-12 flex-col md:flex-row justify-between items-start md:items-center pb-12">
          <div className=" col-span-3 mb-6 md:mb-0 border-r">
            {/* <h2 className="text-2xl pl-4 font-medium text-gray-900 mb-2">
              How can we help you today?
            </h2>
            <a
              href="#"
              className="text-gray-900 pl-4 underline hover:text-blue-600 flex items-center gap-1"
            >
              Let’s Talk →
            </a> */}
          </div>
          <div className=" col-span-9 mb-6 md:mb-0 border-l  border-[#ccc]">
            <h2 className="text-[38px] pl-4 font-medium text-[#121212] mb-2">
              How can we help you today?
            </h2>
            <button className="bg-gray900 group underline text-[#4A4A4A] hover:text-[#FF8200] cursor-pointer px-4 py-2 rounded  transition flex items-center justify-center">
              Let’s Talk
              <span className="absolute overflow-hidden w-4 h-3 ml-1 -mr-[86px]">
                <span className="absolute text-amber-50 left-0 top-0 transition-all duration-300 group-hover:translate-x-2 opacity-100 group-hover:opacity-0">
                  {/* → */}
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

                {/* Second Arrow slides in from left on hover */}
                <span className="absolute text-amber-50 left-[-1rem] top-0 opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100">
                  {/* → */}
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
        <div className="grid grid-cols-12 border-b border-gray-200">
          {/* Copyright */}
          {/* <div className="grid grid-cols-12 border-b border-gray-200"> */}
          <div className="col-span-3">
            <p className="text-[20px] col-span-3 border-r border-[#ccc] px-4">
              © 2014 - 2025 Nahteava, LLC. All rights reserved.
            </p>
          </div>
          <div className="col-span-9">
            {/* Services (2 columns) */}
            <div className="">
              <h4 className="font-semibold text-gray-400 mb-2 text-[28px] font-mark">
                Services
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <ul className="space-y-1">
                  <li>Advisory Services</li>
                  <li>IT Asset Management</li>
                  <li>AI Management</li>
                  <li>Organization and Change</li>
                </ul>
                <ul className="space-y-1">
                  <li>Software Asset Management</li>
                  <li>Software Industry Consulting</li>
                  <li>Executive Strategy</li>
                  <li>Software Consulting</li>
                </ul>

                <div>
                  <h4 className="font-semibold text-gray-400 mb-2 text-[28px] font-mark">
                    Company
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <ul className="space-y-1">
                      <li>Consulting Services</li>
                      <li>Insights</li>
                      <li>Industries</li>
                      <li>About Us</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>Careers</li>
                      <li>Contact</li>
                      <li>Subscribe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* Company (2 columns) */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 pb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-600">
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              X (Twitter)
            </a>
          </div>
        </div>

        {/* Background brand name */}
        <div className="absolute bottom-0 left-0 w-full text-[160px] font-bold text-gray-200 opacity-30 select-none pointer-events-none leading-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 tracking-tighter">
            nahteava
          </div>
        </div>
      </div>
    </footer>
  );
}

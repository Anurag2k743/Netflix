import React from "react";

export default function NetflixFooter() {
  const footerLinks = [
    {
      links: ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    },
    {
      links: ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"],
    },
    {
      links: ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    },
    {
      links: ["Media Centre", "Terms of Use", "Contact Us"],
    },
  ];

  return (
    <footer className="bg-black text-gray-400 px-8 pt-10 pb-20 text-xl">
      <div className="container">
        <div className="space-y-6">
          {/* Contact Info */}
          <p>
            Questions? Call{" "}
            <a href="tel:000-800-919-1743" className="underline">
              000-800-919-1743
            </a>
          </p>

          {/* Footer Links */}
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {footerLinks.map((column, index) => (
              <div key={index} className="space-y-2">
                {column.links.map((link, idx) => (
                  <a href="#" key={idx} className=" hover:underline block">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Language Selector */}
          <div>
            <select className="bg-transparent border border-gray-600 px-2 py-1 rounded">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>

          {/* Footer Notes */}
          <p>Netflix India</p>
          <p className="text-lg text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <a href="#" className="underline">Learn more.</a>
          </p>
        </div>
      </div>

    </footer>
  );
}

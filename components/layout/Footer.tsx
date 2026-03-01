"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
  Sparkles,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./hover-footer";

function Footer() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Explore Components", href: "#" },
        { label: "Template", href: "#" },
        { label: "Snappy UI Pro", href: "#" },
        { label: "Snappy UI Pro Templates", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        {
          label: "Live Chat",
          href: "#",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-indigo-500" />,
      text: "hello@snappyui.com",
      href: "mailto:hello@snappyui.com",
    },
    {
      icon: <Phone size={18} className="text-indigo-500" />,
      text: "+91 9451220558",
      href: "tel:+919451220558",
    },
    {
      icon: <MapPin size={18} className="text-indigo-500" />,
      text: "Pune, Maharashtra",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
  ];

  return (
    <footer className="bg-white dark:bg-black relative h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-indigo-500 text-3xl font-extrabold">
                <Sparkles />
              </span>
              <span className="text-3xl font-bold">Snappy UI</span>
            </div>
            <p className="text-sm leading-relaxed">
              Snappy UI is a modern React and Next.js based UI Component
              Library.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-indigo-500 transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-indigo-500 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Snappy UI. All rights reserved.
          </p>
        </div>

        <div className="border-t border-transparent my-15 mb-15" />
      </div>

      <div className="lg:flex hidden h-[25rem] -mt-52 -mb-30">
        <TextHoverEffect text="Snappy" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;

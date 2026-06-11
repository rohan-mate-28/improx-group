import React from 'react';
import { Link } from 'react-router-dom';
import { departments, socialLinks, contactInfo } from '../data/departments';
import { SocialIcon, PhoneIcon, MailIcon, MapPinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-white/5">
      <div className="container-max section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-black text-lg">IX</div>
              <div>
                <span className="text-white font-bold text-xl">Improx</span>
                <span className="gradient-text font-bold text-xl">Group</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for consulting, technology, marketing, and business transformation — delivered with precision and purpose.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/50 transition-all duration-300 hover:scale-110"
                >
                  <SocialIcon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Departments</h3>
            <ul className="space-y-2">
              {departments.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <Link to={`/departments/${dept.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">More Services</h3>
            <ul className="space-y-2">
              {departments.slice(6).map((dept) => (
                <li key={dept.id}>
                  <Link to={`/departments/${dept.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {dept.name}
                  </Link>
                </li>
              ))}
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group">
                  <PhoneIcon size={16} className="text-primary-400 flex-shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors">
                  <MailIcon size={16} className="text-primary-400 flex-shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPinIcon size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Improx Group. All rights reserved.</p>
          <p className="text-slate-500 text-sm">{contactInfo.website}</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

// Mock DB function implementation for now, avoiding TS errors for missing lib.
const getFooterContent = async () => {
  return {
    company_description: "Your premium destination for high-performance computing hardware, enterprise solutions, and expert tech repair. We deliver reliability and speed across the nation.",
    address: "11 Glassan Lodge, Prospect Wood, Co. Longford, N39 W1K6, Irlanda",
    phone: "+353 83 164 5420",
    email: "support@techfix-it.ie",
    copyright_text: `© ${new Date().getFullYear()} TechFix-It Shop. All rights reserved.`
  };
};

export default async function Footer() {
  const content = await getFooterContent();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
             <span className={styles.logoText}>TechFix-<span className={styles.logoAccent}>It</span></span>
            <p className={styles.description}>
              {content.company_description}
            </p>
            <div className={styles.socials}>
              <Link href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={20} /></Link>
              <Link href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={20} /></Link>
              <Link href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={20} /></Link>
              <Link href="#" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/pricing">Pricing Plans</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.icon} />
                <span>{content.address}</span>
              </li>
              <li>
                <Phone size={18} className={styles.icon} />
                <span>{content.phone}</span>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <span>{content.email}</span>
              </li>
            </ul>
          </div>

           {/* Column 4: Newsletter */}
           <div className={styles.col}>
            <h4 className={styles.heading}>Newsletter</h4>
            <p className={styles.text}>Subscribe to get the latest tech news and updates.</p>
            <form className={styles.form}>
              <input type="email" placeholder="Your email address" className={styles.input} />
              <button type="submit" className={styles.submitBtn}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{content.copyright_text}</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import './Certifications.css';

const certifications = [
  { name: 'REACT JS', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591327/Nxtwave_12_mhesix.jpg', link: 'https://certificates.ccbp.in/intensive/react-js?id=MIVLXHFTUD' },
  { name: 'Responsive Design Using Flexbox', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591326/Nxtwave_11_sb5wnr.jpg', link: 'https://certificates.ccbp.in/intensive/flexbox?id=JKOYREBYNJ' },
  { name: 'JavaScript Essentials', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591323/Nxtwave_10_sybew3.jpg', link: 'https://certificates.ccbp.in/intensive/javascript-essentials?id=TVAPIPZQDG' },
  { name: 'Spring Boot', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591269/Nxtwave_1_hiwop8.jpg', link: 'https://certificates.ccbp.in/intensive/spring-boot?id=GJJRRRQXVO' },
  { name: 'Java Fundamentals', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705586118/iqsb1zayhwwp9uarpgxd.png', link: 'https://certificates.ccbp.in/intensive/java-fundamentals?id=HIFLZHKWAZ' },
  { name: 'Build Your Own Dynamic Web Application', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591321/Nxtwave_3_khyhvk.jpg', link: 'https://certificates.ccbp.in/intensive/dynamic-web-application?id=LTZSUZPTYR' },
  { name: 'Programming Foundations With Python', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591318/Nxtwave_4_ojigyh.jpg', link: 'https://certificates.ccbp.in/intensive/programming-foundations?id=UPGBIXSWZB' },
  { name: 'Developer Foundations', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591322/Nxtwave_5_xln414.jpg', link: 'https://certificates.ccbp.in/intensive/developer-foundations?id=FZGSHALPRC' },
  { name: 'Introduction To Databases', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591320/Nxtwave_7_pmnvje.jpg', link: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=VKCFPZDPXZ' },
  { name: 'Build Your Own Responsive Website', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591326/Nxtwave_8_cllhol.jpg', link: 'https://certificates.ccbp.in/intensive/responsive-website?id=OLOGUQSOOY' },
  { name: 'Build Your Own Static Website', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591331/Nxtwave_9_ewapog.jpg', link: 'https://certificates.ccbp.in/intensive/static-website?id=RJCLTTPPXR' },
  { name: 'XPM 4.0 Fundamentals', image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705591330/Nxtwave_6_bxiohx.jpg', link: 'https://certificates.ccbp.in/intensive/xpm-4-0-fundamentals?id=XIHMEZCQNF' }
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2 className="heading d-flex flex-row justify-content-center pt-4 pb-3">Certifications</h2>
      <div className="certifications">
        {certifications.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <img className="certificate-image" src={certificate.image} alt={`${certificate.name} certificate`} />
            </a>
            <p className="certificate-name">{certificate.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

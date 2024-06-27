import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Python', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597836/python-logo-only_xrfmzk.png' },
  { name: 'Java', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597834/kisspng-logo-java-runtime-environment-programming-language-java-util-concurrentmodificationexception-%C3%96mer-5b6766ab5dba25.7100170215335031473839_t87btd.png' },
  { name: 'HTML', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597834/kisspng-html-web-design-scalable-vector-graphics-world-wid-html5-icon-hd-5ab0c85c377aa0.0639325615215350682273_w77fgp.png' },
  { name: 'CSS', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597836/kisspng-css3-cascading-style-sheets-computer-icons-html-emblem-5ac245f107ae31.3014101515226813290315_xp2dyg.png' },
  { name: 'JavaScript', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597838/kisspng-javascript-logo-html-comment-blog-5ae63c23139110.5436874015250381150802_sysaha.png' },
  { name: 'React js', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597837/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081_zfxcrs.png' },
  { name: 'SQLite', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597836/sqlite-database-android-mysql-android-b24c17b2c1d393750429c198789a35a6_inozga.png' },
  { name: 'Bootstrap', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597834/kisspng-bootstrap-responsive-web-design-web-development-lo-5af676c0755361.6918533815261016964806_uvr4mc.png' },
  { name: 'Spring Boot', imgSrc: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1705597835/Daco_4589658_jeotdm.png' }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="logo-card">
            <img className="logo-image" src={skill.imgSrc} alt={`${skill.name} image`} />
            {/* <p className="logo-name">{skill.name}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

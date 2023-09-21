import React from "react";
import styles from "./components.module.css";
import Image from "next/image";
import testImage from "../assets/testImage.jpg";
import { Button } from "flowbite-react";
const DonateUs = () => {
  return (
    <>
      
      <div className={styles.AboutSection} >
        <div className={styles.AboutBody}>
          <div className={styles.BodyAboutus}>
            Navsanjeevan social trust is a non-profit organization working since
            2013 for the rights of marginalized communities in the state of
            Maharashtra. Navsanjeevan social trust-based in Pune has been
            working with dedication for the development of the people living in
            the underdeveloped and marginalized areas of different districts in
            Maharashtra. This trust mainly works on Skill Development Program
            for Quality Education and better livelihood opportunities of the
            underprivileged. The organization is providing the necessary push
            for livelihood enhancement through Skill development programs. The
            trust focuses on women empowerment through awareness generation on
            social issues through self-help groups across the district,
            alleviating poverty of the Rural households by sustainable
            development.
          </div>
          <div className={styles.buttonSection}>
            <div className={styles.lSection}>
              <Button>Our Story</Button>
              <Button>Our Team</Button>
            </div>
            <div className={styles.rSection}>
              <Button>Our Approach</Button>
              <Button>Our Team</Button>
            </div>
          </div>
        </div>
        <div className={styles.ImageSection}>
          <Image src={testImage} width={50} height={50} alt="testImage" />
        </div>
      </div>
    </>
  );
};

export default DonateUs;

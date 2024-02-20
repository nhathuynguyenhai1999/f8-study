import React from 'react';
import styles from './styles.module.scss';

function ContactUs() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since.Lorem Ipsum is simyp.
          </p>
          <div className={styles.contact}>
            <div className={styles['contact-icon']}></div>
            <p>5 Avenue Anatole France 75007</p>
          </div>
        </div>
        <div className={styles.input}>adasdas</div>
        <div className={styles.input}>asdasdd</div>
      </div>
    </div>
  );
}
export default ContactUs;

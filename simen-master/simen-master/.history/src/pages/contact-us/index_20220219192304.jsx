import React from 'react';
import styles from './styles.module.scss';

import { Input } from 'antd';

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
            <div className={styles['contact-box']}>
              <ion-icon name="location"></ion-icon>
              <p> 5 Avenue Anatole France 75007</p>
            </div>
            <div className={styles['contact-box']}>
              <ion-icon name="call"></ion-icon>
              <p> +00-123-456-789</p>
            </div>
            <div className={styles['contact-box']}>
              <ion-icon name="mail-outline"></ion-icon>
              <p> contact@amoda.com</p>
            </div>
          </div>
        </div>
        <div className={styles.input}>
          <p>Send an email. All fields with an * are required.</p>
          <div className={styles['input-box']}>
            <div className={styles['input-group']}>
              <Input className={styles.input} placeholder="Your email here" />
              <Input className={styles.input} placeholder="Your email here" />

              <Input className={styles.input} placeholder="Your email here" />
            </div>
            <div className={styles['input-group']}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;

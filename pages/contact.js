import Head from 'next/head';

import LazyLoad from 'react-lazyload';

import { motion } from 'framer-motion';
import { fullName } from '../shared/constants';

export default function Contact() {
  return (
    <>
      <Head>
        <title>{fullName} | Contact</title>
      </Head>
      <LazyLoad height={300}>
        <div className="contact-hero"></div>
      </LazyLoad>
      <section className="grey-background contact-card-container">
        <motion.div
          className="white-contact-card "
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <h1>Contact</h1>

          <form
            action="https://formspree.io/itruong25.it@gmail.com"
            method="POST"
            autoComplete="off"
            name="contact-form"
          >
            <fieldset>
              <legend className="visuallyHidden">
                Please fill out all inputs of the following form if you'd like
                to get in touch.
              </legend>
              <div className="personal-input">
                <label htmlFor="name"> Name</label>
                <input type="name" required id="name" name="name" />

                <label htmlFor="email-address">Email</label>
                <input
                  type="email"
                  required
                  id="email-address"
                  name="_replyto"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <button className="btn-primary form-submit" type="submit">
                Submit
              </button>
            </fieldset>
          </form>
        </motion.div>
      </section>
    </>
  );
}

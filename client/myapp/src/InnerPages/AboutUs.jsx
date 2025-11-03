import React from 'react'
import innerstyles from "./innerstyles.module.css"

const AboutUs = () => {
  return (
    <main>
      <section className={innerstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 ${innerstyles.aboutus}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Welcome to Sigma Infotec</h2>
              <p>
                <strong>Sigma Infotec</strong> empowers businesses to thrive in the digital era with 
                innovative technology, tailored solutions, and measurable results. With a strong focus 
                on <strong>innovation</strong>, <strong>reliability</strong>, and <strong>customer success</strong>, 
                we deliver digital experiences that drive growth and transformation.
              </p>

              <h3>Who We Are</h3>
              <p>
                We are a full-service technology and digital solutions provider. Our expertise spans 
                <strong> Web & Mobile Solutions</strong>, <strong>Digital Transformation</strong>, and 
                <strong> Integrated Digital Marketing</strong>, offering end-to-end services designed to 
                empower businesses of all sizes.
              </p>

              <h3>What We Do</h3>
              <ul>
                <li>
                  <strong>Web & Mobile Solutions:</strong> UI/UX, website & mobile app development, 
                  e-commerce, API integrations, and support.
                </li>
                <li>
                  <strong>Digital Transformation:</strong> AI-powered solutions, data analytics, MVP 
                  development, and business intelligence.
                </li>
                <li>
                  <strong>Integrated Digital Marketing:</strong> SEO, content marketing, PPC, social 
                  media, ASO, and lead nurturing strategies.
                </li>
              </ul>

              <h3>Our Mission</h3>
              <p>
                Our mission is simple – to empower businesses with <strong>innovative technology</strong> 
                and <strong>smart marketing solutions</strong> that accelerate growth, improve efficiency, 
                and build long-lasting customer relationships.
              </p>

              <h3>Why Choose Us</h3>
              <ul>
                <li><strong>Client-Centric Approach:</strong> Solutions tailored to your goals.</li>
                <li><strong>Innovation-Driven:</strong> Leveraging the latest technologies.</li>
                <li><strong>End-to-End Support:</strong> From concept to execution.</li>
              </ul>

              <p>
                At <strong>Sigma Infotec</strong>, we don’t just provide services – 
                <em> we partner in your success story.</em>
              </p>
              <p>
                <strong>Let’s build the future of your business together.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs 
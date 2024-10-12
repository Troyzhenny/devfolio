const Resume = () => {
  return (
    <div className="text-gray">
      <h2>Resume</h2>

      <section>
        <h3>Relevant Experience</h3>
        <div>
          <h4>Lead Engineer • Upstatement</h4>
          <span>Mar 2022 - Present</span>
          <ul>
            <li>
              Build and ship high-quality, robust production code for a diverse
              array of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more.
            </li>
            <li>
              Work alongside creative directors to lead the research,
              development, and architecture of technical solutions to fulfill
              business requirements.
            </li>
            <li>
              Collaborate with designers, project managers, and other engineers
              to transform creative concepts into refined digital experiences at
              an agile cadence.
            </li>
            <li>
              Provide leadership within engineering department through close
              collaboration, knowledge shares, and mentorship.
            </li>
            <li>
              Lead company-wide accessibility initiatives such as creating
              documentation for best practices, establishing a standard
              accessibility checklist for developers, and facilitating knowledge
              shares.
            </li>
          </ul>
        </div>

        <div>
          <h4>Developer • PBRP</h4>
          <span>Fall 2023 - 2024</span>
          <ul>
            <li>
              Collaborated with designers and other engineers on various game
              user interfaces for the PBRP Grand Theft Auto V game server.
            </li>
          </ul>
        </div>

        <div>
          <h4>UI Engineer Co-op • Apple</h4>
          <span>July - Dec 2017</span>
          <ul>
            <li>
              Developed and styled interactive web applications for Apple Music
              using Ember and SCSS.
            </li>
            <li>
              Built and shipped the Apple Music Extension for Facebook Messenger
              leveraging third-party and internal API integrations.
            </li>
            <li>
              Architected and implemented the user interface of Apple
              Music&apos;s embeddable web player widget for in-browser user
              authorization and full song playback.
            </li>
            <li>
              Contributed extensively to the creation of MusicKit JS, a
              public-facing JavaScript SDK for embedding Apple Music players
              into web applications.
            </li>
          </ul>
        </div>

        <div>
          <h4>Software Engineer Co-op • Starry</h4>
          <span>July - Dec 2016</span>
          <ul>
            <li>
              Engineered and improved major features of Starry&apos;s
              customer-facing Android web app using ES6, Handlebars, Backbone,
              Marionette, and CSS.
            </li>
            <li>
              Proposed and implemented scalable solutions to issues identified
              with cloud services and applications responsible for communicating
              with the Starry Station internet router.
            </li>
            <li>
              Collaborated with designers and other developers to ensure a
              cohesive user experience.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Skills</h3>
        <div>
          <h4>Programming Languages:</h4>
          <p>JavaScript, HTML, CSS, SCSS</p>
        </div>
        <div>
          <h4>Libraries & Frameworks:</h4>
          <p>Vue, Tailwind, React</p>
        </div>
        <div>
          <h4>Tools & Platforms:</h4>
          <p>Git, GitHub, GitLab, Netlify, Figma, Affinity Designer</p>
        </div>
      </section>

      <section>
        <h3>Selected Projects</h3>
        <ul>
          <li>
            Build a Spotify Connected App video course that teaches how to build
            a web app with the Spotify API. Topics covered include the
            principles of REST APIs, user auth flows, Node, Express, React,
            Styled Components, and more.
          </li>
          <li>
            Surge POS: A point-of-sale software built in React, providing a
            better solution for a pizza shop or any business selling a product.
          </li>
          <li>Devfolio: My Dev portfolio, created in Vue.js.</li>
          <li>
            PlayStation.com: Recreation of PlayStation.com with some personal
            touches.
          </li>
        </ul>
      </section>

      <section>
        <h3>Interests</h3>
        <p>Food, the beach, cars, soccer</p>
      </section>

      <section>
        <a href="#">Download Resume</a>
      </section>
    </div>
  );
};

export default Resume;

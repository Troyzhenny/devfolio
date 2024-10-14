const Resume = () => {
  return (
    <div className="cv-wrapper text-gray">
      <section>
        <h3>Relevant Experience</h3>
        <div>
          <h3>Lead Engineer • Upstatement</h3>
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
          <h3>Frontend Engineer • PBRP</h3>
          <span>Fall 2023 - 2024</span>
          <ul>
            <li>
              Collaborated with designers and other engineers on various game
              user interfaces for the PBRP Grand Theft Auto V game server.
            </li>
          </ul>
        </div>

        <div>
          <h3>UI Engineer Co-op • Apple</h3>
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
      </section>

      <section>
        <h3>Interests</h3>
        <p>Food, the beach, cars, soccer</p>
      </section>
      <br />
      <br />
      <section>
        <a href="/resume.pdf">Download full resume</a>
      </section>
    </div>
  );
};

export default Resume;

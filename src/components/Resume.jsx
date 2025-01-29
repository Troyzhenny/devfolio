const Resume = () => {
  return (
    <div className="cv-wrapper text-gray">
      <section>
        {/* <div>
          <h3 className="text-white">Lead Engineer • Upstatement</h3>
          <span>Mar 2022 - Present</span>
          <ul>
            <li>
              Build and ship high-quality, robust production code for a diverse
              array of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more.
            </li>
            <br />
            <li>
              Work alongside creative directors to lead the research,
              development, and architecture of technical solutions to fulfill
              business requirements.
            </li>
            <br />
            <li>
              Collaborate with designers, project managers, and other engineers
              to transform creative concepts into refined digital experiences at
              an agile cadence.
            </li>
            <br />
            <li>
              Provide leadership within engineering department through close
              collaboration, knowledge shares, and mentorship.
            </li>
            <br />
            <li>
              Lead company-wide accessibility initiatives such as creating
              documentation for best practices, establishing a standard
              accessibility checklist for developers, and facilitating knowledge
              shares.
            </li>
          </ul>
        </div> */}

        <div>
          <h3 className="text-white">Frontend Engineer • PBRP</h3>
          <span>Sep 2023 - Current</span>
          <ul>
            <li>
              Collaborate with designers and other engineers on various game
              user interfaces for the PBRP Grand Theft Auto V server.
            </li>
            <br />
            <li>
              Provide designing assistance to designers to build and refine user
              interfaces.
            </li>
            <li>
              Provide leadership within engineering department through close
              collaboration, knowledge shares, and mentorship.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white">Frontend Engineer • Chingu</h3>
          <span>Nov - Dec 2024</span>
          <ul>
            <li>
              Developed and styled a solar appointment schedule and dashboard
              for Solarite, using React, Tailwind, and Supabase
            </li>
            <br />
            <li>
              Built and shipped a resident portal to allow residents to view,
              create, and cancel services and appointments.
            </li>
            <li>
              Contributed extensively to the creation of the solarite website.
            </li>
            <br />
            <li>
              Contributed extensively to the creation of the user interface, and
              all other digital assets used in the application.
            </li>
            <li>
              Received a{" "}
              <a href="/files/ChinguCert.pdf" target="_blank">
                <ins className="text-white hover-gray">
                  certificate of completion.
                </ins>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <section className="download--wrapper flex-center">
        <a
          href="/files/TevinCRes24.pdf"
          target="_blank"
          className="flex-center hover-white transition-all gap-sm"
        >
          View full resume ↗
        </a>
      </section>
    </div>
  );
};

export default Resume;

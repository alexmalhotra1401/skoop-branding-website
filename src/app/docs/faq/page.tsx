"use client";

// GLOBAL CUSTOM HOOKS
import useClipboard from "hooks/useClipboard";
// GLOBAL CUSTOM COMPONENTS
import DocLayout from "components/layouts/DocLayout";
import CodeHighlight from "components/reuseable/CodeHighlight";

export default function FAQ() {
  // copy button for code copy
  useClipboard();

  return (
    <DocLayout
      pageTitle="FAQ"
      description="Find answers to some frequently asked questions here."
    >
      <section id="snippet-1" className="wrapper py-16">
        <h2 className="mb-3">Frequently Asked Questions</h2>
        <p className="lead mb-5">
          If you don't see an answer to your question here, please feel free to
          contact us with the links below:
        </p>
        <a
          href="https://support.ui-lib.com"
          className="btn btn-primary rounded-pill me-2"
          target="_blank"
          rel="noreferrer"
        >
          Contact Form
        </a>

        <a
          href="https://themeforest.net/item/sandbox-modern-multipurpose-react-template/40486293/comments"
          className="btn btn-soft-primary rounded-pill"
          target="_blank"
          rel="noreferrer"
        >
          Discussions Page
        </a>

        <div className="accordion accordion-wrapper mt-10" id="accordion">
          <div className="card accordion-item">
            <div className="card-header" id="faq-2">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-2"
                aria-expanded="false"
                aria-controls="faq-collapse-2"
              >
                Why was SKOOP created?
              </button>
            </div>

            <div
              id="faq-collapse-2"
              className="accordion-collapse collapse"
              aria-labelledby="faq-2"
            >
              <div className="card-body">
                <p>
                  SKOOP was designed to solve a sales, marketing, and
                  communication problem for LinkedIn and other platforms.
                </p>

                <p>
                  On LinkedIn specifically, there is a widespread issue of spam,
                  automation, and bots that are purely selling and not
                  networking or building relationships.
                </p>

                <p>
                  As a result, the “conversions to replies” from outreach have
                  dropped significantly specifically with LinkedIn direct
                  messages, and with the effectiveness of post content and
                  comments.
                </p>

                <p>
                  SKOOP allows other individuals to know you are a real person,
                  not automation and you specifically are taking the time to
                  communicate a personalized video or message to them.
                </p>

                <p>
                  This combines a little text with a short candid video and the
                  ability to personalize the title of the video in less time
                  than it would take you to write out a message manually.
                </p>

                <p>
                  Converting 2x to 10x better than text communication alone!
                </p>

                <p>
                  Allowing you to slow down and work on the relationship and
                  build a more personable business faster.
                </p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-6">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-6"
                aria-expanded="false"
                aria-controls="faq-collapse-6"
              >
                Is there training so I or my team can be more effective using
                SKOOP?
              </button>
            </div>

            <div
              id="faq-collapse-6"
              className="accordion-collapse collapse"
              aria-labelledby="faq-6"
            >
              <div className="card-body">
                <p>YES. There are 3 things you can do.</p>

                <p>
                  <b>First- </b>
                  There are Zoom group meetings for onboarding, demos, and
                  strategy, almost weekly. Pick a day and time that works best
                  for you{" "}
                  <a
                    href="https://go.oncehub.com/SKOOP"
                    target="_blank"
                    className="text-primary"
                  >
                    https://go.oncehub.com/SKOOP
                  </a>
                </p>

                <p>
                  <b>Second- </b>
                  once you get a copy of SKOOP installed in your Chrome browser
                  and you open it - there are real-time step-by-step tutorials
                  for basic real-world functionality.
                </p>

                <p>
                  So you can reduce the learning curve and start using it right
                  “out of the box” (so to speak).
                </p>

                <p>
                  <b>Third- </b> click on the <b>Help Icon</b> (“?”){" > "}
                  <b>Helper Videos</b>. You will see many videos for particular
                  communication seniors and feature sets.
                </p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-3">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-3"
                aria-expanded="false"
                aria-controls="faq-collapse-3"
              >
                Why do I need a Chrome Browser to use SKOOP?
              </button>
            </div>

            <div
              id="faq-collapse-3"
              className="accordion-collapse collapse"
              aria-labelledby="faq-3"
            >
              <div className="card-body">
                <p>
                  “SKOOP - Instant Video for LinkedIn & More” is an application
                  where part of it is wrapped in a Chrome Extension. It sits
                  right on top of your Chrome browser so you can view LinkedIn,
                  Gmail, Microsoft 365, and other sites while making use of
                  SKOOP functionality.
                </p>

                <p>
                  Other Internet browsers that have a Chrome or Chromium
                  foundation may or may not work with SKOOP.
                </p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-8">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-8"
                aria-expanded="false"
                aria-controls="faq-collapse-8"
              >
                What is a Chrome Extension?
              </button>
            </div>

            <div
              id="faq-collapse-8"
              className="accordion-collapse collapse"
              aria-labelledby="faq-8"
            >
              <div className="card-body">
                <p>
                  A Chrome extension is a software program that adds
                  functionality to the Google Chrome browser. Extensions can
                  customize the user interface, modify the web, and observe
                  browser events. They can be used to perform a variety of
                  tasks, such as:
                </p>

                <ul>
                  <li>Blocking ads</li>
                  <li>Managing passwords</li>
                  <li>Adding notes</li>
                  <li>Proofing digital copy</li>
                  <li>Tracking SEO analytics</li>
                  <li>Improving productivity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-9">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-9"
                aria-expanded="false"
                aria-controls="faq-collapse-9"
              >
                How do I become an affiliate?
              </button>
            </div>

            <div
              id="faq-collapse-9"
              className="accordion-collapse collapse"
              aria-labelledby="faq-9"
            >
              <div className="card-body">
                <p>
                  Simply click on the dashboard icon on the SKOOP app or the
                  website {" > "} login {" > "} click on the “Become an
                  Affiliate” button {" > "} follow all the STRIPE account
                  processes.
                </p>

                <p>
                  {" "}
                  Make sure to complete the entire process or you will not be
                  provided an Affiliate code (needed to track payments) or your
                  distribution percentages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

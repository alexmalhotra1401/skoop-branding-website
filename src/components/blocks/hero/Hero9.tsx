"use client";

import Typewriter from "typewriter-effect";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate, zoomInAnimate } from "utils/animation";

export default function Hero9() {
  // typewriter options
  const OPTIONS = {
    loop: true,
    autoStart: true,
    strings: ["LinkedIn", "Gmail"],
  };

  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-12 pt-md-14 pb-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 mt-lg-n2 text-center text-lg-start order-2 order-lg-0">
            <h1
              className="display-1 mb-5 mx-md-10 mx-lg-0"
              style={slideInDownAnimate("600ms")}
            >
              Skoop is effortless and powerful extension for <br />
              <span className="typer text-primary text-nowrap">
                <Typewriter options={OPTIONS} />
              </span>
            </h1>

            <p className="lead fs-lg mb-7" style={slideInDownAnimate("900ms")}>
              Streamline your LinkedIn and Gmail communications with Skoop, the
              Chrome extension that enables you to create personalized, candid
              videos and voice memos.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate("1200ms")}>
                <button
                  type="button"
                  className="btn btn-lg btn-primary rounded me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Watch Video
                </button>
              </span>

              <div
                className="modal fade"
                id="myModal"
                tabIndex={-1}
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div
                        id="iframe-container"
                        className="d-flex justify-content-center"
                      >
                        <iframe
                          src="https://play.vidyard.com/LChiCn2f7NSdWJexnhzkyz"
                          allow="autoplay; encrypted-media"
                          allowFullScreen={true}
                          width="500"
                          height="300"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      
                    </div>
                  </div>
                </div>
              </div>

              <span style={slideInDownAnimate("1500ms")}>
                <NextLink
                  title="Free Trial"
                  href="#"
                  className="btn btn-lg btn-green rounded"
                />
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-3 offset-1 offset-lg-0 col-lg-4 d-flex flex-column">
                <div className="ms-auto mt-auto" style={zoomInAnimate("300ms")}>
                  <img
                    alt="demo"
                    src="/img/svg/test1.svg"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>

                <div
                  className="ms-auto mt-5 mb-10"
                  style={zoomInAnimate("600ms")}
                >
                  <img
                    alt="demo"
                    src="/img/svg/test2.svg"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>

              <div className="col-4 col-lg-5" style={zoomInAnimate("0ms")}>
                <div>
                  <img
                    alt="demo"
                    src="/img/svg/test3.svg"
                    className="w-100 img-fluid rounded shadow-lg"
                  />
                </div>
              </div>

              <div className="col-3 d-flex flex-column">
                <div className="mt-auto" style={zoomInAnimate("300ms")}>
                  <img
                    alt="demo"
                    src="/img/svg/test4.svg"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>

                <div className="mt-5" style={zoomInAnimate("600ms")}>
                  <img
                    alt="demo"
                    src="/img/svg/test5.svg"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

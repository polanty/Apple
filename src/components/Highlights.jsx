import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg } from "../utils";
import { rightImg } from "../utils";
import VideoCourasel from "./VideoCourasel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-ful md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} className="ml-2" />
            </p>
          </div>
        </div>
      </div>

      <VideoCourasel />
    </section>
  );
};

export default Highlights;

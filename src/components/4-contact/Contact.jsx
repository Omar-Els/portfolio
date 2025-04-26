import "./contact.css";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";

import doneAnimation from "../../../src/animatiom/done.json";
import contactUsAnimation from "../../../src/animatiom/contact-us.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xrbqgkqb");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        contact us for more information and get notified when i publish
        something now
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              // autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={true}
                style={{ height: 55 }}
                animationData={doneAnimation}
              />
              Your message has been send successfully
            </p>
          )}
        </form>

        <div className="animation ">
          <Lottie
            style={{ height: 400 }}
            className="contact-animation"
            animationData={contactUsAnimation}
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;

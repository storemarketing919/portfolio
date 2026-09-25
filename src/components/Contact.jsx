import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_laoh1kv";
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_a9m548n";
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "42gRjh3ogYTjvm-Xy";

  const onSubmit = (data, e) => {

    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are missing. Add REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, and REACT_APP_EMAILJS_PUBLIC_KEY to your .env file.");
      alert("Email service is not configured yet. Please add valid EmailJS credentials.");
      return;
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {

        alert("Message sent successfully!");

        if (e?.target) {
          e.target.reset();
        }

      })
      .catch((error) => {

        console.log("Email error:", error);

        alert("Failed to send message.");

      });

  };


  return (
    <form
      className="contactform"
      onSubmit={handleSubmit(onSubmit)}
    >

      <div className="row">


        {/* Name */}
        <div className="col-12 col-md-6">

          <div className="form-group">

            <input
              {...register("name", {
                required: true
              })}
              type="text"
              name="name"
              placeholder="YOUR NAME"
            />

            {errors.name && (
              <span className="invalid-feedback">
                Name is required
              </span>
            )}

          </div>

        </div>



        {/* Email */}
        <div className="col-12 col-md-6">

          <div className="form-group">

            <input
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^\S+@\S+$/i,
                  message:
                    "Entered value does not match email format",
                },

              })}
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
            />


            {errors.email && (

              <span className="invalid-feedback">
                {errors.email.message}
              </span>

            )}

          </div>

        </div>



        {/* Subject */}
        <div className="col-12">

          <div className="form-group">

            <input
              {...register("subject", {
                required: true
              })}
              type="text"
              name="subject"
              placeholder="YOUR SUBJECT"
            />


            {errors.subject && (

              <span className="invalid-feedback">
                Subject is required
              </span>

            )}

          </div>

        </div>




        {/* Message */}
        <div className="col-12">

          <div className="form-group">

            <textarea
              {...register("message", {
                required: true
              })}
              name="message"
              placeholder="YOUR MESSAGE"
            />


            {errors.message && (

              <span className="invalid-feedback">
                Message is required
              </span>

            )}

          </div>

        </div>




        {/* Button */}
        <div className="col-12">

          <button
            type="submit"
            className="button"
          >

            <span className="button-text">
              Send Message
            </span>


            <span className="button-icon fa fa-send"></span>

          </button>

        </div>


      </div>

    </form>
  );
};


export default Contact;
import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <span className="contact-icon position-absolute" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.25" />
          </svg>
        </span>
        <span className="d-block">Address Point</span> Shatto Stree Los Angeles, CA 90017,
        United States Of America.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <span className="contact-icon position-absolute" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </span>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:storemarketing919@gmail.com">storemarketing919@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <span className="contact-icon position-absolute" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M7.2 3.5 9.8 3l2 4.4-2.1 1.7a13.4 13.4 0 0 0 5.2 5.2l1.7-2.1 4.4 2 .5 2.6a2 2 0 0 1-2.2 2.4C11.9 18.3 5.7 12.1 4.8 4.7a2 2 0 0 1 2.4-1.2Z" />
          </svg>
        </span>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +1 317 743 4374">+1 317 743 4374</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;

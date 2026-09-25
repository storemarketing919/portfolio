import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";

jest.mock("@emailjs/browser", () => ({
  __esModule: true,
  default: {
    send: jest.fn(() => Promise.resolve()),
  },
}));

describe("Contact form", () => {
  beforeEach(() => {
    process.env.REACT_APP_EMAILJS_SERVICE_ID = "service_test";
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID = "template_test";
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY = "public_test";
    jest.clearAllMocks();
  });

  it("sends the form with the configured EmailJS credentials", async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("YOUR NAME"), {
      target: { value: "Alice" },
    });
    fireEvent.change(screen.getByPlaceholderText("YOUR EMAIL"), {
      target: { value: "alice@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("YOUR SUBJECT"), {
      target: { value: "Project inquiry" },
    });
    fireEvent.change(screen.getByPlaceholderText("YOUR MESSAGE"), {
      target: { value: "Hello there" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        "service_test",
        "template_test",
        {
          name: "Alice",
          email: "alice@example.com",
          subject: "Project inquiry",
          message: "Hello there",
        },
        "public_test"
      );
    });
  });
});

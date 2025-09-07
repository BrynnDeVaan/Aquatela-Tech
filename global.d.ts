import type React from "react";

type StripeBuyButtonProps =
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    "buy-button-id"?: string;
    "publishable-key"?: string;
    "client-reference-id"?: string;
    "customer-email"?: string;
    "success-url"?: string;
    "cancel-url"?: string;
    "locale"?: string;
  };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": StripeBuyButtonProps;
    }
  }

  namespace React.JSX {
    interface IntrinsicElements {
      "stripe-buy-button": StripeBuyButtonProps;
    }
  }
}

export {};

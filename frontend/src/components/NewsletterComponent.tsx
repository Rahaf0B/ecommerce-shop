import React from "react";
import TextField from "./TextField";
import Button from "./Button";

const NewsletterComponent = () => {
  return (
    <div className="div-bottom-home-page-newsletter">
      <div className="div-title-Newsletter">Monthly Newsletter</div>
      <div className="div-description-Newsletter">
        <div>Sign up to receive updates from our shop, including new tea</div>

        <div>selections and upcoming events.</div>
      </div>
      <div className="div-input-form-Newsletter">
        <TextField
          name={"Newsletter"}
          className={"textField-email-Newsletter"}
          labelClassName={"label-textField-email-Newsletter"}
          placeholder={"Enter your email"}
          size={"lg"}
          borderRadius={0}
          type={"text"}
          value={""}
        />
        <Button
          className={"button-submit-email-Newsletter"}
          label={"SUBMIT"}
          backgroundColor={"#1a1b1f"}
          size={"md"}
          color={"#fff"}
          borderRadius={0}
        />
      </div>
    </div>
  );
};

export default NewsletterComponent;

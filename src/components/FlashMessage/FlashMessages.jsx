import React from "react";
import { Flashmessage } from "./FloatingAlerts.Styled";

const FlashMessages = (props) => {
  return (
    <Flashmessage className="floating-alerts">
      {props.messages.map((msg, index) => (
        <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
          {msg}
        </div>
      ))}
    </Flashmessage>
  );
};

export default FlashMessages;

import React from "react";
import "./faq-item.styles.scss";
import { RxMinusCircled, RxPlusCircled } from "react-icons/rx";

const FaqItem = ({ question, answer, isOpen, isActive, onToggle }) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="question" onClick={onToggle}>
        {question}{" "}
        <span className="icon">
          {isOpen ? <RxMinusCircled /> : <RxPlusCircled />}
        </span>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default FaqItem;

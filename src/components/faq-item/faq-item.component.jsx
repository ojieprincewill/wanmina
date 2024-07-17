import React from "react";
import "./faq-item.styles.scss";
import { RxMinusCircled, RxPlusCircled } from "react-icons/rx";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <div className="question" onClick={onToggle}>
        {question}{" "}
        <span className="icon">
          {isOpen ? <RxMinusCircled /> : <RxPlusCircled />}
        </span>
      </div>
      {isOpen && (
        <div className="answer" dangerouslySetInnerHTML={{ __html: answer }} />
      )}
    </div>
  );
};

export default FaqItem;

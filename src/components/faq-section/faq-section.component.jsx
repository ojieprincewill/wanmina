import React, { useState } from "react";
import "./faq-section.styles.scss";
import { QUESTIONS_DATA } from "../../assets/questions-data/questions.data";
import FaqItem from "../faq-item/faq-item.component";

const FaqSection = () => {
  const [questionItems, setQuestionItems] = useState(QUESTIONS_DATA);

  const toggleItem = (index) => {
    const updatedItems = [...questionItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    updatedItems[index].isActive = !updatedItems[index].isActive;
    setQuestionItems(updatedItems);
  };

  return (
    <div className="faq-container">
      <p className="faq-title">faq</p>
      {questionItems.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={item.isOpen}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default FaqSection;

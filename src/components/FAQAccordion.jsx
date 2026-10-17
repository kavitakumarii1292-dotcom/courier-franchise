import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Accessible FAQ Accordion component with ARIA attributes and keyboard support.
 * 
 * @param {Array<{id: string, question: string, answer: string}>} items
 */
export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="faq-accordion-container" role="presentation">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${item.id || index}`;
        const panelId = `faq-panel-${item.id || index}`;

        return (
          <div key={item.id || index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="faq-header-btn"
                onClick={() => handleToggle(index)}
              >
                <span>{item.question}</span>
                <ChevronDown className="faq-icon" size={20} aria-hidden="true" />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="faq-answer-panel"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

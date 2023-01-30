import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {

  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <div className="border-top border-bottom">
      <h2 className="custom-color custom-font fw-bold fs-2 my-4 text-center">
      Frequently Asked Questions
      </h2>
      <Accordion defaultActiveKey="0" className=" mx-auto mb-5">
        {faqs.map((faq) => {
          return (
            <Accordion.Item
              key={faq?.id}
              eventKey={faq?.id}
              className="mb-2 rounded-0 border collapsed"
            >
              <Accordion.Header className="fs-4 fw-bold">
                {faq?.question}
              </Accordion.Header>
              <Accordion.Body>{faq?.answer}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  )
}

export default Faq

import React from 'react'
import { Accordion } from '../components';
import faqData from '../fixtures/faq.json';

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqData.map(data => 
                <Accordion.Item key={data.id}>
                    <Accordion.Header>{data.header}</Accordion.Header>
                    <Accordion.Body>{data.body}</Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    )
}

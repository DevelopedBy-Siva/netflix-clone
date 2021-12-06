import React from 'react'
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
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
            <OptForm>
                <OptForm.Input placeholder = "Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restrat your membership
                </OptForm.Text>
            </OptForm>
        </Accordion>
    )
}

import React from 'react'
import { Jumbotron } from '../components';
import jumbo from '../fixtures/jumbo.json';

export default function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumbo.map(data => 
                <Jumbotron key = {data.id} direction = {data.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{data.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src = {data.image} alt = {data.alt} />
                    </Jumbotron.Pane>
                </Jumbotron>
            )}
        </Jumbotron.Container>
    )
}

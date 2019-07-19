import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { ImageContainer, Title, Date, Para, Footer } from "./StylizeWidgets";

export default function InfoCard(info) {
    console.log(info);
    return (
        <Card>
            <ImageContainer>
                <Image className="media" src={info.url} size='tiny' centered />
            </ImageContainer>

            <Card.Content>
                <Card.Header>
                    <Title>
                        {info.title}
                    </Title>
                </Card.Header>

                <Card.Description>
                    <Para>
                        {info.explanation}
                    </Para>
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <Footer>
                    <Para>
                         Photo By: {info.copyright}
                    </Para>
                    <Card.Meta>
                        <Date>
                            {info.date}
                        </Date>
                    </Card.Meta>
                </Footer>

            </Card.Content>
        </Card>
    );
}

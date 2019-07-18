import React from "react";
import { Divider, Card, Icon, Image } from "semantic-ui-react";
import { ImageContainer, Title, Date, Para } from "./StylizeWidgets";

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
                <a>
                    <Icon name="copyright outline" />
                    {info.copyright}
                </a>
                <Card.Meta>
                    <Date>
                        {info.date}
                    </Date>
                </Card.Meta>
            </Card.Content>
        </Card>
    );
}

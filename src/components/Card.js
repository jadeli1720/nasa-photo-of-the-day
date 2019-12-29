import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { ImageContainer, Title, Para, Footer} from "./StylizeWidgets";

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
                    <div>
                         Photo By: {info.copyright}
                    </div>
                    <div>
                        Date: {info.date}
                    </div>
                    
                </Footer>

            </Card.Content>
        </Card>
    );
}

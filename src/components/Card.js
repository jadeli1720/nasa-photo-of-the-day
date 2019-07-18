import React from "react";
import { Divider, Card, Icon, Image } from "semantic-ui-react";
import { ImageContainer, Title } from "./StylizeWidgets";

export default function InfoCard(info) {
  console.log(info);
  return (
    <Card>
        <ImageContainer>
            <Image className="media" src={info.url} size='tiny' centered />
        </ImageContainer>
      {/* <Image src={info.url} /> */}
      <Card.Content>
        <Card.Header>
          <Title>{info.title}</Title>
        </Card.Header>
        <Card.Meta>{info.date}</Card.Meta>
        {/** Not working!*/}
        <Card.Description>{info.explanation}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="copyright outline" />
          {info.copyright}
        </a>
      </Card.Content>
    </Card>
  );
}

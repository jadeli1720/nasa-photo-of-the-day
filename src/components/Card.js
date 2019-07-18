import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { ImageContainer } from "./StylizeWidgets";

export default function InfoCard(info) {
  console.log(info);
  return (
    <Card>
      <ImageContainer>
        <Image src={info.url} size="huge" wrapped ui={false} />
      </ImageContainer>

      <Card.Content>
        <Card.Header>
          <h2>{info.title}</h2>
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

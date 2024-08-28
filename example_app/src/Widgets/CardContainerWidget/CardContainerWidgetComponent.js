import * as React from "react";
import * as Scrivito from "scrivito";
import { CardContainerWidget } from "./CardContainerWidgetClass";
import "./CardContainer.scss";

Scrivito.provideComponent(CardContainerWidget, ({ widget }) => {
  const cards = widget.get("cards");

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Scrivito.WidgetTag key={index} widget={card} />
      ))}
    </div>
  );
});

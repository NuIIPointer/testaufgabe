import * as Scrivito from "scrivito";
import { CardContainerWidget } from "./CardContainerWidgetClass";

Scrivito.provideEditingConfig(CardContainerWidget, {
  title: "Card Container",
  attributes: {
    cards: {
      title: "Cards",
    },
  },
  properties: ["cards"],
});

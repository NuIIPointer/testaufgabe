import * as Scrivito from "scrivito";

export const CardContainerWidget = Scrivito.provideWidgetClass(
  "CardContainerWidget",
  {
    attributes: {
      cards: ["widgetlist", { only: "CardWidget" }],
    },
  }
);

import * as Scrivito from "scrivito";

Scrivito.provideWidgetClass("CardWidget", {
  attributes: {
    title: "string",
    image: "reference",
    buttonLink: "link",
  },
});

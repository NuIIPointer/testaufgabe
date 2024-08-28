import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("CardWidget", {
  title: "Card",
  attributes: {
    title: {
      title: "Title",
    },
    image: {
      title: "Image",
    },
    buttonLink: {
      title: "Button Link",
    },
  },
  properties: ["title", "image", "buttonLink"],
});

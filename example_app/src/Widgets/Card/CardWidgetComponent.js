import * as React from "react";
import * as Scrivito from "scrivito";
import { AnimateOnReveal } from "../../Components/AnimateOnReveal";
import { alignmentClassName } from "../../utils/alignmentClassName";

import "./Card.scss";

Scrivito.provideComponent("CardWidget", ({ widget }) => {
  let image = (
    <Scrivito.ImageTag
      content={widget}
      attribute="image"
      alt={alternativeText(widget)}
    />
  );

  const link = widget.get("link");
  if (link && !Scrivito.isInPlaceEditingActive()) {
    image = <Scrivito.LinkTag to={link}>{image}</Scrivito.LinkTag>;
  }

  // Default headline text
  const defaultHeadline = "Default Headline";
  const headline = widget.get("heading") || defaultHeadline;

  return (
    <AnimateOnReveal animation={widget.get("animation")}>
      <div className={alignmentClassName(widget.get("alignment"))}>
        <div className="picturecard">
          {image}
          <div className="picturecardtext">
            <h2>Header 2</h2>
            <Scrivito.ContentTag
              tag="div"
              className={alignmentClassName(widget.get("alignment"))}
              content={widget}
              attribute="text"
            />
            <button>CLICK HERE!</button>
          </div>
        </div>
      </div>
    </AnimateOnReveal>
  );
});

function alternativeText(widget) {
  const widgetAlternativeText = widget.get("alternativeText");
  if (widgetAlternativeText) return widgetAlternativeText;

  const image = widget.get("image");
  if (image) return image.get("alternativeText");

  return "";
}

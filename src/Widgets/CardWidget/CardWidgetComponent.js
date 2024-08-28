import * as React from 'react';
import * as Scrivito from 'scrivito';
import './CardWidget.scss';

Scrivito.provideComponent('CardWidget', ({ widget }) => {
  const image = widget.get('image');
  const headline = widget.get('headline');
  const content = widget.get('content');
  const buttonlink = widget.get('buttonlink');
  const variant = widget.get('variant') || 'stack';

  return (
    <Scrivito.LinkTag to={buttonlink || '#'} className={`card-widget ${variant}`}>
      {image && (
        <Scrivito.ImageTag
          content={image}
          alt={headline}
          className={`card-image ${variant === 'fulloverlay' ? 'card-image-overlay' : ''}`}
        />
      )}
      <div className={`card-content ${variant === 'fulloverlay' ? 'overlay-content' : ''}`}>
        {headline && <h3 className="card-headline">{headline}</h3>}
        {content && <Scrivito.ContentTag content={widget} attribute="content" className="card-text" />}
        <div className="card-footer">
          <span className="btn btn-primary">{buttonlink ? buttonlink.title() : 'Click here!'}</span>
        </div>
      </div>
    </Scrivito.LinkTag>
  );
});

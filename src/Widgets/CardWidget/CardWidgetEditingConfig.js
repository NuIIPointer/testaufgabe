import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('CardWidget', {
    title: 'Card Widget',
    attributes: {
      image: {
        title: 'Image',
        description: 'Will be displayed according to the variant.',
      },
      headline: {
        title: 'Headline',
        description: 'The headline text for the card.',
      },
      content: {
        title: 'Content',
        description: 'Enter your text here.',
      },
      buttonlink: {
        title: 'Button Link',
        description: 'The link for the call-to-action button and the entire card.',
      },
      variant: {
        title: 'Variant',
        description: 'Choose between stacked or full overlay style.',
        values: [
          { value: 'stack', title: 'Stack' },
          { value: 'fulloverlay', title: 'Full Overlay' },
        ],
      },
    },
    properties: ['image', 'headline', 'content', 'buttonlink', 'variant'],
    initialContent: {
      variant: 'stack',
    },
    validations: [
      [
        'headline',
        (headline) => {
          if (!headline) {
            return {
              message: 'Please provide a headline.',
              severity: 'error',
            };
          }
        },
      ],
      [
        'image',
        (image) => {
          if (!image) {
            return {
              message: 'Please provide an image.',
              severity: 'error',
            };
          }
        },
      ],
    ],
  });
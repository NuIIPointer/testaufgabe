import * as Scrivito from 'scrivito';

export const CardWidget = Scrivito.provideWidgetClass('CardWidget', {
    attributes: {
        image: 'reference',
        headline: 'string',
        content: 'html',
        buttonlink: 'link',
        variant: ['enum', { values: ['stack', 'fulloverlay']}]
    },
})
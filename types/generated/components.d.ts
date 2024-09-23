import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'SEO Information';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

export interface LayoutWork extends Schema.Component {
  collectionName: 'components_layout_works';
  info: {
    displayName: 'Work';
    icon: 'play';
    description: '';
  };
  attributes: {
    work: Attribute.Component<'layout.work-section', true> & Attribute.Required;
  };
}

export interface LayoutWorkSection extends Schema.Component {
  collectionName: 'components_layout_work_sections';
  info: {
    displayName: 'Work Section';
    icon: 'play';
    description: '';
  };
  attributes: {
    dividerText: Attribute.String;
    works: Attribute.Relation<
      'layout.work-section',
      'oneToMany',
      'api::work.work'
    >;
  };
}

export interface LayoutVideo extends Schema.Component {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
    description: '';
  };
  attributes: {
    videoUrl: Attribute.String & Attribute.Required;
    playState: Attribute.Enumeration<['Autoplay', 'On Hover', 'Not Play']> &
      Attribute.DefaultTo<'Autoplay'>;
  };
}

export interface LayoutVideoCarousel extends Schema.Component {
  collectionName: 'components_layout_video_carousels';
  info: {
    displayName: 'Video Carousel';
    icon: 'grid';
    description: '';
  };
  attributes: {
    video: Attribute.Component<'layout.video', true> & Attribute.Required;
  };
}

export interface LayoutSlider extends Schema.Component {
  collectionName: 'components_layout_sliders';
  info: {
    displayName: 'Slider';
    icon: 'apps';
    description: '';
  };
  attributes: {
    slide: Attribute.Component<'layout.slider-video', true>;
  };
}

export interface LayoutSliderVideo extends Schema.Component {
  collectionName: 'components_layout_slider_videos';
  info: {
    displayName: 'Slider Video';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    secondaryTitle: Attribute.String;
    url: Attribute.String & Attribute.Required;
    thumbnail: Attribute.Media<'images'>;
    videoUrl: Attribute.String;
    playState: Attribute.Enumeration<['Autoplay', 'On Hover', 'Not Play']> &
      Attribute.DefaultTo<'Autoplay'>;
  };
}

export interface LayoutList extends Schema.Component {
  collectionName: 'components_layout_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    dividerText: Attribute.String;
    link: Attribute.Component<'layout.link', true> & Attribute.Required;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutLargeBodyText extends Schema.Component {
  collectionName: 'components_layout_large_body_texts';
  info: {
    displayName: 'Large Body Text';
    icon: 'bold';
    description: '';
  };
  attributes: {
    dividerText: Attribute.String;
    primaryText: Attribute.Text & Attribute.Required;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bold';
    description: '';
  };
  attributes: {
    heroText: Attribute.Text & Attribute.Required;
  };
}

export interface LayoutHeadlineText extends Schema.Component {
  collectionName: 'components_headline_text_headline_texts';
  info: {
    displayName: 'Headline Text';
    icon: 'bold';
    description: '';
  };
  attributes: {
    dividerText: Attribute.String;
    text: Attribute.Text & Attribute.Required;
    textSize: Attribute.Enumeration<['Small', 'Medium', 'Large']> &
      Attribute.DefaultTo<'Large'>;
  };
}

export interface LayoutCredits extends Schema.Component {
  collectionName: 'components_layout_credits';
  info: {
    displayName: 'Credits';
    icon: 'bold';
    description: '';
  };
  attributes: {
    credit: Attribute.String;
  };
}

export interface LayoutContact extends Schema.Component {
  collectionName: 'components_layout_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
    description: '';
  };
  attributes: {
    dividerText: Attribute.String;
    primaryText: Attribute.Text;
    contactSection: Attribute.Component<'layout.contact-section', true>;
  };
}

export interface LayoutContactSection extends Schema.Component {
  collectionName: 'components_layout_contact_sections';
  info: {
    displayName: 'Contact Section';
    icon: 'chartPie';
  };
  attributes: {
    headingText: Attribute.String;
    contactItem: Attribute.Component<'layout.contact-item', true>;
  };
}

export interface LayoutContactItem extends Schema.Component {
  collectionName: 'components_layout_contact_items';
  info: {
    displayName: 'Contact Item';
    icon: 'user';
    description: '';
  };
  attributes: {
    headingText: Attribute.String;
    subheadingText: Attribute.String;
    link: Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutBodyText extends Schema.Component {
  collectionName: 'components_body_text_body_texts';
  info: {
    displayName: 'Body Text';
    icon: 'layer';
    description: '';
  };
  attributes: {
    dividerText: Attribute.String;
    headingText: Attribute.Text;
    primaryText: Attribute.Text & Attribute.Required;
    video: Attribute.Component<'layout.video'>;
    link: Attribute.Component<'layout.link'>;
  };
}

export interface LayoutAccordion extends Schema.Component {
  collectionName: 'components_layout_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'bulletList';
  };
  attributes: {
    dividerText: Attribute.String;
    headlineText: Attribute.String;
    titleText: Attribute.String;
    accordionItem: Attribute.Component<'layout.accordion-item', true>;
  };
}

export interface LayoutAccordionItem extends Schema.Component {
  collectionName: 'components_layout_accordion_items';
  info: {
    displayName: 'Accordion Item';
    icon: 'bulletList';
  };
  attributes: {
    headingText: Attribute.String;
    subheadingText: Attribute.String;
    link: Attribute.Component<'layout.link'>;
  };
}

export interface FooterColumn extends Schema.Component {
  collectionName: 'components_footer_columns';
  info: {
    displayName: 'Column';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    headingText: Attribute.String;
    link: Attribute.Component<'layout.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-information': SeoSeoInformation;
      'layout.work': LayoutWork;
      'layout.work-section': LayoutWorkSection;
      'layout.video': LayoutVideo;
      'layout.video-carousel': LayoutVideoCarousel;
      'layout.slider': LayoutSlider;
      'layout.slider-video': LayoutSliderVideo;
      'layout.list': LayoutList;
      'layout.link': LayoutLink;
      'layout.large-body-text': LayoutLargeBodyText;
      'layout.hero': LayoutHero;
      'layout.headline-text': LayoutHeadlineText;
      'layout.credits': LayoutCredits;
      'layout.contact': LayoutContact;
      'layout.contact-section': LayoutContactSection;
      'layout.contact-item': LayoutContactItem;
      'layout.body-text': LayoutBodyText;
      'layout.accordion': LayoutAccordion;
      'layout.accordion-item': LayoutAccordionItem;
      'footer.column': FooterColumn;
    }
  }
}

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
    work: Attribute.Component<'layout.work-section', true>;
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
    videoURL: Attribute.String & Attribute.Required;
    PlayState: Attribute.Enumeration<['Autoplay', 'On Hover', 'Not Play']> &
      Attribute.DefaultTo<'Autoplay'>;
  };
}

export interface LayoutVideoCarousel extends Schema.Component {
  collectionName: 'components_layout_video_carousels';
  info: {
    displayName: 'Video Carousel';
    icon: 'grid';
  };
  attributes: {
    Video: Attribute.Component<'layout.video', true>;
  };
}

export interface LayoutTeam extends Schema.Component {
  collectionName: 'components_layout_teams';
  info: {
    displayName: 'Team';
    icon: 'user';
  };
  attributes: {
    DividerText: Attribute.String;
    Headline: Attribute.String;
    TitleText: Attribute.String;
    Team: Attribute.Component<'layout.team-members', true>;
  };
}

export interface LayoutTeamMembers extends Schema.Component {
  collectionName: 'components_layout_team_members';
  info: {
    displayName: 'Team Members';
    icon: 'user';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Title: Attribute.String;
    Link: Attribute.Component<'layout.link'>;
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
    Slide: Attribute.Component<'layout.slider-video', true>;
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
    Title: Attribute.String;
    SecondaryTitle: Attribute.String;
    URL: Attribute.String;
    Thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoURL: Attribute.String;
    playState: Attribute.Enumeration<['Autoplay', 'On Hover', 'Not Play']> &
      Attribute.DefaultTo<'Autoplay'>;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    URL: Attribute.String & Attribute.Required;
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
    primaryText: Attribute.Text;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bold';
  };
  attributes: {
    heroText: Attribute.Text;
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
    Text: Attribute.Text;
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
    Credit: Attribute.String;
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
    DividerText: Attribute.String;
    PrimaryText: Attribute.Text;
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

export interface LayoutCapabilities extends Schema.Component {
  collectionName: 'components_layout_capabilities';
  info: {
    displayName: 'Capabilities';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    dividerText: Attribute.String;
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
    PrimaryText: Attribute.Text;
    Link: Attribute.Component<'layout.link'>;
    video: Attribute.Component<'layout.video'>;
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

export interface HomepageSliderWorkItem extends Schema.Component {
  collectionName: 'components_homepage_slider_work_items';
  info: {
    displayName: 'Work Item';
    icon: 'play';
  };
  attributes: {
    work: Attribute.Relation<
      'homepage-slider.work-item',
      'oneToOne',
      'api::work.work'
    >;
  };
}

export interface HomepageSliderVideo extends Schema.Component {
  collectionName: 'components_homepage_slider_videos';
  info: {
    displayName: 'Video';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    URL: Attribute.String;
    Video: Attribute.Component<'layout.video'>;
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
      'layout.team': LayoutTeam;
      'layout.team-members': LayoutTeamMembers;
      'layout.slider': LayoutSlider;
      'layout.slider-video': LayoutSliderVideo;
      'layout.link': LayoutLink;
      'layout.large-body-text': LayoutLargeBodyText;
      'layout.hero': LayoutHero;
      'layout.headline-text': LayoutHeadlineText;
      'layout.credits': LayoutCredits;
      'layout.contact': LayoutContact;
      'layout.contact-section': LayoutContactSection;
      'layout.contact-item': LayoutContactItem;
      'layout.capabilities': LayoutCapabilities;
      'layout.body-text': LayoutBodyText;
      'footer.column': FooterColumn;
      'homepage-slider.work-item': HomepageSliderWorkItem;
      'homepage-slider.video': HomepageSliderVideo;
    }
  }
}

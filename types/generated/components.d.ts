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

export interface LayoutVideo extends Schema.Component {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
    description: '';
  };
  attributes: {
    videoURL: Attribute.String & Attribute.Required;
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
    PrimaryContact: Attribute.Component<'layout.link'>;
    SecondaryContact: Attribute.Component<'layout.link', true>;
    SocialLinks: Attribute.Component<'layout.link', true>;
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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-information': SeoSeoInformation;
      'layout.video': LayoutVideo;
      'layout.video-carousel': LayoutVideoCarousel;
      'layout.team': LayoutTeam;
      'layout.team-members': LayoutTeamMembers;
      'layout.link': LayoutLink;
      'layout.hero': LayoutHero;
      'layout.headline-text': LayoutHeadlineText;
      'layout.contact': LayoutContact;
      'layout.body-text': LayoutBodyText;
    }
  }
}

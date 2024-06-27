import type { Struct, Schema } from '@strapi/strapi';

export interface SharedTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_cards';
  info: {
    displayName: 'teamCard';
    icon: 'smile';
  };
  attributes: {
    fullname: Schema.Attribute.String & Schema.Attribute.Required;
    job: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    socialNetworks: Schema.Attribute.Component<'shared.social-networks', true>;
  };
}

export interface SharedSocialNetworks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_network';
  info: {
    displayName: 'socialNetwork';
    icon: 'network-wired';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    keywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    metaViewport: Schema.Attribute.String;
    canonicalURL: Schema.Attribute.String;
  };
}

export interface SharedQuestionAnswer extends Struct.ComponentSchema {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'questionAnswer';
    icon: 'question-circle';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.String;
    answer: Schema.Attribute.RichText;
  };
}

export interface SharedPublication extends Struct.ComponentSchema {
  collectionName: 'components_shared_publications';
  info: {
    displayName: 'publication';
    icon: 'arrow-up';
  };
  attributes: {
    publish_at: Schema.Attribute.DateTime;
    ready: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'backward';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_blank']>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
    icon: 'heading';
    description: '';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'primary'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterColumns extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'footerColumns';
    icon: 'align-left';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedFeaturesCheck extends Struct.ComponentSchema {
  collectionName: 'components_shared_features_checks';
  info: {
    displayName: 'featuresCheck';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedComment extends Struct.ComponentSchema {
  collectionName: 'components_shared_comments';
  info: {
    displayName: 'comment';
    icon: 'comment-dots';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
    icon: 'sim-card';
  };
  attributes: {
    title: Schema.Attribute.String;
    text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'compress';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface RestaurantRichContent extends Struct.ComponentSchema {
  collectionName: 'components_restaurant_rich_contents';
  info: {
    displayName: 'richContent';
    icon: 'asterisk';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface RestaurantOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_opening_hours';
  info: {
    displayName: 'openingHours';
    icon: 'calendar-alt';
  };
  attributes: {
    day_interval: Schema.Attribute.String & Schema.Attribute.Required;
    opening_hour: Schema.Attribute.String;
    closing_hour: Schema.Attribute.String;
  };
}

export interface RestaurantLocation extends Struct.ComponentSchema {
  collectionName: 'components_restaurant_more_information';
  info: {
    displayName: 'moreInformation';
    icon: 'allergies';
  };
  attributes: {
    address: Schema.Attribute.String;
    website: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface RestaurantInformation extends Struct.ComponentSchema {
  collectionName: 'components_restaurant_information';
  info: {
    displayName: 'information';
    icon: 'align-center';
  };
  attributes: {
    description: Schema.Attribute.Text;
    opening_hours: Schema.Attribute.Component<'restaurant.opening-hours', true>;
    location: Schema.Attribute.Component<'restaurant.location', false>;
  };
}

export interface PricingPricingCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_cards';
  info: {
    displayName: 'pricingCards';
    icon: 'file-invoice-dollar';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String;
    price: Schema.Attribute.Integer & Schema.Attribute.Required;
    perks: Schema.Attribute.Component<'pricing.perks', true>;
  };
}

export interface PricingPerks extends Struct.ComponentSchema {
  collectionName: 'components_shared_perks';
  info: {
    displayName: 'perks';
    icon: 'adjust';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    included: Schema.Attribute.Boolean & Schema.Attribute.Required;
  };
}

export interface GlobalNavigation extends Struct.ComponentSchema {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'navigation';
    icon: 'location-arrow';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    leftButton: Schema.Attribute.Component<'shared.link', false>;
    rightButton: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
    icon: 'align-right';
  };
  attributes: {
    footerColumns: Schema.Attribute.Component<'shared.footer-columns', true>;
    socialNetworks: Schema.Attribute.Component<'shared.social-networks', true>;
    button: Schema.Attribute.Component<'shared.button', false>;
    label: Schema.Attribute.String;
  };
}

export interface BlocksTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'quote-right';
    description: '';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'primary'>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    author: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface BlocksTeam extends Struct.ComponentSchema {
  collectionName: 'components_slices_teams';
  info: {
    displayName: 'team';
    icon: 'people-carry';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    members: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface BlocksRelatedRestaurants extends Struct.ComponentSchema {
  collectionName: 'components_restaurant_related_restaurants';
  info: {
    displayName: 'relatedRestaurants';
    icon: 'copy';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    restaurants: Schema.Attribute.Relation<
      'oneToMany',
      'api::restaurant.restaurant'
    >;
  };
}

export interface BlocksRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_article_related_articles';
  info: {
    displayName: 'relatedArticles';
    icon: 'caret-square-right';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_slices_pricings';
  info: {
    displayName: 'pricing';
    icon: 'money-check-alt';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    pricingCards: Schema.Attribute.Component<'pricing.pricing-cards', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_slices_heroes';
  info: {
    displayName: 'hero';
    icon: 'pizza-slice';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    header: Schema.Attribute.Component<'shared.header', false>;
    text: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'shared.button', true>;
  };
}

export interface BlocksFeatures extends Struct.ComponentSchema {
  collectionName: 'components_slices_features';
  info: {
    displayName: 'features';
    icon: 'search-plus';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'secondary'>;
    header: Schema.Attribute.Component<'shared.header', false>;
    cards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksFeaturesWithImages extends Struct.ComponentSchema {
  collectionName: 'components_slices_features_with_images';
  info: {
    displayName: 'featuresWithImages';
    icon: 'images';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'primary'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    featuresCheck: Schema.Attribute.Component<'shared.features-check', true>;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'muted'>;
    faq: Schema.Attribute.Component<'shared.question-answer', true>;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_slices_ctas';
  info: {
    displayName: 'cta';
    icon: 'bullhorn';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'muted'>;
    title: Schema.Attribute.String;
    text: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'shared.button', true>;
  };
}

export interface BlocksCtaCommandLine extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_command_lines';
  info: {
    displayName: 'CtaCommandLine';
    icon: 'code';
    description: '';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'primary'>;
    title: Schema.Attribute.String;
    text: Schema.Attribute.String;
    commandLine: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.team-card': SharedTeamCard;
      'shared.social-networks': SharedSocialNetworks;
      'shared.seo': SharedSeo;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.publication': SharedPublication;
      'shared.meta-social': SharedMetaSocial;
      'shared.link': SharedLink;
      'shared.header': SharedHeader;
      'shared.footer-columns': SharedFooterColumns;
      'shared.features-check': SharedFeaturesCheck;
      'shared.comment': SharedComment;
      'shared.card': SharedCard;
      'shared.button': SharedButton;
      'restaurant.rich-content': RestaurantRichContent;
      'restaurant.opening-hours': RestaurantOpeningHours;
      'restaurant.location': RestaurantLocation;
      'restaurant.information': RestaurantInformation;
      'pricing.pricing-cards': PricingPricingCards;
      'pricing.perks': PricingPerks;
      'global.navigation': GlobalNavigation;
      'global.footer': GlobalFooter;
      'blocks.testimonial': BlocksTestimonial;
      'blocks.team': BlocksTeam;
      'blocks.related-restaurants': BlocksRelatedRestaurants;
      'blocks.related-articles': BlocksRelatedArticles;
      'blocks.pricing': BlocksPricing;
      'blocks.hero': BlocksHero;
      'blocks.features': BlocksFeatures;
      'blocks.features-with-images': BlocksFeaturesWithImages;
      'blocks.faq': BlocksFaq;
      'blocks.cta': BlocksCta;
      'blocks.cta-command-line': BlocksCtaCommandLine;
    }
  }
}

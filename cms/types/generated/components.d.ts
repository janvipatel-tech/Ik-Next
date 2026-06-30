import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCredibility extends Struct.ComponentSchema {
  collectionName: 'components_sections_credibilities';
  info: {
    displayName: 'Credibility';
    icon: 'shield';
  };
  attributes: {
    design: Schema.Attribute.Component<'shared.design', false>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    logos: Schema.Attribute.Component<'sections.logo-item', true>;
    stats: Schema.Attribute.Component<'sections.stat-item', true>;
  };
}

export interface SectionsCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_banners';
  info: {
    displayName: 'CTA Banner';
    icon: 'cursor';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    design: Schema.Attribute.Component<'shared.design', false>;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsEventItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_event_items';
  info: {
    displayName: 'Event Item';
    icon: 'calendar';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.String;
  };
}

export interface SectionsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_items';
  info: {
    displayName: 'Feature Item';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_lists';
  info: {
    displayName: 'Feature List';
    icon: 'grid';
  };
  attributes: {
    design: Schema.Attribute.Component<'shared.design', false>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'sections.feature-item', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'landscape';
  };
  attributes: {
    badge: Schema.Attribute.String;
    design: Schema.Attribute.Component<'shared.design', false>;
    events: Schema.Attribute.Component<'sections.event-item', true>;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    primaryCtaLabel: Schema.Attribute.String;
    primaryCtaUrl: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
    secondaryCtaUrl: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsInstructor extends Struct.ComponentSchema {
  collectionName: 'components_sections_instructors';
  info: {
    displayName: 'Instructor';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    design: Schema.Attribute.Component<'shared.design', false>;
    eyebrow: Schema.Attribute.String;
    highlights: Schema.Attribute.Component<'sections.list-item', true>;
    imageUrl: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsListItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_list_items';
  info: {
    displayName: 'List Item';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_logo_items';
  info: {
    displayName: 'Logo Item';
    icon: 'picture';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsRichSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_sections';
  info: {
    displayName: 'Rich Section';
    icon: 'paragraph';
  };
  attributes: {
    body: Schema.Attribute.Text;
    design: Schema.Attribute.Component<'shared.design', false>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
  };
}

export interface SectionsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_stat_items';
  info: {
    displayName: 'Stat Item';
    icon: 'chartCircle';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_items';
  info: {
    displayName: 'Testimonial Item';
    icon: 'quote';
  };
  attributes: {
    company: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'quote';
  };
  attributes: {
    design: Schema.Attribute.Component<'shared.design', false>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'sections.testimonial-item', true>;
  };
}

export interface SharedDesign extends Struct.ComponentSchema {
  collectionName: 'components_shared_designs';
  info: {
    description: 'Per-section visual styling controls';
    displayName: 'Design';
    icon: 'brush';
  };
  attributes: {
    accentColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#5b34ea'>;
    align: Schema.Attribute.Enumeration<['left', 'center']> &
      Schema.Attribute.DefaultTo<'center'>;
    paddingY: Schema.Attribute.Enumeration<['sm', 'md', 'lg']> &
      Schema.Attribute.DefaultTo<'lg'>;
    theme: Schema.Attribute.Enumeration<['light', 'muted', 'dark', 'brand']> &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Meta tags and social sharing';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImageUrl: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.credibility': SectionsCredibility;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.event-item': SectionsEventItem;
      'sections.feature-item': SectionsFeatureItem;
      'sections.feature-list': SectionsFeatureList;
      'sections.hero': SectionsHero;
      'sections.instructor': SectionsInstructor;
      'sections.list-item': SectionsListItem;
      'sections.logo-item': SectionsLogoItem;
      'sections.rich-section': SectionsRichSection;
      'sections.stat-item': SectionsStatItem;
      'sections.testimonial-item': SectionsTestimonialItem;
      'sections.testimonials': SectionsTestimonials;
      'shared.design': SharedDesign;
      'shared.seo': SharedSeo;
    }
  }
}

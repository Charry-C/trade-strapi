import type { Schema, Struct } from '@strapi/strapi';

export interface ContentVideoTextBox extends Struct.ComponentSchema {
  collectionName: 'components_content_video_text_boxes';
  info: {
    displayName: 'videoTextBox';
    icon: 'television';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'globe';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.video-text-box': ContentVideoTextBox;
      'shared.seo': SharedSeo;
    }
  }
}

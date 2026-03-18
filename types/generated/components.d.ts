import type { Schema, Struct } from '@strapi/strapi';

export interface ContentConnectWay extends Struct.ComponentSchema {
  collectionName: 'components_content_connect_ways';
  info: {
    displayName: 'connectWay';
    icon: 'phone';
  };
  attributes: {};
}

export interface ContentMainSub extends Struct.ComponentSchema {
  collectionName: 'components_content_main_subs';
  info: {
    displayName: 'mainSub';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    companyImgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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
      'content.connect-way': ContentConnectWay;
      'content.main-sub': ContentMainSub;
      'content.video-text-box': ContentVideoTextBox;
      'shared.seo': SharedSeo;
    }
  }
}

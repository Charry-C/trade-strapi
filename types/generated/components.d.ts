import type { Schema, Struct } from '@strapi/strapi';

export interface ContentConnectWay extends Struct.ComponentSchema {
  collectionName: 'components_content_connect_ways';
  info: {
    displayName: 'connectWay';
    icon: 'phone';
  };
  attributes: {
    commonConnect: Schema.Attribute.JSON;
    description: Schema.Attribute.Text;
    mediaConnect: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ContentIconCard extends Struct.ComponentSchema {
  collectionName: 'components_content_icon_cards';
  info: {
    displayName: 'IconCard';
  };
  attributes: {
    bannerImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
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
    card: Schema.Attribute.Component<'content.icon-card', true>;
    companyImgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    numArea: Schema.Attribute.Component<'content.num-card', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleCard: Schema.Attribute.Component<'content.text-card', false>;
  };
}

export interface ContentNumCard extends Struct.ComponentSchema {
  collectionName: 'components_content_num_cards';
  info: {
    displayName: 'numCard';
  };
  attributes: {
    description: Schema.Attribute.String;
    mainNum: Schema.Attribute.Integer;
  };
}

export interface ContentPicCard extends Struct.ComponentSchema {
  collectionName: 'components_content_pic_cards';
  info: {
    displayName: 'picCard';
  };
  attributes: {
    cardImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContentServiceCom extends Struct.ComponentSchema {
  collectionName: 'components_content_service_coms';
  info: {
    displayName: 'serviceCom';
  };
  attributes: {
    description: Schema.Attribute.Text;
    show: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subList: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ContentTextCard extends Struct.ComponentSchema {
  collectionName: 'components_content_text_cards';
  info: {
    displayName: 'textCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
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
  attributes: {};
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
      'content.icon-card': ContentIconCard;
      'content.main-sub': ContentMainSub;
      'content.num-card': ContentNumCard;
      'content.pic-card': ContentPicCard;
      'content.service-com': ContentServiceCom;
      'content.text-card': ContentTextCard;
      'content.video-text-box': ContentVideoTextBox;
      'shared.seo': SharedSeo;
    }
  }
}

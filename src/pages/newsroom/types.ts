export interface NewsItem {
  id: number;
  tag: string;
  title: string;
  date: string;
  imageUrl?: string;
}

export enum HeaderTab {
  ABOUT_US = 'About Us',
  OUR_HISTORY = 'Our History',
  NEWS_ROOM = 'News Room'
}
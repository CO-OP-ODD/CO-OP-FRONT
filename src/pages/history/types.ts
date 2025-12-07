
export enum NavItem {
  HISTORY = "history",
  VISION = "vision",
  AWARDS = "awards",
}

export interface TimelineEntry {
  id: string;           
  year: string;
  title: string;
  description: string;
  imageUrl?: string;    
}

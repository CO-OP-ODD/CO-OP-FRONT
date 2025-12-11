export const categoryFilters = [
  "전체",
  "적용유형",
  "착용방식",
  "Connectors",
  "오디오소스",
] as const;

export type Category = (typeof categoryFilters)[number];

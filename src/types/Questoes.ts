export type Alternative = {
  letter: string;
  text: string;
  isCorrect: boolean;
  file?: string;
}

export type Question = {
  title: string;
  index: number;
  discipline: string;
  language: string;
  context: string;
  files?: string[];
  alternativesIntroduction?: string;
  alternatives: Alternative[];
  correctAlternative: string;
}
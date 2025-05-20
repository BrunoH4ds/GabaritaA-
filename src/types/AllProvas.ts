export type Disciplina = {
  label: string;
  value: string;
};

export type Idioma = {
  label: string;
  value: string;
};

export type Prova = {
  title: string;
  year: number;
  disciplines: Disciplina[];
  languages: Idioma[];
};

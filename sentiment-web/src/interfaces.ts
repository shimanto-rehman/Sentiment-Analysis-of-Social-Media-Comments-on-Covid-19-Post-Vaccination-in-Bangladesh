export interface Result {
  [key: string]: number;
}

export enum Algo {
  NN = "nn",
  ML = "ml",
}

export interface ResultComponentProps {
  result: Result;
}

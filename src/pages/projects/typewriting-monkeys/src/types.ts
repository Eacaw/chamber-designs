export interface GASettings {
  targetPhrase: string;
  populationSize: number;
  mutationRate: number;
  elitismValue: number;
  crossoverMethod: string;
}

export interface previousGeneration {
  key: number;
  generations: number;
}

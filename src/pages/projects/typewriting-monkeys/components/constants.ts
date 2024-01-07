import { GASettings } from "../src/types";

export const DEFAULT_PHRASE =
  "This is a test sentence that is exactly one hundred characters long, including spaces & punctuation.";

export const DEFAULT_GA_SETTINGS: GASettings = {
  targetPhrase: DEFAULT_PHRASE,
  populationSize: 2500,
  mutationRate: 2,
  elitismValue: 25,
};

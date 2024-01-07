import { GASettings } from "../src/types";

export const DEFAULT_PHRASE =
  "This is a test sentence that is exactly 1 hundred characters long, including spaces and punctuation.";

export const DEFAULT_GA_SETTINGS: GASettings = {
  targetPhrase: DEFAULT_PHRASE,
  populationSize: 1000,
  mutationRate: 5,
  elitismValue: 5,
};

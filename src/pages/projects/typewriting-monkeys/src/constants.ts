import { DNA } from "./DNA";
import { DEFAULT_PHRASE } from "../components/constants";

export const DEFAULT_GENES: DNA[] = [
  new DNA(DEFAULT_PHRASE.split(""), 0),
  new DNA(DEFAULT_PHRASE.split(""), 0),
  new DNA(DEFAULT_PHRASE.split(""), 0),
  new DNA(DEFAULT_PHRASE.split(""), 0),
  new DNA(DEFAULT_PHRASE.split(""), 0),
];

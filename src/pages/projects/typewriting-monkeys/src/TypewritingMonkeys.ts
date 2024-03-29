import { DNA } from "./DNA";
import { executeCrossoverByKey } from "./crossover";
import { GASettings } from "./types";
/**
 * Typewriting Monkeys project by David Pinchen (Eacaw) - 2024
 */

let target: string[];
let populationSize: number; // 50 - 1M
let mutationRate: number; // 0 - 100
let elitismValue: number; // 0 - 100
let crossoverMethod: string;

function createInitialPopulation() {
  const population = [];
  for (let i = 0; i < populationSize; i++) {
    const dna = new DNA(target, mutationRate);
    population.push(dna);
  }
  return population;
}

function evolvePopulation(population: DNA[]) {
  const newPopulation = [];
  for (let i = 0; i < population.length; i++) {
    const parentA = selectParent(population);
    const parentB = selectParent(population);
    const child = executeCrossoverByKey(crossoverMethod, parentA, parentB);
    child.mutate();
    child.calculateFitness();
    newPopulation.push(child);
  }
  return newPopulation;
}

function selectParent(population: DNA[]) {
  const randomIndex = Math.floor(
    (Math.random() * population.length) / elitismValue
  );
  return population[randomIndex];
}

function findBestMatch(population: DNA[]) {
  let bestMatch = population[0];
  for (let i = 1; i < population.length; i++) {
    if (population[i].fitness > bestMatch.fitness) {
      bestMatch = population[i];
    }
  }
  return bestMatch;
}

function sortPopulationByFitness(population: DNA[]) {
  population.sort((a, b) => {
    return b.fitness - a.fitness;
  });
}

export function runSimulation(
  setTopFiveDisplay: Function,
  setGeneration: Function,
  simulationFinished: Function,
  settings: GASettings
) {
  target = settings.targetPhrase.split("");
  populationSize = settings.populationSize;
  mutationRate = settings.mutationRate / 100;
  elitismValue = Math.floor(populationSize / settings.elitismValue);
  crossoverMethod = settings.crossoverMethod;
  console.log("Running sim with: ", settings);

  let generation = 1;
  let population = createInitialPopulation();

  runSim(
    population,
    generation,
    setTopFiveDisplay,
    setGeneration,
    simulationFinished
  );
}

function runSim(
  population: DNA[],
  generation: number,
  setTopFiveDisplay: Function,
  setGeneration: Function,
  simulationFinished: Function
) {
  population = evolvePopulation(population);
  sortPopulationByFitness(population);
  let bestMatch = findBestMatch(population);
  generation++;
  setTopFiveDisplay([
    population[0],
    population[1],
    population[2],
    population[3],
    population[4],
  ]);
  setGeneration(generation);

  if (bestMatch.fitness < 1 && generation < 500) {
    // Recursively call runSim until the best match is found
    setTimeout(() => {
      runSim(
        population,
        generation,
        setTopFiveDisplay,
        setGeneration,
        simulationFinished
      );
    }, 0);
  } else {
    simulationFinished(generation);

    return;
  }
}

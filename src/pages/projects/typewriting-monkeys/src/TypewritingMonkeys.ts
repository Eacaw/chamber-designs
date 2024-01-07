import { DNA } from "./DNA";
import { GASettings } from "./types";
/**
 * Typewriting Monkeys project by David Pinchen (Eacaw) - 2024
 */

let target: string[] = "To add a bit of context, H4 is the best!".split("");
let populationSize: number; // 50 - 1M
let mutationRate: number; // 0 - 100
let elitismValue: number; // 0 - 100

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
    const child = parentA.crossover(parentB);
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
  populationSize = settings.populationSize;
  mutationRate = settings.mutationRate / 100;
  elitismValue = Math.floor(populationSize / settings.elitismValue);

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
    population[0].genes.join(""),
    population[1].genes.join(""),
    population[2].genes.join(""),
    population[3].genes.join(""),
    population[4].genes.join(""),
  ]);
  setGeneration(generation);

  if (bestMatch.fitness < 1 && generation < 2000) {
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
    simulationFinished();

    return;
  }
}

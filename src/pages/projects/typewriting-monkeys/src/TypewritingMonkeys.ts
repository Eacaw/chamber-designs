import { DNA } from "./DNA";
/**
 * Typewriting Monkeys project by David Pinchen (Eacaw) - 2024
 */

const target: string[] = "H4 is the best".split("");
const populationSize: number = 50;
const mutationRate: number = 0.1;

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
  const randomIndex = Math.floor((Math.random() * population.length) / 2);
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
  simulationFinished: Function
) {
  let generation = 1;
  let population = createInitialPopulation();
  let bestMatch = findBestMatch(population);

  console.log(`Searching for target: ${target.join("")}`);

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
  console.log(
    `Generation: ${generation} : ${bestMatch.genes.join(
      ""
    )} : ${bestMatch.fitness.toFixed(2)}`
  );
  setTopFiveDisplay([
    population[0].genes.join(""),
    population[1].genes.join(""),
    population[2].genes.join(""),
    population[3].genes.join(""),
    population[4].genes.join(""),
  ]);
  setGeneration(generation);

  if (bestMatch.fitness < 1) {
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
    console.log(
      `Target found: ${bestMatch.genes.join("")} in ${generation} generations`
    );
    simulationFinished();

    return;
  }
}

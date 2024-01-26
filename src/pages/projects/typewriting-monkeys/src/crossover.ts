/**
 * Typewriting Monkeys project by David Pinchen (Eacaw) - 2024
 */

import { DNA } from "./DNA";

export function executeCrossoverByKey(key: string, parentA: DNA, parentB: DNA) {
  switch (key) {
    case "random":
      return crossoverRandom(parentA, parentB);
    case "singlePoint":
      return crossoverSinglePoint(parentA, parentB);
    case "doublePoint":
      return crossoverDoublePoint(parentA, parentB);
    case "uniform":
      return crossoverUniform(parentA, parentB);
    default:
      throw new Error("Invalid crossover method");
  }
}

/**
 * Random crossover, individual genes are selected at random
 * from either parent with a 50% chance of being from either.
 */
function crossoverRandom(parentA, parentB) {
  let child = new DNA(parentA.target, parentA.mutationRate);
  for (let i = 0; i < parentA.target.length; i++) {
    if (Math.random() < 0.5) {
      child.genes[i] = parentA.genes[i];
    } else {
      child.genes[i] = parentB.genes[i];
    }
  }
  return child;
}

/**
 * Single point crossover, a random point is selected and all genes
 * beyond that point are swapped between parents.
 */
function crossoverSinglePoint(parentA, parentB) {
  let child = new DNA(parentA.target, parentA.mutationRate);
  let crossoverPoint = Math.floor(Math.random() * parentA.target.length);
  for (let i = 0; i < parentA.target.length; i++) {
    if (i < crossoverPoint) {
      child.genes[i] = parentA.genes[i];
    } else {
      child.genes[i] = parentB.genes[i];
    }
  }
  return child;
}

/**
 * Double point crossover, two random points are selected and all genes
 * between those points are swapped between parents.
 */
function crossoverDoublePoint(parentA, parentB) {
  let child = new DNA(parentA.target, parentA.mutationRate);
  let crossoverPointA = Math.floor(Math.random() * parentA.target.length);
  let crossoverPointB = Math.floor(Math.random() * parentA.target.length);
  if (crossoverPointA > crossoverPointB) {
    let temp = crossoverPointA;
    crossoverPointA = crossoverPointB;
    crossoverPointB = temp;
  }
  for (let i = 0; i < parentA.target.length; i++) {
    if (i < crossoverPointA || i > crossoverPointB) {
      child.genes[i] = parentA.genes[i];
    } else {
      child.genes[i] = parentB.genes[i];
    }
  }
  return child;
}

/**
 * Uniform crossover, each gene is selected in uniform sequence from
 * parent A then parent B, for the length of the genes array.
 */
function crossoverUniform(parentA, parentB) {
  let child = new DNA(parentA.target, parentA.mutationRate);
  for (let i = 0; i < parentA.target.length; i++) {
    if (i % 2 === 0) {
      child.genes[i] = parentA.genes[i];
    } else {
      child.genes[i] = parentB.genes[i];
    }
  }
  return child;
}

/**
 * Typewriting Monkeys project by David Pinchen (Eacaw) - 2024
 */

export class DNA {
  public genes: string[];
  public fitness: number;
  public target: string[];
  public mutationRate: number;
  public static validCharacters: string[] =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890!@#$%^&*()_+-=[]{};':\",./<>?`~".split(
      ""
    );

  constructor(target: string[], mutationRate: number) {
    this.target = target;
    this.mutationRate = mutationRate;
    this.genes = [];
    this.fitness = 0;
    this.generateGenes();
    this.calculateFitness();
  }

  // Generate the genes for the DNA

  generateGenes() {
    this.genes = "---".split("");
  }

  // Calculate the fitness of the DNA

  calculateFitness() {
    let score = 0;
    for (let i = 0; i < this.target.length; i++) {
      if (this.genes[i] === this.target[i]) {
        score++;
      }
    }
    this.fitness = score / this.target.length;
  }

  // Crossover the DNA with another DNA

  crossover(other: DNA) {
    let child = new DNA(this.target, this.mutationRate);
    for (let i = 0; i < this.target.length; i++) {
      if (Math.random() < 0.5) {
        child.genes[i] = this.genes[i];
      } else {
        child.genes[i] = other.genes[i];
      }
    }
    return child;
  }

  // Mutate the DNA

  mutate() {
    for (let i = 0; i < this.target.length; i++) {
      if (Math.random() < this.mutationRate) {
        this.genes[i] =
          DNA.validCharacters[
            Math.floor(Math.random() * DNA.validCharacters.length)
          ];
      }
    }
  }

  // Getters

  getGenes() {
    return this.genes;
  }

  getFitness() {
    return this.fitness;
  }

  getTarget() {
    return this.target;
  }

  getMutationRate() {
    return this.mutationRate;
  }

  // Setters

  setGenes(genes: string[]) {
    this.genes = genes;
  }

  setFitness(fitness: number) {
    this.fitness = fitness;
  }

  setTarget(target: string[]) {
    this.target = target;
  }

  setMutationRate(mutationRate: number) {
    this.mutationRate = mutationRate;
  }
}

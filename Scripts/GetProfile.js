export class ConfigSingleton {
  static #instance = null;
  static #dataLoaded = false;

  // Private constructor to prevent direct construction calls with the `new` operator.
  constructor() {
      if (ConfigSingleton.#instance) {
          throw new Error("Use ConfigSingleton.getInstance()");
      }
  }

  // Method to get the instance of the class.
  static async getInstance() {
      if (!this.#instance) {
          this.#instance = new ConfigSingleton();
          await this.#instance.loadConfig();
      }
      return this.#instance;
  }

  // Method to load configuration file
  async loadConfig() {
      if (!ConfigSingleton.#dataLoaded) {
          try {
              const response = await fetch('./Content/profile.json');
              if (!response.ok) {
                  throw new Error('Failed to fetch the configuration file');
              }
              ConfigSingleton.#dataLoaded = true;
              this.config = await response.json();
          } catch (error) {
              console.error('Error loading configuration:', error);
              ConfigSingleton.#instance = null; // Reset instance on failure
              throw error;
          }
      }
  }

  // method to use the loaded configuration data
  getConfig() {
      if (!ConfigSingleton.#dataLoaded) {
          throw new Error("Configuration is not loaded yet.");
      }
      return this.config;
  }
}

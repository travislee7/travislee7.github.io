import { ConfigSingleton } from "./ConfigFig.js";
// Usage
(async () => {
  try {
      const configInstance = await ConfigSingleton.getInstance();
      updateHTML(configInstance.getConfig());
    } catch (error) {
      console.error('Error:', error);
    }
  })();
  
  function updateHTML(configData) {
    console.log(configData); // Output the config data
    
}
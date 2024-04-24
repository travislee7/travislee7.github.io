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
    document.querySelector("#headshot").src = "images/".concat(configData.About.Headshot);
    document.querySelector("#about-name").innerHTML = configData.About.Name;
    document.querySelector("#about-title").innerHTML = configData.About.Currently;
    document.querySelector("#pfEmail").innerHTML = configData.Contact.EMail;
    document.querySelector("#pfPhone").innerHTML = configData.Contact.Phone;
    document.querySelector("#pfWeb").innerHTML = configData.Contact.Website;
    
}
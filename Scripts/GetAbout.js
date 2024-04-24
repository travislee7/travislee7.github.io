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
  document.querySelector("#pfThumbnail").src = "images/".concat(configData.About.Thumbnail);
  document.querySelector("#pfHeadshot").src = "images/".concat(configData.About.Headshot);
  document.querySelector("#pfAboutName").innerHTML = configData.About.Name;
  document.querySelector("#pfAboutTitle").innerHTML = configData.About.Currently;
  document.querySelector("#pfAboutDesc").innerHTML = configData.About.AboutText;
  document.querySelector("#pfEmail").innerHTML = configData.Contact.EMail;
  document.querySelector("#pfPhone").innerHTML = configData.Contact.Phone;
  document.querySelector("#pfWeb").innerHTML = configData.Contact.Website;    
}
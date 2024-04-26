import { ConfigSingleton } from "./GetProfile.js";
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
  document.querySelector("#pfThumbnail").src = "Content/".concat(configData.About.Thumbnail);
  document.querySelector("#pfLinkedIn").href = configData.Contact.LinkedIn;
  document.querySelector("#pfGitHub").href = configData.Contact.GitHub;
  document.querySelector("#pfStack").href = configData.Contact.StackO;

  document.querySelector("#pfHeadshot").src = "Content/".concat(configData.About.Headshot);
  document.querySelector("#pfAboutName").innerHTML = configData.About.Name;
  document.querySelector("#pfAboutTitle").innerHTML = configData.About.Currently;
  document.querySelector("#pfAboutDesc").innerHTML = configData.About.AboutText;
  document.querySelector("#pfEmail").href = "mailto:".concat(configData.Contact.EMail);
  document.querySelector("#pfEmail").innerHTML = configData.Contact.EMail;
  document.querySelector("#pfPhone").href = "tel:".concat(configData.Contact.Phone);
  document.querySelector("#pfPhone").innerHTML = configData.Contact.Phone;
  document.querySelector("#pfPortfolio").href = configData.Contact.Portfolio;

  document.querySelector("#pfWeb").innerHTML = configData.Contact.Website;    
}
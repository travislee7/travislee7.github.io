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
  document.querySelector("#pfThumbnail").src = "content/".concat(configData.About.Thumbnail);
  document.querySelector("#pfLinkedIn").href = configData.Contact.LinkedIn;
  document.querySelector("#pfGitHub").href = configData.Contact.GitHub;
  document.querySelector("#pfStack").href = configData.Contact.StackO;

}
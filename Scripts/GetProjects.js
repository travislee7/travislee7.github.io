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

  document.querySelector("#pfProject1Img").src = "Content/".concat(configData.Project1.MainImage);
  document.querySelector("#pfProject1Title").innerHTML = configData.Project1.Title;
  document.querySelector("#pfProject1Desc").innerHTML = configData.Project1.Desc;
  document.querySelector("#pfProject1Repo").href = configData.Project1.GitHubRepo;

  document.querySelector("#pfProject2Img").src = "Content/".concat(configData.Project2.MainImage);
  document.querySelector("#pfProject2Title").innerHTML = configData.Project2.Title;
  document.querySelector("#pfProject2Desc").innerHTML = configData.Project2.Desc;
  document.querySelector("#pfProject2Repo").href = configData.Project2.GitHubRepo;

  document.querySelector("#pfProject3Img").src = "Content/".concat(configData.Project3.MainImage);
  document.querySelector("#pfProject3Title").innerHTML = configData.Project3.Title;
  document.querySelector("#pfProject3Desc").innerHTML = configData.Project3.Desc;
  document.querySelector("#pfProject3Repo").href = configData.Project3.GitHubRepo;

}
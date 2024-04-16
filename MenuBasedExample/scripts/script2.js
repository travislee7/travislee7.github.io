const me = new Profile();

document.addEventListener('DOMContentLoaded', () => {
  const contentArea = document.getElementById('content-area');
  const menuItems = document.querySelectorAll('.menu-items li a');

  // Set the correct page
  const loadPage = async (fileName) => {
      response = await fetch(fileName);
      if (response.ok) {
          contentArea.innerHTML = await response.text();
          profile = await getProfile();
          FillAboutMe(profile);
      } else {
          contentArea.innerHTML = '<p>Error loading the content.</p>';
      }
  }

  function FillAboutMe(profile) {
      (async () => {
          let aboutText;
          let file = "content/".concat(profile.About.AboutText);
          response = await fetch(file);
          aboutText = await response.text();
          document.querySelector("#myStory").innerHTML = aboutText;
      })();
      document.querySelector("#myName").innerHTML = profile.About.Name;
      document.querySelector("#currently").innerHTML = profile.About.Currently;
      document.querySelector("#headshot").src = "images/".concat(profile.About.Headshot);

  }

  menuItems.forEach(item => {
      item.addEventListener('click', (e) => {
          e.preventDefault();
          const page = item.getAttribute('data-page');
          loadPage(page);
      });
  });

  // Load the default page
  let defaultPage = "about.html";
  loadPage(defaultPage);

}); 

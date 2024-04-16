class Profile {
  myName =  "Add Name";
  myTitle = "Add Title";
  myHeadshot = "Headshot.jpg";
  constructor() {
    // Read the profile file
    const myProfile = async () => {
      response = await fetch("content/profile.json");
      if (response.ok) {
        return await response.json();
      }
    }
    this.myName = myProfile.about.name;
  } // End of constructor
} // End of class

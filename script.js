// Get all the needed items

const checkBox = document.getElementById('checkbox');
const sliderContainer = document.getElementById('speed');
const options = document.getElementById('options');
const orbitsManager = document.getElementById('orbit-container');

const title = document.getElementById('options-title');

const info_title = document.getElementById('title-info');
const info_text = document.getElementById('wrapper-text');

const allInfoElements = document.getElementById('info-container');

const names = ['Solaria', 'Lynphea', 'Etheris', 'What the project participants worked on'];

const text = ['Diameter: 4879 km. \n It is located at a distance of about 100 light years from its main cosmic neighbor - the Etheris.  It is also greater, so the acceleration of free fall on it is 2 times greater ',
  'Orbit speed: 35.0 km/s \n Diameter: 12,104 km \n Orbital period: 224.7 days \n \n Lynphea  it is also greater, so the acceleration of free fall on it is 2 times greater',
'Orbit speed: 29.8 km/s \n Diameter: 12,756 km \n Orbital period: 365.25 days \n \n The planet Aetheris is located in the Twinkling Jewels galaxy. in the constellation "Dragon". Etheris The planet revolves around the star “Solaria”. \n \n Geography and climate: \n The planet has a varied geography, including high mountains, vast plains and many bodies of water. The atmosphere of Etheria consists mainly of nitrogen, oxygen and a small amount of argon gases, which provides comfortable conditions for breathing.',
'Zarina Ashrapova-Team owner/Data analyst \n Zarina.ashrapova97@mail.com \n \n  Manzura Kayumova-QA engineer/presentation designer \n kaumova.manzura@gmail.com \n  \n Maftuna Muminova front-end muminovam03@gmail.com \n  \n Khurshed Egamov front-end  egamovkhurshed29@gmail.com' ]

  const speeds = [0.02, 0.051428, 0.08348, 0.157, 1.00112, 2.41942, 7.008, 13.765714];

  // Create functions ready for the user
  
  // The actual speed of the planets mutiplier is 380160000
  
  loadSavedData();
  
  function getInputOfSpeed(item) {
    var slideValue = item.value;
  
    // Save the data ready fro next time
  
    localStorage.setItem('speed', item.value);
  
    for(var i = 0; i < names.length; i++)
    {
      var nameOfItem = '--' + names[i] + 'Speed';
      var value = slideValue * speeds[i];
      var value = value + 's';
      console.log(value)
      document.querySelector('body').style.setProperty(nameOfItem, value);
    }
  }
  
  function setupSpeedsOfPlanets(item) {
    var slideValue = item;
  
    if (item > 500) {
      sliderContainer.value = "500";
    }
    else {
      sliderContainer.value = item;
    }
  
    // Save the data eady fro next time
  
    for(var i = 0; i < names.length; i++)
    {
      var nameOfItem = '--' + names[i] + 'Speed';
      var value = slideValue * speeds[i];
      var value = value + 's';
      console.log(value)
      document.querySelector('body').style.setProperty(nameOfItem, value);
    }
  }
  
  // Load the saved data
  
  function loadSavedData() {
    var data = localStorage.getItem('speed');
    
    if (data == null) {
      data = 500;
      localStorage.setItem('speed', 500);
    }
   
    sliderContainer.value = data;
  
    setupSpeedsOfPlanets(data);
  
    var savedInfo = localStorage.getItem('checked');
  
    if (savedInfo == 1) {
      checkBox.checked = true;
    }
    else if (savedInfo == null) {
      checkBox.checked = false;
      localStorage.setItem('checked', 0);
    }
    else {
      checkBox.checked = false;
    }
  
    updateStateOfSystem(checkBox.checked);
  }
  
  // Check the media of the user
  
  function checkMediaOfUser(media) {
    if (media.matches) 
    {
      // User is on a mobile device
  
      options.classList.add('options-mobile');
  
      document.getElementById('space').classList.add('spacing-mobile');
  
      title.classList.add('options-title-mobile');
  
      allInfoElements.classList.add('wrapper-hidden');
  
    } else {
      //User is not on a mobile device
  
      options.classList.remove('options-mobile');
  
      document.getElementById('space').classList.remove('spacing-mobile');
  
      title.classList.remove('options-title-mobile');
  
      allInfoElements.classList.remove('wrapper-hidden');
    }
  }
  
  // Detect when the screen size changes and adjust accordingly
  
  var x = window.matchMedia("(max-width: 700px)")
  checkMediaOfUser(x)
  x.addListener(checkMediaOfUser)
  
  // Reset all the data on button click
  
  function resetData() {
    localStorage.setItem('speed', 500);
  
    sliderContainer.value = "500";
  
    setupSpeedsOfPlanets(500);
  
    checkBox.checked = false;
    localStorage.setItem('checked', 0);
  
    updateStateOfSystem(checkBox.checked);
  }
  
  // Get the checkbox status
  
  function saveCheckState() {
  
    if (checkBox.checked) {
      localStorage.setItem('checked', 1);
    }
    else {
      localStorage.setItem('checked', 0);
    }
  
    updateStateOfSystem(checkBox.checked);
  }
  
  function updateStateOfSystem(item) {
    
    if (item) {
      orbitsManager.classList.add('showing');
      orbitsManager.classList.remove('hiding');
    }
    else {
      orbitsManager.classList.remove('showing');
      orbitsManager.classList.add('hiding');
    }
  }
  
  // Show the information of the current planets
  function showUserInfo(num) {
    
    info_title.innerText = capitaliseFirstLetter(names[num]);
  
    info_text.innerText = text[num];
  }
  
  function capitaliseFirstLetter(word) {
   return word.substring(0, 1).toUpperCase() + word.slice(1);
  }
  
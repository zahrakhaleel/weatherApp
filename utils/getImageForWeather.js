const images = {
    Clear: require('../assets/clear.jpg'),
    Hail: require('../assets/hail.jpg'),
    'Heavy Cloud': require('../assets/heavy-cloud.jpg'),
    'Light Cloud': require('../assets/heavy-cloud.jpg'),
    'Cloud': require('../assets/heavy-cloud.jpg'),
    'Heavy Rain': require('../assets/rain.jpg'),
    'Light Rain': require('../assets/rain.jpg'),
    Rain: require('../assets/rain.jpg'),
    Showers: require('../assets/rain.jpg'),
    Sleet: require('../assets/sleet.jpeg'),
    Snow: require('../assets/snow.jpg'),
    Thunder: require('../assets/thunder.jpeg'),
    Haze: require('../assets/haze.jpg'),
    Sunny: require('../assets/sun.jpg'),
  };
  
  export default weather => images[weather];
<template>
  <q-page class="q-pa-md bg-image">
    <q-card class="weather-card">
      <q-card-section>
        <div class="text-h6">Weather Information</div>
      </q-card-section>

      <q-card-section>
        <q-input bottom-slots v-model="location" label="Enter Location" counter :dense="dense" color="black">
        <template v-slot:prepend>
          <q-icon name="place" color="blue" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="location = ''" class="cursor-pointer" />
        </template>
        <template v-slot:hint>
          Field hint
        </template>

      </q-input>
        <q-btn class="button" label="Get Weather" color="accent" @click="getWeather" :style="buttonStyle" :class="buttonClass" />
      </q-card-section>

      <q-card-section v-if="weatherData">
        <div class="weather-container">
          <div class="location-section">
            <div class="text-h6">
              <i class="fas fa-map-marker-alt"></i> {{ weatherData.name }}, {{ weatherData.sys.country }}
            </div>
            <div class="timestamp">
              <i class="fas fa-clock"></i> {{ new Date().toLocaleString() }}
            </div>
          </div>

          <div class="main-weather">
            <div class="weather-icon">
              <i :class="getWeatherIcon(weatherData.weather[0].main)"></i>
            </div>
            <div class="weather-info">
              <div class="temperature">
                {{ weatherData.main.temp }}°C
              </div>
              <div class="feels-like">
                Feels like : {{ weatherData.main.feels_like }}°C
              </div>
              <div class="description">
                {{ weatherData.weather[0].description }}
              </div>
            </div>
          </div>
          
          <div class="additional-details">
            <div class="detail-item">
              <i class="fas fa-tint"></i> Humidity : {{ weatherData.main.humidity }}%
            </div>
            <div class="detail-item">
              <i class="fas fa-wind"></i> Wind Speed : {{ weatherData.wind.speed }} m/s {{ weatherData.wind.deg }}°
            </div>
            <div class="detail-item">
              <i class="fas fa-tachometer-alt"></i> Pressure : {{ weatherData.main.pressure }} hPa
            </div>
            <div class="detail-item">
              <i class="fas fa-sun"></i> UV Index : {{ weatherData.uvi }}
            </div>
            <div class="detail-item">
              <i class="fas fa-thermometer"></i> Dew Point : {{ weatherData.main.dew_point }}°C
            </div>
            <div class="detail-item">
              <i class="fas fa-eye"></i> Visibility : {{ weatherData.visibility / 1000 }} km
            </div>
          </div>
        </div>
      </q-card-section>
      
      <q-card-section v-if="error">
        <div class="text-negative">
          <i class="fas fa-exclamation-triangle"></i> {{ error }}
        </div>
      </q-card-section>
    </q-card>
    <div class="awan no1"></div>
    <div class="awan no2"></div>
    <div class="awan no4"></div>
    <div class="awan no5"></div>
  </q-page>
</template>

<script setup>
import { useWeatherStore } from '../stores/weatherStore';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const weatherStore = useWeatherStore();
const { location, weatherData, error } = storeToRefs(weatherStore);

const getWeather = () => {
  weatherStore.fetchWeather();
};


const buttonStyle = {
  color: 'black',
  boxShadow: 'none'
};

const buttonClass = 'custom-button';

const getWeatherIcon = (mainWeather) => {
  switch (mainWeather.toLowerCase()) {
    case 'clear':
      return 'fas fa-sun';
    case 'clouds':
      return 'fas fa-cloud';
    case 'rain':
      return 'fas fa-cloud-showers-heavy';
    case 'snow':
      return 'fas fa-snowflake';
    case 'thunderstorm':
      return 'fas fa-bolt';
    case 'drizzle':
      return 'fas fa-cloud-rain';
    case 'mist':
    case 'smoke':
    case 'haze':
    case 'dust':
    case 'fog':
    case 'sand':
    case 'ash':
    case 'squall':
    case 'tornado':
      return 'fas fa-smog';
    default:
      return 'fas fa-cloud';
  }
};

onMounted(() => {
  weatherStore.error = null;
});
</script>

<style lang="scss" scoped>
.q-page{
  background: linear-gradient(0deg, rgba(134,246,255,1) 0%, rgba(255,255,255,1) 100%), url('../assets/bg2-cloudy.png');
  color: black;
}

.awan{
  width: 200px;
  height: 60px;
  background:#ffffff;
  border-radius: 200px;
  position: relative;
  z-index: 9999;
}

.awan:before,
.awan:after{
    content: ' ';
    position: absolute;
    background: #ffffff;
    width: 150px;
    height: 80px;
    position: absolute;
    top: -25px;
    left: 10px;
    border-radius:100px;
    text-transform: rotate(30deg); 
  }

.awan:after{
    width: 120px;
    height: 120px;
    top: -55px;
    left: auto;
    right: 15px;
  }

.no2{
  left: 200px;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  -o-transform: scale(0.6);
  -ms-transform: scale(0.6);
  transform: scale(0.6);
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";
  filter: alpha(opacity=60);
  opacity: 0.6;
  -webkit-animation: jalankanawan 25s linear infinite;
  -moz-animation: jalankanawan 25s linear infinite;
  -ms-animation: jalankanawan 25s linear infinite;
  -o-animation: jalankanawan 25s linear infinite;
  animation: jalankanawan 25s linear infinite;
}

.no4{
  left: 470px;
  top: -250;
  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  -o-transform: scale(0.75);
  -ms-transform: scale(0.75);
  transform: scale(0.75);
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";
  filter: alpha(opacity=75);
  opacity: 0.75;
  -webkit-animation: jalankanawan 18s linear infinite;
  -moz-animation: jalankanawan 18s linear infinite;
  -ms-animation: jalankanawan 18s linear infinite;
  -o-animation: jalankanawan 18s linear infinite;
  animation: jalankanawan 18s linear infinite;
}

.no5{
  left: -150px;
  top: -150px;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
  opacity: 0.8;
  -webkit-animation: jalankanawan 20s linear infinite;
  -moz-animation: jalankanawan 20s linear infinite;
  -ms-animation: jalankanawan 20s linear infinite;
  -o-animation: jalankanawan 20s linear infinite;
  animation: jalankanawan 20s linear infinite;
}

.no1{
  top: 90px;
  -webkit-animation: jalankanawan 15s linear infinite;
  -moz-animation: jalankanawan 15s linear infinite;
  -ms-animation: jalankanawan 15s linear infinite;
  -o-animation: jalankanawan 15s linear infinite;
  animation: jalankanawan 15s linear infinite;
}

.weather-card {
  max-width: 500px;
  margin: 0 auto;
  background: linear-gradient(0deg, rgba(125,255,247,1) 0%, rgba(255,255,255,1) 98%);
  color: rgb(0, 0, 0); 
}

.button {
  margin-top: 12px;
}

.weather-container {
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 16px;
  background-image: url('../assets/bg-cloudy.png'); 
  background-size: cover; 
  background-position: center; 
}

.location-section {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}
.location-section i{
  color: blue;
}

.timestamp i{
  margin-top: 8px;
  color: green;
}

.main-weather {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 8px;
}

.weather-icon {
  font-size: 64px;
  margin-right: 16px;
  color: yellow;
}

.weather-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.weather-info .temperature {
  font-size: 32px;
  font-weight: bold;
  color: red;
}

.weather-info .feels-like {
  margin-top: 4px;
  font-size: 14px;
}

.weather-info .description {
  margin-top: 4px;
  font-size: 16px;
}

.additional-details {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.detail-item {
  flex: 1 1 calc(50% - 16px);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.detail-item i {
  margin-right: 8px;
}

.additional-details i{
  color: blue;
}

.custom-button {
  box-shadow: none !important; 
  color: black !important; 
}

@-webkit-keyframes jalankanawan {
  0% { margin-left: 1280px; }
  100% { margin-left: -1280px; }
}

@-moz-keyframes jalankanawan {
  0% { margin-left: 1280px; }
  100% { margin-left: -1280px; }
}

@-o-keyframes jalankanawan {
  0% { margin-left: 1280px; }
  100% { margin-left: -1280px; }
}

@keyframes jalankanawan {
  0% { margin-left: 1280px; }
  100% { margin-left: -1280px; }
}


</style>

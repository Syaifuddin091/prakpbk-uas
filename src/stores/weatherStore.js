// src/stores/weatherStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

const apiKey = "fe12e29f3110d0d9f962d5ba3a1ba46e";

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    location: '',
    weatherData: null,
    error: null,
  }),
  actions: {
    async fetchWeather() {
      if (this.location) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${apiKey}`
        try {
          const response = await axios.get(apiUrl)
          this.weatherData = response.data
          this.error = null
        } catch (error) {
          console.error("Error fetching weather data:", error)
          this.weatherData = null
          if (error.response) {
            this.error = error.response.data
          } else {
            this.error = "An error occurred while fetching weather data"
          }
        }
      } else {
        console.error("Location is empty")
        this.error = "Location cannot be empty"
      }
    }
  }
})

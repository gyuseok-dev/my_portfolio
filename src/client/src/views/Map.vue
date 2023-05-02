<template>
    <div class="container">
    <GoogleMap
      api-key="AIzaSyB1KwErZ4wIwcunI_yZk6D8alaBi8swfnE"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="13"
      language="kor"
      :disable-default-ui="true"
    >
      <MarkerCluster>
        <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i">
            
        </Marker>
      </MarkerCluster>
    </GoogleMap>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GoogleMap, Marker, MarkerCluster, InfoWindow } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster, InfoWindow },
  setup() {
    let center = { lat: 37.5290506, lng: 127.1172189 }
    window.navigator.geolocation.getCurrentPosition((position) => {
        center = { lat: position.coords.latitude, lng: position.coords.longitude }
    });

    const locations = [
        { lat: 37.5290506, lng: 127.1172189 }
    ]

    return { center, locations }
  },
})
</script>

<style>
.container {
    left: 50;
    width: 800px;
    height: 100%;
}
</style>
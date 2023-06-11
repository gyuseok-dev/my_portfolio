<template>
  <main>
    <div class="container">
      <GoogleMap api-key="AIzaSyB1KwErZ4wIwcunI_yZk6D8alaBi8swfnE" style="width: 100%; height: 500px"
        :center="center" :zoom="13" language="kor" :disable-default-ui="true" @click="onClick($event)">
        <MarkerCluster>
          <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i">
          </Marker>
        </MarkerCluster>
        <Polygon :options="polyOpt"/>
      </GoogleMap>
    </div>
    <div>
      <button @click="locations = []">리셋</button>
    </div>
    <div>
      {{ locations }}
    </div>
  </main>
</template>

<script lang="ts">
import TestComponentVue from '@/components/TestComponent.vue';
import { defineComponent, ref } from 'vue';
import { GoogleMap, Marker, MarkerCluster, InfoWindow, Polygon, Polyline } from 'vue3-google-map'

export default defineComponent({
  // 마커 깔고 빠른 랜더링 보여주기
  components: { GoogleMap, Marker, MarkerCluster, InfoWindow, TestComponentVue, Polygon, Polyline },
  setup() {
    let center = ref<{ lat: number, lng: number }>({ lat: 37.5290506, lng: 127.1172189 })
    let locations = ref<{ lat: number, lng: number }[]>([])

    let polyOpt = ref<any>({
      path: locations.value, strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    })
    window.navigator.geolocation.getCurrentPosition((position) => {
      center.value = { lat: position.coords.latitude, lng: position.coords.longitude }
    });

    function onClick(event: typeof GoogleMap.prototype.$click) {
      center.value = { lat: event.latLng.lat(), lng: event.latLng.lng() }
      locations.value.push({ lat: center.value.lat, lng: center.value.lng })
      polyOpt.path = locations.value
    }

    return { center, locations, onClick, polyOpt }
  },
  methods: {
    // onClick() {
    //   console.log('click')
    // }
  }
})
</script>

<style scoped>
.main {
  display: flex;

}

.container {
  left: 25%;
  width: 800px;
  border: 1px solid red;
}

button {
  color: #000;
}
</style>
<template>
  <div class="map-container">
    <l-map
      :zoom="zoom"
      :center="center"
      class="map-element"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      ></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<style>
.map-container {
  height: 100%; 
  width: 100%;
  background-color: rgb(187, 153, 153);
}

.map-element {
  height: 100%; 
}
</style>
<script setup>
import { ref } from 'vue';
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
const zoom = ref(13);
const center = ref([-23.5505, -46.6333]); 
const url = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
const attribution = ref('&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors');
const markerLatLng = ref([-23.5505, -46.6333]); 
</script>



<script lang="ts">
    import { onMount } from 'svelte';
    import type { Writable } from 'svelte/store';
    import { googleApiKey } from '../../api';
	import { scale } from 'svelte/transition';

    export let heightClass: string = "h-80";
    export let widthClass: string = "w-80";
    export let otherClasses: string | undefined = undefined;

    let mapElement: HTMLElement;
    let map: google.maps.Map;
    let userPosition: Writable<google.maps.LatLngLiteral | null> = { set: () => {} };

    onMount(() => {
      // Initialize the Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
  
      script.onload = () => {
        initMap();
      };
    });
  
    const initMap = () => {
      // Get the user's current position
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLatLng = {
              lat: 6.483183179983588,//position.coords.latitude,
              lng: 7.495908988341504//position.coords.longitude,
            };

            userPosition.set(userLatLng);
  
            map = new google.maps.Map(mapElement, {
              center: userLatLng,
              zoom: 19,
              disableDefaultUI: true,
            });

            new google.maps.Marker({
              position: userLatLng,
              map: map,
              title: 'Your Location',
            });
          },
          () => {
            handleLocationError(true);
          }
        );
      } else {
        handleLocationError(false);
      }
    };
  
    const handleLocationError = (browserHasGeolocation: boolean) => {
      const message = browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : "Error: Your browser doesn't support geolocation.";
      console.error(message);
    };
  </script>
  
  <div in:scale bind:this={mapElement} class="{heightClass} {widthClass} {otherClasses}"></div>
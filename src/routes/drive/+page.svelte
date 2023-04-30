<svelte:head>
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
    <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js'></script>
    <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css' type='text/css' />
</svelte:head>

<script lang="ts">
  
    import {onMount} from 'svelte'
    import mapboxgl from 'mapbox-gl';
    import FaAngleLeft from 'svelte-icons/fa/FaAngleLeft.svelte';

    import { foodbanks } from '../../backend/foodbanks.js';
    import { donations } from '../../backend/donations.js';
    import type { Donation } from '../../backend/donations.js';

    onMount(async() => {
        mapboxgl.accessToken = "pk.eyJ1IjoidHdpbmtsZWJ1bnoxMDciLCJhIjoiY2xoMmFoMWl2MWF5YjNzbXB2amc3NmdiaiJ9.TtL3czNMJqBCphmq2_arqg"

        const map = new mapboxgl.Map({
          container: 'mapcontainer',
          style: 'mapbox://styles/mapbox/streets-v12', 
          center: [0, 0], 
          zoom: 3
        });

        let userLocation: mapboxgl.LngLatLike;

        navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});

        let directions: any = null;
        let addedControl = false;

        for (let i = 0; i < foodbanks.length; i++) {
            console.log("test");
            const popup = new mapboxgl.Popup({offset: 25}).setText(foodbanks[i].name);
            let marker = new mapboxgl.Marker({color: '#30704c'})
                .setLngLat([foodbanks[i].longitude, foodbanks[i].latitude])
                .addTo(map);
            marker.setPopup(popup);
            
            let div = document.createElement('div');
            let name = document.createElement('h2');
            name.textContent = foodbanks[i].name;
            let description = document.createElement('p');
            description.textContent = foodbanks[i].description;
            let button = document.createElement('button');
            button.className = "navigate-button";
            button.textContent = "Navigate to";
            button.onclick = () => {
                if (directions == null) {
                    directions= new MapboxDirections({
                        accessToken: mapboxgl.accessToken,
                        interactive: false
                    });
                }
                directions.setOrigin(userLocation);
                directions.setDestination([foodbanks[i].longitude, foodbanks[i].latitude]);
                
                if (!addedControl) {
                    map.addControl(directions, 'top-left');
                    document.getElementsByClassName("directions-control-instructions").item(0).remove();
                    addedControl = true;
                }

                map.flyTo({center: [foodbanks[i].longitude, foodbanks[i].latitude], zoom: 13})
            }
            div.appendChild(name);
            div.appendChild(description);
            div.appendChild(button);
            div.classList.add("popup");
            popup.setDOMContent(div);

        }

        for (let i = 0; i < donations.length; i++) {

            let listOfFood: String[] = [];
            let currentFood: Donation = donations[i];

            const popup = new mapboxgl.Popup({offset: 25}).setText("Food Donation")
            
            let marker = new mapboxgl.Marker({color: '#84BE9E   '})
               .setLngLat([currentFood.longitude, currentFood.latitude])
               .addTo(map);
            marker.setPopup(popup);
            

            let button = document.createElement('button');
            button.textContent = "Navigate to";
            button.className = "navigate-button";
            button.onclick = () => {
                if (directions == null) {
                    directions= new MapboxDirections({
                        accessToken: mapboxgl.accessToken,
                        interactive: false
                    });
                    console.log(directions);
                }
                directions.setOrigin(userLocation);
                directions.setDestination([donations[i].longitude, donations[i].latitude]);
                
                if (!addedControl) {
                    map.addControl(directions, 'top-left');
                    document.getElementsByClassName("directions-control-instructions").item(0).remove();
                    addedControl = true;
                }

                map.flyTo({center: [donations[i].longitude, donations[i].latitude], zoom: 13})
            }

            let div = document.createElement('div');
            let title = document.createElement("h2");
            title.className = "title";
            title.textContent = "Food Donation";
            div.appendChild(title);
            let list = document.createElement('ul');
            for (let k = 0; k < currentFood.food.length; k++){
                let name = document.createElement('li');
                name.textContent = currentFood.food[k].name + ": " + currentFood.food[k].servings + " serving" + (currentFood.food[k].servings > 1 ? "s" : "");
                list.appendChild(name);
            }
            div.appendChild(list);
            div.appendChild(button);
            popup.setDOMContent(div);
            div.classList.add("popup");
        }

        function successLocation (position: GeolocationPosition) {
            
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
          
            console.log(position)
            userLocation = [long, lat]
            map.flyTo({center: userLocation, zoom: 13})

        }

        function errorLocation (e: GeolocationPositionError) {
            console.log(e)
        }
        
    })
      
    

</script>


<div id="main-content">
    <div id="mapcontainer"></div>
    <div class="menu" style="display: flex; align-items: center; gap: 10px;">
        <a href="/">
            <div class="ml-icon">
            <FaAngleLeft />
            </div>
        </a>
    </div>
</div>

<style>
  #mapcontainer { 
    position: absolute; 
    top: 0;
    bottom: 0;
    width: 100%; 
    height: 100%
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background100);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    left: 10px;
    width: 30px;
    height: 30px;
    margin: 10px;
    padding: 20px;
  }
  .marker {
    display: block;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
 }

 .ml-icon {
    color: var(--accent500);
  }
</style>
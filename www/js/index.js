/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var map = null;
var marker = null;

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    var div = document.getElementById("page1map");

    // Create a Google Maps native view under the map_canvas div.
    map = plugin.google.maps.Map.getMap(div);

    // If you click the button, do something...
    var button = document.getElementById("button");
    button.addEventListener("click", function () {

        // Move to the position with animation
        map.animateCamera({
            target: { lat: 37.422359, lng: -122.084344 },
            zoom: 17,
            tilt: 60,
            bearing: 140,
            duration: 5000
            
        });

        // Add a maker
        marker = map.addMarker({
            position: { lat: 37.422359, lng: -122.084344 },
            title: "Welecome to \n" +
                "Cordova GoogleMaps plugin for iOS and Android",
            snippet: "This plugin is awesome!",
            animation: plugin.google.maps.Animation.BOUNCE,
            icon: {
                url: "img/logo.png"
            }

        });


        // Show the info window
       // marker.showInfoWindow();
    });

    var setDivButton = document.getElementById("doSetDiv");
    setDivButton.addEventListener("click", function () {
        console.log("Click!");
        var myDiv = map.getDiv();
        if (myDiv) {
            console.log("clear div");
            map.setDiv(null);
        }
        else {
            console.log("set div");
            map.setDiv(document.getElementById("page1map"));
        }
    });

    var removebutton = document.getElementById("mapMarker");
    removebutton.addEventListener("click", function(){
            console.log("remove");
            var xxx = marker.remove();
            xxx.then(success, failure);
    });

}
function success(result){
    console.log("success"+result);
}

function failure(result){
    console.log("failure");
}


// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  let rideFirstName = ride.passengerDetails.first
  let rideLastName = ride.passengerDetails.last
  let rideNumber = ride.passengerDetails.phoneNumber
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state
  let pickupZip = ride.pickupLocation.zip
  let dropAddress = ride.dropoffLocation.address
  let dropCity = ride.dropoffLocation.city
  let dropState = ride.dropoffLocation.state
  let dropZip = ride.dropoffLocation.zip
  
  // let serviceLevel
  // if (SOMETHING TO GET PURPLE) {
  //   console.log(``)
  // } else if (SOMETHING TO GET XL){
  //   console.log(``)
  // } else{
    
  // }

  console.log(`Noober X Passenger: ${rideFirstName} ${rideLastName} - ${rideNumber} Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. Dropoff at ${dropAddress}, ${dropCity}, ${dropState}${dropZip} `)
  // 🔥 YOUR CODE ENDS HERE 🔥
})

// STEP 3: Create Sighting cards.
// -----------------------
// Send an HTTP GET request to the following address: https://hotline.whalemuseum.org/api.json
// Study the response data you get back, closely.
// You will be creating a component for each 'sighting' in the list.
// 
// IMAGE INSTRUCTIONS: for the image, if the species is an orca, harbor porpoise
// or humpback, use the relevant image links in the assets/ folder. If not, use
// the unknown.png. 
//
// Create a function that will programmatically create the following DOM component:
//
// <div class="sighting">
//   <div class="headline">{description}</div>
//   <div class="species">
//     <div class="img-container">
//       <img src={url of species image - SEE ABOVE FOR INSTRUCTIONS} />
//     </div>
//     <span>{species name}</span>
//   </div>
// </div>
//
// Create a card for each of the sightings and add the sighting to the DOM.

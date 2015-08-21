var db = require('./models');


//create

db.city.create({
  name:"Seattle",
  reqGallons:"10",
  reqMeals:"30",
  reqGuns:"2",
  floodInfo:"Based on Seattle’s history, this city deals well with rain fall and is well equipped with dealing with severe amounts of water. Even though the soil is highly liquefiable as mentioned above, Seattle has fewer than 10 buildings that have had more than on flood loss.",
  earthquakeInfo:"According to Seattle.gov, 15% of Seattle's total area consists of liquefiable soil and a 7.0 earthquake has the potential of creating 5,000 – 30,000 landslides depending on how wet the soil is. The unreinforced masonry buildings in Seattle are mostly concentrated in areas expected to be hit by the earthquake.",
  marauderInfo:"Seattle has a slightly lower crime rate for its size. Like any city, people will be the biggest concern in a calamity. Although this is relatively difficult to predict, given its relatively recent track record, it is safe to predict high levels of marauders.",
  floodThreatLevel:"2",
  earthquakeThreatLevel:"5",
  marauderThreatLevel:"3"
}).then(function(data){
  //data = item that was created
  console.log(data)
});

db.city.create({
  name:"Spokane",
  reqGallons:"20",
  reqMeals:"60",
  reqGuns:"3",
  floodInfo:"Being placed right over the Spokane river, FEMA describes this city as a possible ‘floodway’. This, and the fact that Spokane is not relatively well primed for heavy rainfall is a cause for this city to remain constantly on the lookout for flood warnings and preparations against them.",
  earthquakeInfo:"While there was an alarming 13 earthquakes in 2010, experts have never considered Spokane at a major risk of a large earthquake. Homefacts.com lists a 10% chance of a 5.0 quake in the next 50 years.",
  marauderInfo:"Spokane has a high rate of crime within Washington, according to neighborhoodscouts.com. This, and being a highly dense population combines for a very bad risk of being looted during a natural disaster.",
  floodThreatLevel:"4",
  earthquakeThreatLevel:"2",
  marauderThreatLevel:"4"
}).then(function(data){
  //data = item that was created
  console.log(data)
});

db.city.create({
  name:"Bellevue",
  reqGallons:"7",
  reqMeals:"21",
  reqGuns:"1",
  floodInfo:"There is major potential for soil liquification at the Newport shores neighboring Lake Washington, and many landslides that would happen around steep sloes, particularly east of Weowna Park. But being located in Western Washington, this city is well equipped for lots of rainfall and would fare well in this case.",
  earthquakeInfo:"Bellevue shares a fault line, just like Seattle and shares many of the same risks. The increasing number of sky-rises within Bellevue also does not make it a safe place to live or work.",
  marauderInfo:"Bellevue is ranked as the 37th safest city in Washington by safewise.com. Bellevue is a reasonably safe place, as long as the roving hoards don't migrate.",
  floodThreatLevel:"4",
  earthquakeThreatLevel:"5",
  marauderThreatLevel:"1"
}).then(function(data){
  //data = item that was created
  console.log(data)
});

db.city.create({
  name:"Vancouver",
  reqGallons:"10",
  reqMeals:"30",
  reqGuns:"2",
  floodInfo:"Vancouver is wrapped around by the Columbia River and expects a moderate level of flooding. This can be seen simply by browsing Vancouver flooding on google.com.",
  earthquakeInfo:"Vancouver has many small earthquakes throughout the years thus relieving pressure meaning that there is a small likelihood of a large earthquake going through the area.",
  marauderInfo:"Halfway between Spokane and Bellevue in crime rankings, Vancouver is a fairly safe place. It is, however, right next to Portland which has a dense population and higher crime rate.",
  floodThreatLevel:"4",
  earthquakeThreatLevel:"1",
  marauderThreatLevel:"2"
}).then(function(data){
  //data = item that was created
  console.log(data)
});

db.city.create({
  name:"Everett",
  reqGallons:"20",
  reqMeals:"260",
  reqGuns:"3",
  floodInfo:"Everett is surrounded by the Salish Sea putting it at a high risk for flooding. Western neighborhoods with steep slopes are especially vulnerable to landslides and becoming isolated by impassible roads.",
  earthquakeInfo:"With a fault line going through the city and an abundance of old, unreinforced masonry buildings Everett has a high danger from an inevitable earthquake.",
  marauderInfo:"With a higher crime rate than Seattle. If bands of marauders form in Washington, there will definitely be some formed here.",
  floodThreatLevel:"4",
  earthquakeThreatLevel:"4",
  marauderThreatLevel:"5"
}).then(function(data){
  //data = item that was created
  console.log(data)
});




//update option 1
// db.city_info.update(
//   {name:'Dallas',flood_info:'4'},
//   {where:{id:2}}
// ).then(function(data){
//   //data = number of items updated
//   console.log(data);
// });


//update option 2
// db.city_info.find({where:{id:2}}).then(function(item){

//   //item = item found by above "where" condition
//   // console.log(item.get());

//   item.name="Austin";
//   item.save().then(function(updatedItem){
//     //updatedItem = the updated version of the item
//     console.log(updatedItem.get());
//   });

// });
// update command w/o spaces:
// db.user.update({prepScore:50,cityId:1,gallons:5,meals:9,guns:4},{where:{id:1}}).then(function(data){console.log(data);});

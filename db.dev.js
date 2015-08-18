var db = require('./models');

// Add a city
// db.city_info.create({name: 'seattle', flood_info: 'floods', earthquake_info: 'earthquakes', marauder_info: 'arrrr.'});

// clear/destroy the content of a table
// db.city_info.findAll().then(function(models){ for(var i=0; i<models.length; ++i){models[i].destroy()}  })

// create Seattle model
/*db.city_info.create({
	name: 'Seattle',
	flood_info:'something to think about',
	earthquake_info: 'Seattle.gov cites earthquakes as the most serious threat to Seattle. bout 15% of Seattle\'s total area consists of liquifiable soil. They estimate a 7.0 could create 5,000- 30,000 landslides depending on how wet the soil is. Some of the outlying areas could be cut off for up to a month. The 820 or so unreinforced masonry buildings in Seattle are mostly concentrated in areas expected, and would not fare well.',
	marauder_info:'Although Seattle has a slightly lower crime rate for it\'s size. Like any city, people will be the biggest concern in a calamity.'
}).then(function(log){console.log('Seattle created!')});*/

db.city_info.create({
	name: 'Portland',
	flood_info:'Flood research has not yet been conducted on this city.',
	earthquake_info: 'Earthquake research has not yet been conducted on this city.',
	marauder_info:'Marauder research has not yet been conducted on this city.'
}).then(function(new_city){console.log( new_city.get().name + ' created!')});
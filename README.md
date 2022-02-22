# Interactive-Map

Hints!
1. You're going to want to run a fetch request with a url of something like this: `https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`
2. Once you get the response, parse it and save it to a variable
3. Loop over that variable and add markers to the latitudes and longitudes within the data. Don't forget to console log your API response so you know exactly what dot notation to use! Refer to the "metro stations" section of the activity from Saturday.
4. create a loop to go through the metro stations to loop through this section
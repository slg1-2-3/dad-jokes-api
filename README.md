# dad-jokes-api

# 2025-11-05
- ✅set up express 
🎧: https://www.youtube.com/watch?v=0_kIy_euC6k

# 2025-11-06
- ✅ worked to understand proxy servers more. Was able to create and connect to two endpoints from my client!!

# 2025-11-09
- ✅ use proxyserver.js to pull the joke
- ✅ display joke on front end
- 🎓Learned about CORS, since it caused me to not be able to console.log effectively... ([MDN CORS Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin?utm_source=devtools&utm_medium=firefox-cors-errors&utm_campaign=default))

# 2025-11-15
- ✅ add git ignore file
- ✅ separate proxyServer into controller & service files
    - 🎓[dev.to link for understanding express routes, controllers & services](https://dev.to/hakimmohamed/understanding-express-routes-controllers-and-services-a-beginners-guide-nodejs-tutorial-part-12-2cd4)
    - 🎓[mdn routes and controllers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)
    - Note: now there's an insane delay between pressing the "Get Joke" button and seeing the joke. Maybe a loading screen is a good idea. 
- 🎧: [chill chill journal🐈‍⬛](https://www.youtube.com/watch?v=9kzE8isXlQY&list=RD9kzE8isXlQY&start_radio=1)

# 2025-11-18
- 🎧: [Gas Station Radio: DJ Junk Food](https://www.youtube.com/watch?v=bDGhu2DgSDA)
- 😢search jokes based off of keyword
    -Note 📝: Updated the html & css no problem to have a new tile. The problems came when I tried to update the controller, route, and services files along wit the script file. For some reason I'm not displaying hello world when I press the button. 

# 2025-12-31
- search jokes based off of keyword
    - Note 📝: Turns out the error for the new tile was because I was missing "const data = await response.json()" specifically the .json() portion. Now I see "hello world" 
- added a space for user input 

# 2026-01-01
- search jokes based off of keyword
    - Note 📝: Happy New Year! Today's goal is to use the user input in our query. 
    - Ok, we've got the user input on script.js working. 🏃🏾‍♀️ Next time the goal is to pass that value to the "backend" in services.js

# Next Up
- loading screen
- add a limit to requests (5 req per hour)
- search jokes based off of keyword

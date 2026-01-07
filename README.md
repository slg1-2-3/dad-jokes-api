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
# 2026-01-02
- search jokes based off of keyword
    - Today we'll learn about [forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) 

# 2026-01-03
Learned more about [sending form data](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
[Javascript Form Submission](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

# 2026-01-04
Learning about [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Note 📝: OMG it works 🥳💃🏾. The jokes are just in the console for now, we'll work on displaying them later. In short we learned that a "form" within html is the typical way for users to input data. Then for the data to be sent along, we include the search term to the parameters of the url to be sent to the controller. The controller then saves the search term as a variable from the req.query.term {"term":"searchString"} and passes THAT along to services.js where we actually search the Dad Joke API with our user inputted search term! In short html --> scripts.js --> controllers.js --> services.js --> Dad Joke API 😸

# 2026-01-05
- Displayed the joke in a new <p> tag 😊. Just took one joke from the array for now.

# 2026-01-06
- Ok, time to make a loading screen. Following [this person's tutorial](https://dev.to/lensco825/how-to-quickly-add-a-loading-screen-onto-your-website-7ga)
- Managed to get the spinner on the front page, however, it's just there. I want it to only pop up **after** we click "search jokes" button. 

# Next Up  
- loading screen
- add a limit to requests (5 req per hour)
- ✅search jokes based off of keyword

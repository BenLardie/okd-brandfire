Stared off with Create React App using Yarn as my package manager. 

To get running first run ```yarn install``` then run ```yarn start``` that will get local server running. 

When I first saw the mockups on Photoshop I knew that the first thing to tackle was the full size version first. Normally you would start with the mobile but the full size had more elements and was easy to switch from the 2 column to 1 using grid. At first I left the form blank and just focused on the layout. 

Once the layout was all there I put in the form leaving out functionality at first because my main focus was to get the style first then use what time remaining for some functions. I did not get time for a backend though so the form when submitted it fires off an alert showing your data. 

After the form was in it was time to focus on the responsive design. I used an id on all background images so it was easy to remove them with breakpoint. Then switch the grid to back to block. When I did this the website was rendering with a white stripe down on the right side so I went through every element with the inspector to find the cause. It ended up being a problem with the border on form and content box sizing. 

After that was fixed I worked on mobile nav and the recipe download. There is still a bug with the download, when clicked the pdf tries to download but can't find the file. I was looking into libraries to do this but as time permitted I just focused on what I could do time being. 

If I had more time for the project I would have tackled the english and french versions using the context api to easily share state with all the elements. 

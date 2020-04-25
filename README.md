#VisitMorocco

##My project is based on providing a website for users about visiting Morocco, as it is becoming more popular with holidaymakers and tourists. 
The website will give the user information about the best cities in Morocco to visit such as Casablanca, Marrakech, Agadir and Fes. 
It will allow the user to search what these cities have to offer will start the user on booking a holiday to morocco.

###UX

####User Stories

######Below are user stories that were made so that I have a vision for my website:

I want the website to be easy to use and be as clear as possible

I want to know more about what cities in Morocco have to offer. 

I want to see a map showing what hotels I can stay at, restaurants I can eat at and places I can visit. 

I want to see images of what the cities in Morocco look like.

I would like to register my interest in visiting Morocco.

#####Strategy
My plan for the website was to create something for the user that they would learn more about what Morocco has to offer and to see what they can do in cities like Marrakech,
so they would be more interested in visiting then they were before they visited the website.

#####Scope
The website is to show interested holidaymakers and tourists the different types of places they can visit in Morocco from the Iconic city of Casablanca to the sandy beaches of Agadir.
I also wanted to provide the user with the ability to research the holiday so see what hotels they would like to stay at and places to eat and where they would like to visit.
Another aspect of the website is to allow customer to register register so we can contact them to book their visit.

#####Structure
I have laid out my website so that on the home section there is a beautiful image of an moroccan city which will cover most of the home section, this will convince the user to learn more about the website and below the image there will be a small paragraph that will inform the user of the purpose of the site.
Below this, we have the 'Where To Visit' section, there will be a carousel that will show images of the most popular cities in Morocco and will have a paragraph on each image to give the user more information the city.
The next section is the 'Travel Planning' section, where I have placed a search box at the top of this section so the user can search the city they are interested in and next to the search box will be buttons for the user to click on depending on what they would like their search to focus on such as hotels, restaurants and attractions and below this will be the map so when the user has chosen the city of their choice they can then browse through the different hotels, restaurants and attractions.
'Book Your Visit' is the last section on the website, there will be a form for the user to fill out and once submitted a modal will appear to confirm that. 

#####Skeleton
Below are links to the wireframes for this project and are designed to include different versions for a desktop, tablet and mobile phone view.

#####Surface
I have used a combination of a vibrant orange and white for the header and footer as this give the website a old school but stil refreshing look.
The background color for the sections is white, this is because I believed it was best to keep it simple so the user can focus on the features of each section.

###Features

####Existing Features 

#####Navbar 
The Navbar will show the user all the sections on the page and when clicked on each section it will take you to the one you require.

#####Bootstrap Carousel
The carousel will allow the user to view all the locations in Morocco that we are promoting, the image will have a caption of the city it is from and information on that city.
To navigate the carousel the user will click on the let or right arrows and it will change the images in the slideshow.

#####Search Box
The search box will allow the user to search any city in Morocco, but before typing anything in the box it will have a placeholder 'Casablanca/Marrakech/Agadir/Fes...' as these are the main cities we are promoting.

#####Buttons For Map
These buttons will allow the user to choose between hotels, restaurants or attractions as what they want brought up on the map.

#####Map
The map will allow the user to view the cities in Morocco and then search for locations such as hotels, restaurants and attractions.  
Place Autocomplete Hotel Search was used to help create this type of map.

#####Results Listing
When the user has selected a city in the search box, it will bring up a listing of the results so the user can see a list of locations depending on what button has been clicked.  
Place Autocomplete Hotel Search was used to help create the listings.

#####Booking Form 
The booking form will allow the user to register their interest in visiting morocco.

#####Booking Checkbox
The checkbox will allow the user to click on what they require for their visit, the options are accommodation, flights and excursions.

#####'We'll Be In Touch' Button
This button will allow the user to submit form.

#####Modal
The modal will be pop up when the form has been submitted with a message to confirm it.

#####Back To Top
This button will allow the user to return to the top of the page without scrolling up.

#####Burger Icon
The burger icon will appear on smaller screen sizes such as a mobile phone or tablet, when clicked it will display the navbar.

#####Footer Social Links 
The links in the footer will allow the user to visit the website's social media platforms.

####Features Left to Implement

#####Multimedia Video
In future projects, I would like to place a video in the website.

###Technologies Used

####These are the following languages, frameworks and libraries used in this project:

HMTL 
This was used to build the website and input content.

CSS
This was the second language used to style the website.

Javascript
This is the third language used to create the map and its functions in the 'Travel Planning' section and also used to link EmaiLJS.

JQuery
This libary was used for the map and functions.

Bootstrap
This framework was used to bring structure to my website and it was used to create my navbar, carousel, and modal. 

Font Awesome
This libary was used to include icons for my buttons in the 'Travel Planning' section and for my footer social links.

GoogleFonts
This project was used to inlude the font 'Kalam' in my project.

Google Maps Places API
This API is used for map and features.

Places Libary
This libary was used bring up locations such as hotels, restaurants and attractions on my map and listings.

EmaiLJS
This was used to link the form to a email address so when a form is submitted, it is sent to a email address linked to the site.

###Testing 

HTML Validation
This was used to text the HTML file and errors did occur like a missing div tag at the end of the section for 'Book You Visit', there were other errors in this section such as more missing div tags that caused me to add css to style the booking form to correct this.
The 'Back To Top' button was another error as an anchor tag couldn't go inside the button tag, so to fix this I have gotten rid of the button tag and this has corrected the error.
I have also gotten rid of all the 'Back To Top' buttons and left one at the bottom of the body after the footer so that it can work, this was as the ID couldnt be used more then once and this was the error that they couldnt be multiple anchors with the same ID.

CSS 
This website was used to check the css file and there was no errors.

#####1. Easy to use 
The website simple for the user as it is one page, the user have been told what to do by scrolling down to learn more and there are links in the navbar that will take the user to the section they require. 
If the user wishes to return to a different section then they can simply click on the 'Back To Top' button and it will take them to the home page where they can click on the section they require in the navbar.

#####2. I want to know more about what cities in Morocco have to offer.
This user story will be achieved by going to the 'Where to Visit' section as the carousel will have brief information of each city and what they famous for.  

#####3. I want to see a map showing what hotels I can stay at, restaurants I can eat at and places I can visit.
This user story will be achieved by going to the 'Travel Planning' section, first the user will need to fill in the search box of the city they would like to visit then when they have clicked on the city in the search box it will automatically zoom into the city they chose with markers on hotels by default, the user then can change the search for hotels by clicking on the buttons for restaurants or attractions and this will change the markers on the map.

#####4. Images of Cities of Morocco
If they user goes to the 'Where To Visit' section, they will be able to view the different cities of Morroco and they can just wait for the images to change in the carousel or use the arrows on the left or right side to change images.

#####5. Register Interest in Visiting Morocco
The user can acheive this by going to the 'Book Your Visit' section which will allow them to fill out the form, when they have submited the form the modal will appear to confirm this and a email will be sent to the website inbox with the information.

####Websites & Devices Testing
This website was tested on different devices such as a large desktop screen, laptop, Samsung S10+, Iphone 6/7/8, Ipad Pro and Ipad and on multiple web browsers such as Google Chrome, Internet Exployer and Firefox to make sure that it was responsive and compatible.
I also had my friends and family tests it on their phones and laptops and it was responsive. 
An issue that appeared in testing was that the 'Back to Top' button was interfering with other icons and buttons on mobile phone screens and was taking too much room on the screen so I have hidden it on mobile phone screens so it won't intefer with the sections.
Another issue was the captions in the carousel as on smaller screens like tablets and mobile phones this information was taking too much room and covering the images so the user would not be able to see them, to fix this I have had the information not appear on screen sizes tablets or small so the user will have a clear view of the image and only the name of the city in the captions.


###Deployment

When deploying this site the published version wouldn't allow the maps and functions to work, this was becuase http address was not added to the API key to allow it to render the map, after it was added to the API key the map worked.
Another issue was the carousel images were not appearing, this was becuase the img source had a slash at the begin which stopped github pages from deploying them, after this was removed the images now appear.

###Credits



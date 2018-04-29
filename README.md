Welcome to the FootballFeed wiki!

### Developer Name:
 - Michael Coleman
### GMIT Number: 
 - G00347650

### App Name:
 - FootballFeed

## About: 
Application is a football based app which is used to view the latest news in the football world, along with the ability to view league tables of the top 5 leagues in Europe (Premier League, La Liga, Bundesliga, Serie A and Ligue 1). Along with the ability to see fixtures and the results of those fixtures throughout the season. The user can also then store their information such as name, favorite team/player etc.. Along with the ability to take and store their profile picture.

## API Used
The api's used in this project are: 
 1. News API - https://newsapi.org/s/four-four-two-api
 2. Football Stats/Data (based on 2015/16 seasons) - https://www.football-data.org/

## Plugins
 1. Camera
 2. Vibration

## User Guide
 ### 1. Home/News Page
   - When application opened user is shown the latest news from the football world via api mentioned above, Articles can be viewed by clicking title or image bringing them to article location.

 ### 2. League Settings Page
   - Upon opening of league settings page user is given a radio button choice of 5 leagues to choose from. The view table option is disabled until the user selects their choice.

 ### 3. League Table Page
(named About as had error when renaming to league table js file, but only instance in js file was a comment)
   - League table is shown from api call based on selection in previous page, here the full league table is displayed for selected league. 
   - In the Top Right corner a FAB is located, pressing this will give user an option to click on fixtures for their league previously selected.Back Button also available to re-select league

 ### 4. Fixtures page
   - Fixture page displays the fixtures for selected league, including the results of the fixtures.Again page has a back button to go back to league table.

### 5.Account Page
   - User's details are entered and saved here using ionic storage. Once user has entered and saved their details, they will be loaded back into user's account information labels. When saved navigation to homepage will occur. 
   - Mobile users: Can take a photograph and it will be saved as their profile picture, this image will also be saved in their gallery on their phone.Photo is also show in orientation taken.
   - Mobile Users: Vibration is also available to mobile users as when they save their information a vibration will occur for one second.
   - Social medias are also available to user via FABs in top right, bring them to website indicated by icon.




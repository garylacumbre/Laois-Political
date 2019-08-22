# Laois Political

Laois Political is a website that aims to record the performance of local County Councillors
in order to create greater political accountability. It also acts as a platform for political
commentary by providing articles written by local community members.

## UX

Laois Political will be used by three designated users: general public, reporters and politicians. 

Public: Members of the voting public rarely know in detail what their local representatives are doing 
while in office. To find out this information, a member of the public would have to read through pages
of multuple documents posted on the County Coucnil's website. Laois Political brings all of this data 
together in one place and renders is readable and comparable through interactive charts and tables.

User Story: "As a local voter, I want to be able to easily see and compare the performance of my 
political representatives so I can make more informed decisions at the polling station."

Reporters/ Journalists: Local and National Journalists spend a lot of time and effort reporting on local
news. Their role is to help keep politicians honest by recording their activities and performance, and then
analysing their results. Laois Political provides objective, statistical information to help journalists better 
analyse and critical engage with political activities. 

User Story: "As a journalist, I need to be able fact check the statements made by politicians and assess
whether or not politicians are doing what they claim to be doing." 

Politicians: Local Politicians need a platform from which they can explain their decisions and justify their 
performance. Laois Political not only provides objective information to achieve greater accountability, but also 
provide a platform for politicians to express their opinions and explain their actions.

User Story: "As a politician, I have to choose carefully which campaigns I engage in. I cannot always engage with
every issues raised by voters and I need a platform from which I can explain why I engage with the issues that I do."

https://github.com/garylacumbre/Laois-Political/tree/master/Wireframes

## Features

Home Page - allows users to see a number graphs and charts showing political representation by party, motions proposed
by politicians, motions successful, attendance and expenses information. Graphs are interactive.  

Councillor Listings - This page will provide an image gallery of all County Councillors and will act as a portal to individual councillor pages. 

Councillor Pages  - This page allows user to view a bio of each councillor, provides contact information and displays
a series of graphs and tables demonstrating the councillor's performance in council chamber meetings.

Articles Page - This page provides a list of articles submitted to the website, displaying an image for each article, a title and author's name.

About Page Listings - This page describes the main objectives and mission of the website.

Contact Page - this page allows users to submit feedback on the site.

### Features To Be Implemented 

1. A subscription option will be added for future mailing list and newsletter, and a database of users will be maintained using JS, Python & SQL
2. A chat forum will be added to each article to allow readers to comment and communicate on ideas presented by submissions

## Technologies

HTML - used to provide the basic structure and content of the website and to link pages within the site. 
Also used to import styles from external sites like Font Awesome, Google Fonts and Bootstrap
https://www.w3schools.com/html/

CSS - used to style all elements except the collapsible navbar
https://www.w3schools.com/Css/

Bootstrap - used only for the collapsible navbar in the mobile version of the site. 
https://getbootstrap.com

DC3 & Crossfilter - used to generate interactive charts. 
https://dc-js.github.io/dc.js/

Email.js - used to connect the contact form to an email address
https://www.emailjs.com/

## Testing

#### Site Users

User wants to view general stats
1. Lands on Homepage. Stats are viewable by scrolling down the screen. 
2. User navigates back to Home by clicking site title from any page. 

User wants to know full names of initials on graphs
1. User lands on home page, scrolls to chart. They can click on key icon and page auto scrolls to
the key at the bottom of the page

User wants to find information on individual councillors 
1. From the Home page, users click on Councillors page to see a lit of councillors in a gallery. They navigate to any councillor 
by clicking on the councillor image
2. On the Home Page, users can click on the chart key to scroll to the full list of councillors in each chart. Each name is clickable and 
brings the user directly to the councillor's page

User wants to see latest articles - 
1. lands on Home page. Clicks on articles link in nav bar
and is brought to the main articles page. Articles available from any page via nav bar
2. Lands on any page and uses Articles option on navbar to navigate to page

User wants to give site feedback
1. From any page, the user clicks on the 'Contact' link in the nav menu and lands on the contact page. Feedback can be
submitted by filling out all form fields. An error message appears if usrs try to submit the form without filling in all fields

User wants to contact councillors
1. User navigates to home page, clicks on councillors link and then navigates to the desired councillor. Phone number, address and clickable email are listed under Bio


#### Responsiveness

The site was built with a mobile-first approach. It uses block elements in the mobile version along with 
a collapsible navbar to save real estate. The nav bar is fixed and always scrolls with the page.

In the tablet version of the site, a two column layout is used instead of the block elements. Flexbox is used
to achieve this layout. The navbar remains fixed and available on scroll. Images resize as the page widens to
allow good visibility of images and a positive user experience. 

The laptop/ desktop version of the site uses a 3 column layout for images, with exception of the artists gallery 
which stays at two columns to allow the images to be studied more clearly. Future iterations of the site will laod
images in a pop-out gallery using JS. Font size of all text elements increases in the laptop/ desktop layouts and images 
are also resized using media queries. 

The widescreen version of the site is layed out the same as the desktop version but uses a narrower viewport width
for the main content of each page and uses larger font sizes and images to make use of the larger screen.

## Deployment

The site was deployed using GitHub Pages. On the GitHub Repository, I selected 'Settings' and scrolled down to GitHub Pages. 
I chose the Master Branch source and did not customise the url as the website is a project only and not yet a live running site. 

The link to the site is:

https://garylacumbre.github.io/exhibit-laois/index.html

## Credits

#### Content

The names of County Councillors, along with the stats were collected and collated from Laois County Council's posted monthly minutes
to Council Chamber Meetings. These meetings are available at: https://laois.ie/about-the-council/minutes-agendas/

The article content is take from Laois Today located at: https://www.laoistoday.ie/2019/06/02/weekend-read-new-faces-departures-and-a-crazy-count-reflections-on-this-years-laois-local-elections/


#### Images

All images on the Councillors Page come from Adobe Stock artists DesignInColor and are
licensed for non-commercial use. Images have been resized for the site using Adobe Photoshop and converted into svg format 
https://stock.adobe.com/ie/images/people-window-different-faces-vector/199281009

The articles images come from adobe stock: 

Jozefmicic - https://stock.adobe.com/ie/images/protester-speaking-through-megaphone-or-bullhorn-and-holding-a-placard-banner-vector-icon-corporate-background-symbol-of-activism-demonstration/158507138
             https://stock.adobe.com/ie/images/protester-speaking-through-megaphone-or-bullhorn-and-holding-a-placard-banner-vector-icon-symbol-of-activism-demonstration/162353301
              
JuliaBatsheva - https://stock.adobe.com/ie/images/people-vote-at-election/135558841

MacroVector - https://stock.adobe.com/ie/Member/LicenseHistory?date_order=desc&current_tab=tab-purchases&history_page=1

All images have been licensed for non-commercial use under Adobe's standard license terms

#### Acknowledgements

Thanks to Code Institute's Mark Railton for mentoring me through the project. 




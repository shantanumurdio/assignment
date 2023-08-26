#      HTML
This is a sample HTML code for a website layout resembling an Uber-like application. The code consists of the HTML structure, CSS styling, and Bootstrap framework integration. Below is a breakdown of the different sections and features of the website.

Sections
Navigation Bar
The navigation bar is located at the top of the page and contains two sections: the left navigation section and the right navigation section. The left section includes the Uber logo and a dropdown menu for company-related options. The right section displays language options, the "Apps" icon, and links for "Products," "Log in," and "Sign up."

Main Section
The main section consists of two subsections:

The first subsection includes a content container with three options: "Ride," "Drive or deliver," and "Rent your fleet." Each option is represented by an icon. There is also a "Request a ride now" heading and input fields for pickup location and destination. Finally, there are buttons to "Request now" or "Schedule for later."

The second subsection contains a heading, a description, and a "Get Started" button.

Footer
The footer is divided into several sections:

Section 3: Displays information about different Uber vehicle options, including images and descriptions.

Section 4: Highlights Uber's commitment to safety and its availability in numerous cities worldwide.

Section 5: Provides information about Uber as a company, its newsroom, and its global citizenship initiatives.

Section 6: Showcases the Uber driver and rider apps and provides options to download them.

Footer (second part)
The second part of the footer includes various subsections:

Help: Provides a link to the Uber help center.

Company: Divided into different sections, including "About us," "Our offerings," "Newsroom," "Investors," "Blog," "Career," "AI," and "Gift cards."

Products: Displays different Uber services, such as "Ride," "Drive," "Deliver," "Eat," "Uber for Business," and "Uber Freight."

Global citizenship: Covers safety, diversity and inclusion, and sustainability initiatives.

Travel: Provides information about airports and cities served by Uber.

Social Media, Language, and Location
At the bottom right corner of the page, there are social media icons for Facebook, Twitter, YouTube, LinkedIn, and Instagram. Additionally, there is a globe icon to switch language, the current location (Pune), and links to the Google Play Store and App Store.

Last Div
The last div in the footer includes the copyright information and links to the privacy policy, accessibility, and terms.

Usage
To use this HTML code, follow these steps:

Save the HTML code in a file with a .html extension (e.g., index.html).
Create a CSS file named style.css and save it in the same directory as the HTML file.
Optionally, include any additional CSS or JavaScript files if needed.
Customize the content, styles, and images to match your desired website design.
Open the HTML file in a web browser to view the website.
Note: The code relies on external resources, such as Bootstrap and font-awesome CSS files. Make sure you have a stable internet connection to load these resources properly.

Feel free to modify and adapt this code as per your requirements.





#      CSS


This CSS code is intended to style the HTML structure provided in the previous code sample. It defines the appearance and layout of different elements on the web page. Below is a breakdown of the CSS styles and their corresponding sections in the HTML code.

Global Styles
The global styles apply to all elements and include the following properties:

margin: 0; and padding: 0;: Sets the margin and padding of all elements to zero.
box-sizing: border-box;: Ensures that padding and borders are included in the element's total width and height.
font-family: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;: Specifies the font family to be used.
Body
The styles for the body element include:

height: 100vh; and width: 100%;: Sets the height and width of the body element to cover the full viewport.
background-attachment: fixed;: Fixes the background image to prevent it from scrolling with the content.
Navigation Bar
The styles for the navigation bar (nav) include:

height: 10%;: Sets the height of the navigation bar.
background-color: black;: Sets the background color of the navigation bar.
display: flex;: Makes the navigation bar a flex container.
justify-content: space-between;: Positions the left and right sections of the navigation bar at opposite ends.
align-items: center;: Aligns the items vertically in the center of the navigation bar.
Left Navigation Section
The styles for the left navigation section (leftNavbar) include:

display: flex;: Makes the left navigation section a flex container.
justify-content: center; and align-items: center;: Centers the items horizontally and vertically.
The styles for the links (leftNavbar ul li a) include:

text-decoration: none;: Removes the underline from the links.
color: white;: Sets the text color to white.
font-size: 1.2rem;: Sets the font size of the links.
Right Navigation Section
The styles for the right navigation section (rightNavbar) include:

No specific styles are defined for the right navigation section.
The styles for the links (rightNavbar ul li a) include:

Same as the styles for the links in the left navigation section.
Main Section
The styles for the main section (mainSection) include:

height: 80%; and width: 100%;: Sets the height and width of the main section.
The styles for the content container (contentContainer) include:

height: 70%; and width: 40%;: Sets the height and width of the content container.
position: absolute;: Positions the content container relative to its closest positioned ancestor.
z-index: 1;: Sets the stack order of the content container.
top: 20%; and left: 13%;: Positions the content container from the top and left edges of its containing element.
color: black; and background-color: white;: Sets the text color and background color of the content container.
The styles for the list items (contentContainer ul li) include:

list-style: none;: Removes the bullet points from the list items.
margin-bottom: -1.4rem;: Removes the default spacing between list items.
Images and Texts
There are various styles for images, headings, paragraphs, and links throughout the code, depending on their respective sections. These styles define margins, paddings, colors, and font sizes to achieve the desired visual appearance.

Footer
The styles for the footer (footer) include:

height: 100%;, width: 100vw;, and background-color: black;: Sets the height, width, and background color of the footer.
The styles for different subsections within the footer include:

help, company, socialLogo, leftlogo, rightlogo, playLogo, lastDiv, etc.
Each subsection has its own positioning, margins, paddings, and colors, as specified in the CSS code.
Usage
To use this CSS code, follow these steps:

Create a new CSS file (e.g., style.css) and copy the provided CSS code into it.
Save the CSS file in the same directory as the HTML file.
Link the CSS file to the HTML file by adding the following line in the <head> section of the HTML file:
html
Copy code
<link rel="stylesheet" href="style.css">
Customize the CSS code as needed to achieve the desired visual appearance of your website.
Note: The CSS code assumes that you have the required font files (UberMove and UberMoveText) and image files (img/) in the correct directory structure. Make sure to adjust the file paths accordingly or provide the necessary files.

Feel free to modify and adapt this CSS code to suit your specific needs and styling preferences.

Disclaimer
This CSS code is provided as a sample and does not represent a complete and fully functional stylesheet for an Uber-like application. It serves as a starting point for styling the provided HTML code and can be further expanded and customized based on your requirements.
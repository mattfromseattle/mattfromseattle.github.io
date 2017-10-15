"use strict";angular.module("mattfromseattleApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"mainController"}).when("/about",{templateUrl:"views/about.html",controller:"aboutController"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"portfolioController"}).when("/github",{templateUrl:"views/github.html",controller:"githubController"}).when("/contact",{templateUrl:"views/contact.html",controller:"contactController"})}]),angular.module("mattfromseattleApp").controller("mainController",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("mattfromseattleApp").controller("aboutController",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("mattfromseattleApp").run(["$templateCache",function(a){a.put("views/about.html",'<!-- about.html --> <div class="jumbotron text-center"> <h1>My Experience</h1> </div> <hr class="featurette-divider"> <div class="about"> <b>Matt Dewey</b> <br> 20113 32nd Ave NE <br> Lake Forest Park, WA 98155 <br> <a href="downloads/MatthewDDeweyResume.pdf" download="MatthewDDeweyResume.pdf">Download My Resume</a> <br> <hr> <div class="work_experience"> <h4>Work Experience</h4> <h5>Deloitte Digital QA Engineer Seattle, WA April 2016-Present</h5> <ul> <li>Leads testing and quality assurance of mobile applications for iOS and Android platforms as well as web applications.</li> <li>Coordinates testing efforts between internal team, test automation team, and client QA team. </li> <li>Reviews project requirements, identifies potential risks. </li> <li>Forecasts QA team velocity and coordinated with project management team to identify schedule risks and solutions. </li> <li>Utilize tools such as Postman and Charles Proxy to test and validate API data, network calls, and server connectivity.</li> </ul> <h5>Moby, Inc. Program Manager Seattle, WA August 2015-April 2016</h5> <ul> <li>Coordinated with Chief Strategy Office and Co-Founders to set up and coordinate new projects for external clients and internal project efforts. </li> <li> Reported on current project status and health. </li><li>Forecasted project budget and resource needs. </li> <li>Client management and communication, including negotiating scope changes, new opportunities, and associated costs. </li> <li> Responsible for quality assurance of overall project and scope control. </li> <li> Tasked with project documentation, including project proposals, estimates, statements of work, business requirement documents, status reports, and other supporting documentation. </li> <li> Identified and assessed new client opportunities.</li> </ul> <strong>Notable Clients:</strong> Fisher-Price, Fluke, Mastin Labs <h5>Black Pixel Account Manager Seattle, WA May 2014-July 2015</h5> <ul> <li> Oversaw relationships with ESPN, Twitter, Funny or Die, Inspirato, and Foundation Capital. </li> <li>Responsible for all client communications, strategic account direction, and compliance with client deliverables and revenue. </li> <li>Reviewed all major deliverables to ensure quality standards and client expectations were met or exceeded. </li> <li> Worked closely with cross-functional (technical, creative, user experience, and quality assurance) teams in order to maintain continuous knowledge of project status in order to identify potential issues and/or opportunities within or related to the project.</li> </ul> <h5>Black Pixel Project Manager Seattle, WA May 2013-May 2014</h5> <ul> <li>Directed efforts on the ESPN SportsCenter iOS and Android apps, with over 40 million downloads. </li> <li>Lead project development efforts on the Starbucks iOS app to integrate new technology that allows users to leave tips, rapidly access payment information, and refine the user experience throughout the application. </li> <li>Helped to build out the Project Management Organization by driving documentation, standardization, and hiring additional members of the team. </li> <li>Incorporated the Agile process into projects managed and helped evangelize the benefits across the company.</li> </ul> <strong>Notable Clients:</strong> ESPN, Twitter, Starbucks, Funny or Die, Inspirato, Foundation Capital <h5>Deloitte Digital Project Manager Seattle, WA October 2011 - October 2013</h5> <ul> <li>Utilized the Agile project management methodology to lead projects in the entertainment, news, and retail sectors of the iOS and Android platforms.</li> <li>Guided and trained clients to adopt the Agile methodologies on projects.</li> <li> Lead project efforts for the CNN iPad app that went on to be named one of Apple’s “Top 25 All-Time Free Apps for iPad.” </li> <li> Lead project efforts for the CNN iPad app that went on to be named one of Apple’s “Top 25 All-Time Free Apps for iPad.” </li> <li> Managed project efforts for the Target iPad app redesign and update that went on to win the People’s Voice Webby Award. </li> <li>Lead project efforts to design and implement updates to the truTV iOS apps in collaboration with truTV project teams. </li> <li>Operated with Strategist and Business Development teams to develop proposals and prototypes for new and existing clients. </li> </ul> <strong>Notable Clients:</strong> CNN, Target, truTV, REI <h5>Übermind QA Engineer Seattle, WA September 2010-October 2011</h5> <ul> <li>Lead testing efforts on the CNN iPad application, coordinating two teams of QA Engineers. Coordinated communications between QA team, development team, and clients for multiple application efforts. </li> <li>Lead test efforts on the CNN iReport Android app, coordinating team testing efforts, overseeing test case writing and execution, and communicating testing efforts to project stakeholders. </li> <li>Managed 5 QA Engineers, mentoring and guiding the development of their roles within the organization. </li> <li>Developed and managed quality assurance metrics for performance improvements of all teams. </li> <li>Standardized client facing project status reports and metrics. </li> <li>Collaborated with Business Development team to brainstorm and develop proposals for new business opportunities.</li> </ul> <strong>Notable Clients:</strong> CNN, Fox, Madison Square Garden <hr> </div> <div class="education"> <h4>Education</h4> <h5>Seattle University Bachelor of Arts Seattle, WA 2015-Present </h5> Majoring in Digital Cultures <br> <h5>Seattle University Web Development Certificate Seattle, WA 2016-2017</h5> Twelve month program with focus on HTML, CSS, and JavaScript <h5>Bellevue College Associate of Arts Bellevue, WA 2008-2010</h5> General studies with an emphasis on Computer Sciences <h5>Solutions IQ Certified ScrumMaster Seattle, WA </h5> </div> <hr> <div class="skills"> <h4>Technical Skills</h4> <table> <tr> <th>Language</th> <th></th> <th>Skill Level</th> </tr> <tr> <td>HTML</td> <td></td> <td>★★★★☆</td> </tr> <tr> <td>CSS</td> <td></td> <td>★★★★☆</td> </tr> <tr> <td>JavaScript</td> <td></td> <td>★★☆☆☆</td> </tr> <tr> <td>jQuery</td> <td></td> <td>★★☆☆☆</td> </tr> <tr> <td>Ruby</td> <td></td> <td>★★☆☆☆</td> </tr> <tr> <td>Python</td> <td></td> <td>★★☆☆☆</td> </tr> <tr> <td>Swift</td> <td></td> <td>★☆☆☆☆</td> </tr> <tr> <td>Obj-C </td> <td></td> <td>★☆☆☆☆</td> </tr> </table> </div> </div>'),a.put("views/contact.html",'<!-- contact.html --> <div class="jumbotron text-center"> <h1>Get in Touch</h1> </div> <hr class="featurette-divider"> <section id="contact" class="content-section text-center"> <div class="contact-section"> <div class="container"> <h2>Contact Me</h2> <p>Reach out to me if you\'d like to discuss working with me.</p> <div class="row"> <div class="col-md-8 col-md-offset-2"> <form class="form-horizontal"> <div class="form-group"> <label for="exampleInputName2">Name</label> <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe"> </div> <div class="form-group"> <label for="exampleInputEmail2">Email</label> <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"> </div> <div class="form-group"> <label for="exampleInputText">Your Message</label> <textarea class="form-control" placeholder="Description"></textarea> </div> <button type="submit" class="btn btn-default">Send Message</button> </form> <hr> <h3>Social Sites</h3> <ul class="list-inline banner-social-buttons"> <li><a href="#" class="btn btn-default btn-lg"><i class="fa fa-twitter"> <span class="network-name">Twitter</span></i></a></li> <li><a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin"> <span class="network-name">LinkedIn</span></i></a></li> </ul> </div> </div> </div> </div></section> '),a.put("views/github.html",'<!-- github.html --> <div class="jumbotron text-center"> <h1>My Code</h1> </div> <hr class="featurette-divider"> <div class="row"> <div class="col-lg-4"> <h2>Capstone</h2> <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p> <p> <a class="btn btn-primary" href="#" role="button">Github</a> </p> </div> <div class="col-lg-4"> <h2>WATS4000 Final Project</h2> <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p> <p> <a class="btn btn-primary" href="https://github.com/mattfromseattle/wats4000Final" role="button">Github</a> </p> </div> <div class="col-lg-4"> <h2>WATS3020 Final Project</h2> <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p> <p> <a class="btn btn-primary" href="https://github.com/mattfromseattle/wats3020FinalProject" role="button">Github</a> </p> </div> <div class="col-lg-4"> <h2>Flickr Search</h2> <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p> <p> <a class="btn btn-primary" href="https://github.com/mattfromseattle/wats1020-flickr-search" role="button">Github</a> </p> </div> <div class="col-lg-4"> <h2>Mt. Rainier</h2> <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p> <p> <a class="btn btn-primary" href="https://github.com/mattfromseattle/wats1020-add-a-map" role="button">Github</a> </p> </div> <div class="col-lg-4"> <h2>Stumbling Buddhist</h2> <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p> <p> <a class="btn btn-primary" href="https://github.com/mattfromseattle/stumblingbuddhist" role="button">Github</a> </p> </div> </div>'),a.put("views/main.html",'<!-- main.html --> <div class="jumbotron text-center"> <img class="img-fluid" src="images/me.3272a4b0.png" alt="mattfromseattle avatar" id="me"> </div> <hr class="featurette-divider"> <div class="container"> <h1>About Me</h1> <div class="aboutMeContainer"> I am a full stack web developer who has spent over fifteen years working in software development and is looking for new opportunities in web development. I draw from my experience in <strong>quality assurance</strong>, <strong>project management</strong>, and <strong>web development</strong> to ensure that the highest quality product is delivered. I am searching for new career opportunities in web development in which I can leverage my skills and knowledge with such technologies as <i>HTML</i>, <i>CSS</i>, <i>JavaScript</i> (including <i>Angular</i> and <i>VueJS</i> frameworks), <i>Python</i>, and <i>Rails</i>.<br> <br> Due to my background of multiple roles in the software development life cycle, I am able to approach projects with a well rounded view and identify potential risks as well as solutions. Similarly, my experience with different groups of projects gives me a solid foundation on which I can tailor information to the appropriate audience, providing a more detailed explanation or more simplified depending on the situation. Because of this, I feel that I would be a solid asset to any company looking to hire me as a web developer. </div> </div>'),a.put("views/portfolio.html",'<!-- portfolio.html --> <div class="jumbotron text-center"> <h1>My Portfolio</h1> </div> <!-- START THE FEATURETTES --> <hr class="featurette-divider"> <div class="row featurette"> <div class="col-md-7"> <h2 class="featurette-heading">Capstone Project</h2> <p class="lead">This is the Capstone Project for the Web Developer program at Seattle University. This project combines all the aspects from the program to create a website that...(To be determined). </p> <a class="btn btn-primary" href="#" role="button">Live Site</a> <a class="btn btn-secondary" href="#" role="button">Github</a> </div> <div class="col-md-5"> <img class="featurette-image img-fluid mx-auto" src="images/yeoman.8cb970fb.png" alt="Capstone Project"> </div> </div> <hr class="featurette-divider"> <div class="row featurette"> <div class="col-md-7 order-md-2"> <h2 class="featurette-heading">WATS4000 Final Project - Breaking News</h2> <p class="lead">A news aggregator site that allows users to view articles from a specified news source and favorite articles for later viewing. </p> <a class="btn btn-primary" href="http://mattfromseattle.com/wats4000Final/" role="button" target="_blank">Live Site</a> <a class="btn btn-secondary" href="https://github.com/mattfromseattle/wats4000Final" role="button" target="_blank">Github</a> </div> <div class="col-md-5 order-md-1"> <img class="featurette-image img-fluid mx-auto" src="images/wats4010Final.775f39f6.png" alt="Breaking News Project"> </div> </div> <hr class="featurette-divider"> <div class="row featurette"> <div class="col-md-7"> <h2 class="featurette-heading">WATS3020 Final Project - Bodhi Tree Soaps</h2> <p class="lead">A mock store website to view and purchase handmade soaps.</p> <a class="btn btn-primary" href="http://mattfromseattle.com/wats3020FinalProject/" role="button" target="_blank">Live Site</a> <a class="btn btn-secondary" href="https://github.com/mattfromseattle/wats3020FinalProject" role="button" target="_blank">Github</a> </div> <div class="col-md-5"> <img class="featurette-image img-fluid mx-auto" src="images/wats3020final.png" alt="Bodhi Tree Soaps Project"> </div> </div> <hr class="featurette-divider"> <div class="row featurette"> <div class="col-md-7 order-md-2"> <h2 class="featurette-heading">Flickr Search</h2> <p class="lead">A simple webpage that allows users to search for topics and see results from Flickr.</p> <a class="btn btn-primary" href="http://mattfromseattle.com/wats1020-flickr-search/" role="button" target="_blank">Live Site</a> <a class="btn btn-secondary" href="https://github.com/mattfromseattle/wats1020-flickr-search" role="button" target="_blank">Github</a> </div> <div class="col-md-5"> <img class="featurette-image img-fluid mx-auto" src="images/flickrSearch.fbcb2884.png" alt="Flickr Search Project"> </div> </div> <hr class="featurette-divider"> <div class="row featurette"> <div class="col-md-7"> <h2 class="featurette-heading">Mt. Rainier</h2> <p class="lead">Provides general information about Mount Rainier and an interactive map for users to view areas around the mountain.</p> <a class="btn btn-primary" href="http://mattfromseattle.com/wats1020-add-a-map/" role="button" target="_blank">Live Site</a> <a class="btn btn-secondary" href="https://github.com/mattfromseattle/wats1020-add-a-map" role="button" target="_blank">Github</a> </div> <div class="col-md-5"> <img class="featurette-image img-fluid mx-auto" src="images/mtRainier.ea6224f5.png" alt="Mount Rainier Project"> </div> </div> <hr class="featurette-divider"> <div class="row featurette"> <div class="col-md-7 order-md-2"> <h2 class="featurette-heading">Stumbling Buddhist</h2> <p class="lead">A personal website used for blogging.</p> <a class="btn btn-primary" href="http://stumblingbuddhist.com/" role="button" target="_blank">Live Site</a> <a class="btn btn-secondary" href="https://github.com/mattfromseattle/stumblingbuddhist" role="button" target="_blank">Github</a> </div> <div class="col-md-5"> <img class="featurette-image img-fluid mx-auto" src="images/stumblingBuddhist.009ab00a.png" alt="Stumbling Buddhist Project"> </div> </div>')}]);
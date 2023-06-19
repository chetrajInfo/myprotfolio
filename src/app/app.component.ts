import { Component, ElementRef, Renderer2 } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myprotfolio';

  facebookIcon = faFacebook;
  faTwitter = faTwitter;
  instagramIcon = faInstagram;
  linkedinIcon = faLinkedin;
  faVolumeUp = faVolumeUp;


  isSpeaking = false; // Flag to keep track of whether speech synthesis is active
  speech: SpeechSynthesisUtterance | undefined; // Store the speech synthesis utterance
  
  toggleSpeech() {
    const text = "Hello everyone! I am elated to see you here, taking the time to get to know me a little better. I have had the privilege of being a part of the IT (Information Technology) industry for over half a decade. My journey into coding and undertaking software projects began in 2010. Back then, challenges were aplenty, notably the scarcity of resources and the necessity for adept time management. Nevertheless, my zeal for learning enabled me to delve into the ever-evolving world of programming. I embraced JAVA, an Object-Oriented Language, and honed my skills in designing frameworks and APIs. This, in turn, facilitated the development of applications adhering to the principles of RAD (Rapid Application Development). Throughout this adventure, I've had the opportunity to immerse myself in diverse design patterns and the intricacies of the software development life cycle. SDLC and its methodologies have always intrigued me - from the planning stage to creation, testing, deployment, and monitoring. Moreover, I have an insatiable appetite for experimenting with innovative tools and designs that optimize the speed, security, and collaborative aspects of application development. As for my educational background, I embarked on my academic journey in 2008 by enrolling in a Bachelor of Science in Information Technology (BScIT) program at the prestigious University in North-East India(Sikkim Manipal University)(SMU) and graduated in 2011. I furthered my education in the United States, where in 2017, I pursued a degree in Computer Science at the University of Houston Clear Lake(UHCL) and graduated in year 2022. Prior to that, I attained an associate degree from San jacinto Community College(SANJAC) in year 2016. I spent a significant portion of my life in India, where my studies and work experience immensely aided in acquiring proficiency in Hindi, in addition to my native language, Nepali. English has been a part of my life since childhood, functioning as a second language. While in the United States, I embraced the opportunity to learn Spanish through friends and college courses. Though I’m not yet fluent, I am confident in my ability to get by in Spanish-speaking countries. Some courses in BScIT degree: Basic of IT Data Structure Using C DBMS and SQL Server Operating System (OS) Linux OS JAVA Programming OOPS Using C++ Data Warehouse and Mining Testing and Quality Assurance Some courses in CS degree: Computer Science I (Python) Computer Science II (Java) Data Structure and Algorithm Operating System (Using C) System Administration Advanced Data Structure OOPS concept using C# RDBMS concept Using Oracle Advanced JAVA (API and Frameworks) Some Certificate Training in Institue: Diploma In Software Engineering Web Developement (PHP, MySQL, CSS) Basic In Cybersecurity Core Concept of Vanilla JavaScript While I was pursuing my Bachelor Degree in IT, I had finished some certification level Course in Software Engineering in Microsoft Dot Net using C# from one the top five rank institute called NIITback on 2012 and same year I was awarded another certificate in Advanced SwiftExcel. Just after couple of year in 2014 I molded toward the web developing culture and recieved my Basic and Mid-level certification in Web Development using Java Enterprises Edition(with different API and Framewroks), PHP and MySQL as backend technology and HTML,CSS, Bootstrap,Javascript, Jquery(framework) and many more as front-end to develop the static as well as dynamic page from Broadway Infosys. I have been learning and focusing some more commercial topic like UI/UX design as well.";
    
    // Check if speech synthesis is supported by the browser
    if ('speechSynthesis' in window) {
      if (this.isSpeaking) {
        // If it is currently speaking, cancel the speech
        window.speechSynthesis.cancel();
        this.isSpeaking = false;
      } else {
        // If it is not speaking, start the speech
        this.speech = new SpeechSynthesisUtterance(text);
        this.speech.lang = 'en-US'; // Set the language
        window.speechSynthesis.speak(this.speech);
        this.isSpeaking = true;
      }
    } else {
      alert("Sorry, your browser doesn't support text to speech.");
    }
  }




  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  changeTextStyle() {
    const textElement = this.elementRef.nativeElement.querySelector('#moveMe');
    this.renderer.setStyle(textElement, 'font-size', '23px');
    this.renderer.setStyle(textElement, 'font-style', 'italic');
    this.renderer.setStyle(textElement, 'color', 'navy');
    this.renderer.setStyle(textElement, 'cursor', 'pointer');
    this.renderer.setStyle(textElement, 'margin-bottom', '5px');
  }

}

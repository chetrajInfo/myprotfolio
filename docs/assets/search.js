var count =0;
function textToSpeech(){

 var msg = "Hello everyone it is pleasure to see you visiting my page and knowing me more closely. I have been working in IT(Information Technology) industry for more than half decade and start my coding and programming my software project from year 2010. It was quite challenging at that time because of lack of access to resources and time management. However I tried every aspect to learn new changes in Programming world especially and adapted myself to JAVA(Oject Oriented Language) and designed frameworks and API to build the application which follow RAD(Rapid Application and Developement) startegies. During my Journey I come across many design pattern concept as well as software development life cycle methodology with clearly defined processes for creating high-quality software. I am always excited to implements the methodology involves in SDLC, like Planning, Creating, Testing, Deploying, Monitoring. Beside that my interest always step up to work with new introduce tools and design which build the application more faster, secure and sharable in between the dev and other depart. My academic journey started in Information Technology subject from 2008 when I steped to University to complete my undergrad in Bachelor of Science in Information Technology(BScIT) from one of the renowed University in North-East India(Sikkim Manipal University)SMU and graduated in 2011. After completing the BScIT, in year 2017 I attended my Computer Science Degree in United States and successfully completed my major from University of Houston Clear Lake (UHCL) in year 2022, which is located in Houston Texas. Before taking courses in University I finished my associated degree from the San jacinto Community College (SanJac) in year 2016. Since I have spend most of my year in India for my study and work it extremely hepled me to speak, talk and write new language Hindi proficiently beside my own mother tongue Nepali and English as second language from my Childhood. In United States there I got another chance to learn new language Spanish from my friend and some courses from the college study. While not been proficiency in Spanish but still I believe can survive when alone in Spanish talking countries. Some courses that I learned while completing myBScIT degree were Basic of IT Data Structure Using C DBMS and SQL Server Operating System(OS) Linux OS JAVA Programming OOPS Using C++ Data Warehouse and Mining Testing and Quality Assuranc Some courses that I learned while CS degree were Computer Science I(Python) Computer Science II(Java) Data Structure and Algorithm Operating System(Using C) System Administration Advanced Data Structure OOPS concept using C sharp RDBMS concept Using Oracle Advanced JAVA (API and Frameworks) While I was pursuing my Bachelor Degree in IT, I had finished some certification level Course in Software Engineering in Microsoft Dot Net using C sharp from one the top five rank institute called NIITback on 2012 and same year I was awarded another certificate in Advanced SwiftExcel. Just after couple of year in 2014 I molded toward the web developing culture and recieved my Basic and Mid-level certification in Web Development using Java Enterprises Edition(with different API and Framewroks), PHP and MySQL as backend technology and HTML,CSS, Bootstrap,Javascript, Jquery(framework) and many more as front-end to develop the static as well as dynmaic page from  Broadway Infosys. I have been learning and focusing some more commercial topic like UI UX design as well";
 
const utterance = new SpeechSynthesisUtterance(msg);
        utterance.pitch = 1;
        utterance.volume = 2;
        utterance.rate = 1;

  if(count==0){
   count = count+1;
   speechSynthesis.speak(utterance);
    
}else if(count==1){
    speechSynthesis.cancel(utterance);
    count = 0;
  }
  
} 

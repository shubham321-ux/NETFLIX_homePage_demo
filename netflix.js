	const init=()=>{

		}
		window.addEventListener('load',function(){
			init();

		})
		/*var box1=document.querySelector('#box1');
		box1.addEventListener('click',function(){
			
		})*/
		var play=document.querySelector('#b1');
		play.addEventListener('click',function(){
			window.open("https://www.netflix.com/signup",target="_self");
		})
		var video=document.querySelector('#vi');
        var box1=document.querySelector('#box1');
        var h1=document.querySelector('#h1');
        var h2=document.querySelector('#h2');
        var p=document.querySelector('#para');
        var x = window.matchMedia("(max-width: 600px)");
        var body=document.querySelector('body');
		var videoarray=["https://videocdn.videowale.com/siteuploads/videofiles/videofiles166/82715/Iron-Man-In-Space-Scene-Avengers-Full-Screen.mp4?time=1646305809",
		"https://www.videosforstatus.com/library/4/4K-Full-Screen-Captain-America-Attitude-Status-Video/Captain-America-Attitue-Full-Screen.mp4",
		"https://videocdn.videowale.com/siteuploads/videofiles/videofiles166/82742/IRON-MAN-Suit-Transformation-Scene-Avengers-Full-Screen.mp4?time=1646307439",
		"https://videocdn.videowale.com/siteuploads/videofiles/videofiles166/82691/Best-Ever-Ironman-Avengers-Full-Screen.mp4?time=1646305592",
		"https://mirchistatus.com/files/download/id/85369",
		"https://videocdn.videowale.com/siteuploads/videofiles/videofiles166/82702/Captain-Marvel-BGM-Avengers-Full-Screen.mp4?time=1646305672",
		"https://mirchistatus.com/files/download/id/104617",
		"https://mirchistatus.com/files/download/id/104604"];
       box1.addEventListener('click',function(){
          video.setAttribute('src',videoarray[0]);
          h1.innerHTML="AVENGERS";
          h1.style.fontSize="7vw";
          h2.innerHTML="INFINITY WAR";
          p.innerHTML="The film was announced in October 2014 as Avengers: Infinity War – Part 1. The Russo brothers came on board to direct in April 2015, and a month later Markus and McFeely signed on to write the script for the film, which draws inspiration from Jim Starlin's 1991 comic book The Infinity Gauntlet and Jonathan Hickman's 2013 comic book Infinity.";
           window.scrollBy(0,-500);
       })
        box2.addEventListener('click',function(){
          video.setAttribute('src',videoarray[1]);
          h1.innerHTML="CAPTAIN AMERICA";
          h1.style.fontSize="4vw";
          h2.innerHTML="THE WINTER SOLDIAR";
          h2.style.fontSize="2vw";
          p.innerHTML="Captain America: The Winter Soldier is a 2014 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Captain America: The First Avenger";
           window.scrollBy(0,-500);
       })
        box3.addEventListener('click',function(){
          video.setAttribute('src',videoarray[2]);
          h1.innerHTML="IRON MAN";
          h1.style.fontSize="5vw";
          h2.innerHTML="2";
          h2.style.fontSize="4vw";
          p.innerHTML="Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the sequel to Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU)";
          window.scrollBy(0,-500);
       })
         box4.addEventListener('click',function(){
          video.setAttribute('src',videoarray[3]);
          h1.innerHTML="IRON MAN";
           h1.style.fontSize="5vw";
          h2.innerHTML="3";
          h2.style.fontSize="4.5vw";
          p.innerHTML="Iron Man 3 is a 2015 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the sequel to Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau and written by Justin Theroux, the film stars Robert Downey Jr";
         window.scrollBy(0,-500);
       })
          box5.addEventListener('click',function(){
          video.setAttribute('src',videoarray[4]);
          h1.innerHTML="ANT MAN";
           h1.style.fontSize="6vw";
          h2.innerHTML="";
          p.innerHTML="Ant-Man is the name of several superheroes appearing in books published by Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, Ant-Man's first appearance was in Tales to Astonish #27 (January 1962); however, his first appeared in costume in Tales to Astonish #35 (September 1962).  ";
          window.scrollBy(0,-500);
       })
           box6.addEventListener('click',function(){
          video.setAttribute('src',videoarray[5]);
          h1.innerHTML="CAPTAIN MARVEL";
          h1.style.fontSize="4vw";
          h2.innerHTML="";
          p.innerHTML="Captain Marvel is a 2019 American superhero film based on the Marvel Comics character Carol Danvers. Produced by Marvel Studios and distributed by Walt";
         window.scrollBy(0,-500); 
          
       })
            box7.addEventListener('click',function(){
          video.setAttribute('src',videoarray[6]);
          h1.innerHTML="HULK";
          h1.style.fontSize="6vw";
          h2.innerHTML="";
          p.innerHTML="The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character, who has dissociative identity disorder (DID)";
           window.scrollBy(0,-500);
       })
             box8.addEventListener('click',function(){
          video.setAttribute('src',videoarray[7]);
          h1.innerHTML="AVENGERS";
          h1.style.fontSize="5vw";
          h2.innerHTML="AGE OF ULTRON";
          p.innerHTML="Avengers: Age of Ultron is a 2015 American superhero film in which Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program, but things go awry and it's up to the Avengers to stop the villainous Ultron from enacting his terrible plans. It is the sequel to 2012's The Avengers and the eleventh installment in the Marvel Cinematic Universe";
          window.scrollBy(0,-500);
       })
    gsap.from("#box1,#box2,#box3,#box4,#box5,#box6,#box7,#box8",{
        scale:0,
        duration:2,
    });
    
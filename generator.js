function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.onload = function() {
  dropdown1.value = "art";
  dropdown2.value = "choose";
  showSlides();
}
function updateSelector() {
  var dropdown1 = document.getElementById("dropdown1");
  var dropdown2 = document.getElementById("dropdown2");
  var child = dropdown2.lastElementChild;
  while (child != null) {
    dropdown2.removeChild(child);
    child = dropdown2.lastElementChild;
  }
  var genreList;
  if (dropdown1.value == "art"){
    genreList = ["Choose from dropdown", "Still Lifes", "Portraits", "Figures"];
  } else if ( dropdown1.value == "films"){
    genreList = ["Choose from dropdown", "Comedy", "Romance", "Action/ Adventure", "Thriller/ Horror"];
  } else {
    genreList = ["Choose from dropdown","Rap", "Pop", "Country"];
  }
  for(i = 0; i < genreList.length; i++){
    var option = document.createElement("option");
    option.innerHTML = genreList[i];
    option.value = genreList[i];
    dropdown2.appendChild(option);
  }
}

function generateInfo(){
  var info;
  var dropdown2= document.getElementById("dropdown2");
  if (dropdown1.value == "art"){

    if (dropdown2.value == "Still Lifes"){
      info = ["The painting done by Jose Antonio Hinojos was done in oil paint on canvas.", "The still life done in the 19th century was done in blint wood and plaster.", "The painting done by Henri Matisse with oil paints on canvas. "];
    } else if (dropdown2.value == "Portraits"){
      info = ["Freya Payne did the portrait (21st century) in Etching.", "Freya Payne did the portrait in 2005", "The 15th century portrait was done with oil on panel.","Anglo-Netherlandish workshop portrait was of King Henry VIII","Pablo Picasso's portrait (20th century) was a self portrait."];
    } else{
      info = ["John Dubrow uses an ipad insted of sketchbook when he sketches his subjects for paintings.", "The Dutch School were painters in the Netherlands from the early Renaissance to the Baroque.", "Picasso produced about 147,800 pieces."];
    }
  } else if (dropdown1.value == "Films"){
      if (dropdown2.value == "Comedy"){
        info = ["Rachel McAdams and Amanda Seyfried were neck and neck for the role of Regina George.","The movie Mean Girls became a broadway musical recently.", "Most of the iconic scenes of Dumb and Dumber were improvised.", "Emma Stone was nominated for golden globe for the movie Easy A.","The original name for the movie, Mean Girls, was actually Homeschooled.","The Breakfast Club is rated R because it depicts marijuana smoking without showing any resulting negative consequences of drug use.","There is a sequel to Dumb and Dumber: Dumb and Dumber To.","Easy A was filmed at Nordhoff High School.","Most of the iconic scenes of Dumb and Dumber were improvised."];
      } else if (dropdown2.value == "Romance"){
        info = ["The entire Clueless film was shot in just 40 days!", "Twilight is the first movie of The Twilight Saga.", "The Fault In Our Stars title comes from a reference to Shakespeare's play Julius Caesar.", "The Fault In Our Stars movie is based on the Fault In OUr Stars novel by John Green."];
      } else if (dropdown2.value == "Action/ Adventure"){
        info = ["Angelina Jolie and Brad Pitt were each paid $20 million for the movie Mr & Mrs Smith", "Avengers:Endgame is the very first film to make over $1 billion within its opening weekend!","Avengers:Endgame marks the ending of the 22-film cycle of the Marvel Cinematic Universe to date.","Mr & Mrs Smith won the award for MTV Movie Award for Best Fight."];
      } else {
        info = ["Woman on the run is based on the short story 'Man on the Run'; by Sylvia Tate.", "Get Out was by far the most successful box office performer in the category for Universal.","The film, The Shining is based on Stephen King's 1977 novel The Shining."];

      }
  } else{
      if(dropdown2.value == "Rap" ){
        info = ["Some believe Kim Tim III Personality Jock to be the first rap song released.", " Illmatic was Nas first album.", "To Pimp A Butterfly was to show that music is way more than just the music: it can bring hope to the listener and inspire the younger generation", "The album running time by Kid Cudi, Man on the Moon II: The Legend of Mr. Rager is 62:06.", "The difference between rap and hip hop is that Hip Hop is a whole culture with Rap being one of the elements of the Hip Hop culture.", "Rap expresses emotions and ideas and has more words per song than any other genre."];
      }else if (dropdown2.value == "Pop"){
        info = ["The Rolling Stones - Exile On Main St was recorded at French Riviera.", "Full Moon Fever is the debut solo studio album by Tom Petty.", "Jagged Little Pill  was Alanis Morissette first album to be released worldwide as her first two albums were released only in her native Canada.","Whoa, Nelly!  By Nelly Furtado was nominated for Grammy Award for Best Pop Vocal Album.","Beyonce - Lemonade won five awards.", "The genre popular music originated in its modern form in the 1950s, deriving from rock and roll.","The word 'pop' was first used as an abbreviation for 'popular' as early as 1926.", "Michael Jackson was first called King of Pop by Elizabeth Taylor when she presented him with an award in 1989."];
      }else{
        info = ["Red Headed Stranger by Willie Nelson,  won the Grammy Hall of Fame award.", "Come on Over by Shania Twain, became the all-time best-selling country music album, best-selling studio album by a female act, and best selling album by a Canadian.","O Brother, Where Art Thou? Soundtrack won the Golden Globe Award for  Motion Picture Musical or Comedy.","Chris Stapleton's 'Traveller' won a total of five awards.","Country music originated in the musical form which was called hillbilly music.","Country was given its name to suggest that it was the music of the rural regions in America.","Country is a genre of popular music that originated in the southern United States in the early 1920s.","Bro-country is a subgenre of mainstream country music originating in the second decade of the 21st century that is influenced by 21st-century hip hop, hard rock and electronica."];
      }
  }
  var random =  Math.floor((Math.random() * info.length));
  for(i = 0; i < info.length; i++){

    document.getElementById("info").innerHTML= info[random];
  }
}

var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

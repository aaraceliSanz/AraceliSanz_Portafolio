let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy desarrolladora web full stack y administradora Salesforce')
  .pauseFor(200)
  .deleteChars(10)
  .start();

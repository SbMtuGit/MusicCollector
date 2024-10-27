/* GET 'home' page */
const homelist = function(req, res){
    res.render('Info', {
      title: 'DiscSearch - your favourite music in one place',
      pageHeader: {
        title: 'DiscSearch',
        strapline: 'All you music in one place'
      },
      sidebar: "Stream line your music collection today",
     
    });
  };
  const Discover = function(req, res){
    res.render('Discover', {
      title: 'DiscSearch',
      pageHeader: {
        title: 'Discsearch'
      },
      sidebar: {
        context: 'welcome to discsearch'
      },
    
      albums: [
        {
          cover: '/locations/pic03.jpg',
          title: 'Abbey Road',
          artist: 'The Beatles',
          year: 1969,
          genre: 'Rock',
          discription:"the iconic eleventh studio album by The Beatles, released in 1969. Celebrated for its eclectic sound and innovative production, the album features classic tracks like Come Together, Something, and Here Comes the Sun"
        },
        {
          cover: '/images/album2.jpg',
          title: 'Thriller',
          artist: 'Michael Jackson',
          year: 1982,
          genre: 'Pop',
          discription:"Thriller is the groundbreaking sixth studio album by Michael Jackson, released in 1982. This iconic record features an extraordinary blend of pop, rock, and funk, highlighted by timeless hits like Billie Jean, Beat It,and the title track, Thriller. "
        },
        {
          cover: '/images/album3.jpg',
          title: 'Back to Black',
          artist: 'Amy Winehouse',
          year: 2006,
          genre: 'Soul',
          discription:"Back to Black is the critically acclaimed second studio album by Amy Winehouse, released in 2006. This powerful record showcases her unique blend of soul, jazz, and R&B, featuring standout tracks like Rehab, You Know I'm No Good "
        }
      ]
    });
  };
  const Login= function(req, res){
    res.render('Login', {
      title: 'Login',
      pageHeader: { title: 'DiscSearch' }
    });
  };
  const Register= function(req, res){
    res.render('Register', {
      title: 'Register',
      pageHeader: { title: 'DiscSearch' }
    });
  };
  
  module.exports = {
    homelist,
    Login,
    Register,
    Discover
  };
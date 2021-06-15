// routes
/* app.get('/', (req, res) => {
  res.redirect('/blogs');
}); */

//

// blog routes
//app.use('/blogs', blogRoutes);


const index = (req, res) => {
   res.render('index1', { title: 'Home page' });
  
  }

  const asian_countries = (req, res) => {
    res.render('asian/countries', { title: 'Asian cuisines' });
   
   }

   const philippines_cuisines = (req, res) => {
    res.render('asian/philippines-cuisines', { title: 'Philippines cuisines' });
   
   }
 
   const php_lechon = (req, res) => {
    res.render('asian/php-lechon', { title: 'Lechon dish' });
   
   }
   


  module.exports = {
    index,
    asian_countries,
    philippines_cuisines,
    php_lechon
  }
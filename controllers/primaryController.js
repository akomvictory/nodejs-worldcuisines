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



  module.exports = {
    index
  }
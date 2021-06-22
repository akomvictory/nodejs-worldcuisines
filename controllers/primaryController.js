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
  
  const european_countries = (req, res) => {
    res.render('europe/countries', { title: 'European cuisines' });
   }
   
   const spanish_cuisines = (req, res) => {
    res.render('europe/spanish-cuisines', { title: 'Spanish cuisines' });
   }

   const esp_gazpaco = (req, res) => {
    res.render('europe/esp-gazpaco', { title: 'Gazpaco cuisine' });
   }

   const esp_paella = (req, res) => {
    res.render('europe/esp-paella', { title: 'Paella cuisine' });
   }
   
   const esp_gambas = (req, res) => {
    res.render('europe/esp-gambas', { title: 'Gambas Al aljillo cuisine' });
   }

   const fr_cuisines = (req, res) => {
    res.render('europe/fr-cuisines', { title: 'french  cuisine' });
   }

   const fr_bouillabaisse = (req, res) => {
    res.render('europe/fr-bouillabaisse', { title: 'Pozole cuisine' });
   }

   const fr_monsieur = (req, res) => {
    res.render('europe/fr-monsieur', { title: 'Croque monsieur cuisine' });
   }

   const fr_lorraine = (req, res) => {
    res.render('europe/fr-lorraine', { title: 'Lorraine cuisine' });
   }

   const itl_cuisines = (req, res) => {
    res.render('europe/itl-cuisines', { title: 'Italian cuisine' });
   }

   
   const mexican_cuisines = (req, res) => {
    res.render('americas/mx-cuisines', { title: 'Mexican cuisine' });
   }

   const mx_pozole = (req, res) => {
    res.render('americas/mx-pozole', { title: 'Pozole cuisine' });
   }

   const mx_tostadas = (req, res) => {
    res.render('americas/mx-tostadas', { title: 'Tostadas cuisine' });
   }

    const mx_chilaquiles = (req, res) => {
    res.render('americas/mx-chilaquiles', { title: 'Chilaquiles cuisine' });
   }

   const uruguan_cuisines = (req, res) => {
    res.render('americas/ur-cuisines', { title: 'Uruguan cuisine' });
   }

   const ur_asado = (req, res) => {
    res.render('americas/ur-asado', { title: 'Asado cuisine' });
   }
   
   const ur_chaja = (req, res) => {
    res.render('americas/ur-chaja', { title: 'Chaja cuisine' });
   }
   
   const ur_revuelto = (req, res) => {
    res.render('americas/ur_revuelto', { title: 'Revuelto gramaja' });
   }

   const asian_countries = (req, res) => {
    res.render('asian/php-sinigang', { title: 'Lechon dish' });
   }

   const philippines_cuisines = (req, res) => {
    res.render('asian/philippines-cuisines', { title: 'Philippines cuisines' });
    }
 
   const php_lechon = (req, res) => {
    res.render('asian/php-lechon', { title: 'Lechon dish' });
   }

   const php_sinigang = (req, res) => {
    res.render('asian/php-sinigang', { title: 'Lechon dish' });
   }

   /*const african_countries = (req, res) => {
    res.render('african/countries', { title: 'African cuisines' });
   } */
    
   const tanzanian_cuisines = (req, res) => {
    res.render('african/tz-cuisines', { title: 'Tanzanian cuisines' });
   } 
   


  module.exports = {
    index,
    asian_countries,
    philippines_cuisines,
    php_lechon,
    php_sinigang,
    european_countries,
    spanish_cuisines,
    esp_gazpaco,
    esp_paella,
    esp_gambas,
    mexican_cuisines,
    mx_pozole,
    mx_tostadas,
    mx_chilaquiles,
    uruguan_cuisines,
    ur_asado,
    ur_chaja,
    fr_cuisines,
    fr_monsieur,
    fr_bouillabaisse,
    fr_lorraine,
    ur_revuelto,
    itl_cuisines
    
  }
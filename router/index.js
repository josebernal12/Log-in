const {Router} = require('express');
const router = Router()
const path = require('path')


function authMiddleware(req, res, next) {
    if (req.session.username) {
      next();
    } else {
      res.redirect("/login");
    }
  }
  
  function loginMiddleware(req, res, next) {
    if (req.session.username)  {
      res.redirect("/");
    } else {
      next();
    }
  }
  
  router.get("/", authMiddleware, (req, res) => {
   res.sendFile(path.join(__dirname, "../public/home.html"))
   
  
});
  
  router.get("/login", loginMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  
  router.get("/api/login", async (req, res) => {
    try {
     req.session.username = req.query.username;
  
      res.redirect("/");
    } catch (err) {
      res.json({ error: true, message: err });
    }
  });

  router.get("/api/logout", async (req, res) => {
    try {
    req.session.destroy((err)=>{
      if(err) {
        return res.json({ error: true, message: "Error loging out" })
      }
    
    })
   } catch (err) {
      res.json({ error: true, message: err });
    }
  });
 
router.get("/user", (req, res) => {
  res.json(req.session.username);
});






module.exports = router
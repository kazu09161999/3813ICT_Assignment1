var fs = require('fs');

module.exports = function(req, res) {
    var u = req.body.username;
    var p = req.body.pwd;
    c = u + p;
    console.log(c);
    login = false
    fs.readFile('./data/users.json', 'utf8', function(err, data) {
        // the above path is with respect to where we run server.js
        if (err) throw err;
        const userArray = JSON.parse(data);
        console.log(userArray);
        
        for(let i=0; i<userArray.users.length; i++){
          console.log("Array Email"+userArray.users[i]["email"]);
          console.log("Array Password"+userArray.users[i]["pwd"]);
          if (u==userArray.users[i]["email"]&&p==userArray.users[i]["pwd"]){
              this.login =true;
            
              userdata={
                username:userArray.users[i]["username"],
                pwd:userArray.users[i]["pwd"],
                email:userArray.users[i]["email"],
                id:userArray.users[i]["id"],
                role:userArray.users[i]["role"],
              }
              //res.send({"ok":true});
              res.send({"ok":true,
              username:userArray.users[i]["username"],
              pwd:userArray.users[i]["pwd"],
              email:userArray.users[i]["email"],
              id:userArray.users[i]["id"],
              role:userArray.users[i]["role"],
          });
          break
          }
      }
    });

}
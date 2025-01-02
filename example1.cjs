const inspector = require("inspector");
const fs = require("fs");
const session = new inspector.Session();
session.connect();
session.post('Profiler.enable');
session.post('Profiler.start');

setTimeout(function(){
    session.post('Profiler.stop',
        function(err,data){
            fs.writeFileSync('data.cpuprofile',
                JSON.stringify(data.profile)
            );
        }
    );
},8000);



var job = ["DJ", "Engineer", "TruckDriver", "Teacher"];
var city = ["SanAntonio", "Dallas", "Seagoville", "Kaufman"];
var spouse = ["Lauren", "Miranda", "Lillia", "Jessica"];
var numKids = [0,8,2,1];

var y = Math.floor(Math.random() * 4 );

function fortune(job,city,spouse,numKids) 
{
  document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids. ");
}


fortune (job[y],city[y],spouse[y],numKids[y]);

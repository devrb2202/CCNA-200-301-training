// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const ip = "100.168.1.1";
const nsm = "/24";
const requirements = 100;
const lf = "255.255.255.0";
const first_valid = "";
const last_valid = "";
const actual_networks = 0 | null;
const usable_hosts = 0 | null;
const ip_result = ip.split('.')

//console.log(ip_result[0]);

function ip_check(ip){
   const ip_result = ip.split('.')
   const test = parseInt(ip_result[0])
   if(test <= 10 || test <= 127){
       console.log("This ip is part of Class A");
   }
   else if(test === 128 || test <= 191){
       console.log("This ip is part of Class B");
   }   
   else if(test === 192 || test <= 223){
      console.log("This ip is part of Class C");
   } 
   else {
      console.log("This ip is invalid");
   }

   return ip;
}

console.log(ip_check(ip));









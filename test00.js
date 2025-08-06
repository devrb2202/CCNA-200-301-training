// 192.168.1.1
// /24
// LF: 255.255.255.0

// Binary
//  8    7   6   5  4   3   2   1   Bits
// 128  64  32  16  8   4   2   1   Value
// 128 192 224 240 248 252 254 255  Sum

// Sample Formula
// How many networks?
    // example 100 networks
    // bits of 100 networks is 7
// How many Bits?
// Get New Subnet mask and Long Format
    // Old Subnet mask + Number of Bits
    // Then Convert to Long Format
// Get Increment

// Get Range
    // Copy Classfull network base on its class
    // Add Increment to the octet where subnet mask stops

// Get Actual Networks
    // to get actual networks 
    // 2 ** New Subnet Mask - Old Subnet Mask
// Get Usable Host
    // 2 ** 32 - New Subnet Mask


function ip_addr(numberOfNetworks, ip){
    const osm = 24;
    const number_of_networks = numberOfNetworks;
    const ip_address = ip.split('.');
    const int_ip = parseInt(ip_address[2]);

   
    if(numberOfNetworks <= 127 && numberOfNetworks >= 64){

        // new nsm = osm + number of bits
        const bits = 7;
        const nsm = osm + bits;
        let getIncrement = 2 ** (bits - 1);
        ip_address[3] = getIncrement;
        let newIp = ip_address.join('.')

        // get range

        console.log(`Classfull Ip: ${ip}`)
        console.log(`Range: ${newIp}`)
        console.log(int_ip);
        console.log(getIncrement);

    }    
    

}

console.log(ip_addr(100,"192.168.0.0"))

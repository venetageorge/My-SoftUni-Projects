function encryptingPassword(input) {
    let num = Number(input.shift());
    let pattern = /(?<symbols>.+)>(?<group1>\d{3})\|(?<group2>[a-z]{3})\|(?<group3>[A-Z]{3})\|(?<group4>[^<>]{3})<\1/g;
    let res = '';
    
    
    for (let i = 0; i < num; i++) {
    let match = pattern.exec(input[i]);
        
    if (!match) {
        console.log(`Try another password!`);
        continue;
    } else {
        res = match.groups.group1 + match.groups.group2 + match.groups.group3 + match.groups.group4;
        console.log(`Password: ${res}`);
    }

    }
}
encryptingPassword(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"]);
encryptingPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"]);
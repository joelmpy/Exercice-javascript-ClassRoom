let user = false;
let message = "";

if(user){
    message = "Welcome my new channel";
}else {
    message = "Welcome to home";
}

console.log(message);

class Utilsateur {
    constructor(name, age, accountLevel){
        this.name = name,
        this.age = age,
        this.accountLevel = accountLevel
    }
}

let firstUser = new Utilsateur('Will Alexander', 25, 'normal');
let secondUser = new Utilsateur('Jojo Mani', 35, 'premium');
let threeUser = new Utilsateur('Micheal John', 15, 'mega-premium');

let utilsateurs = [firstUser, secondUser, threeUser];

if (firstUser.accountLevel === 'normal'){
    console.log('Ils sont normal')
}else {
    console.log('ils sont pas normal du tout')
}

switch(secondUser.accountLevel) {
    case 'normal' : console.log('ils sont normal')
    break;

    case 'premium' : console.log('Ils sont premium');
    break;

    case 'mega-premium' : console.log('Ils sont mega premium');
}
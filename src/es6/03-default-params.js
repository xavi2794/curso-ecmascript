function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 30;
    var country = country || 'Spain';
    console.log(name, age, country);
}

newUser();

//Default param function ES6 
function newAdmin(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}
newAdmin();
newAdmin('David', 40, 'CO');
const fs= require("fs");

const fileName = path.join(__dirname, "users.json");

class User {
  constructor(username, password, age, isActive, date) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.isActive = isActive;
    this.date = date;
  }
}
let userData = [];
function addNewUser(username, password, age, isActive, date) {
	 const newUser = new User(username, password, age, isActive, date);
	 userData.push(newUser);
} 
  
  addNewUser("Ivanmih99", "ivan123", 23, true, "06.03.2023");
  addNewUser("Marko03", "marko123", 19, true, "06.03.2023");
  addNewUser("Nikola03", "nikola123", 23, true, "06.03.2023");
  addNewUser("user01", "user123", 22, true, "06.03.2023");
  addNewUser("user02", "user123", 25, true, "01.03.2023");
  addNewUser("user03", "user123", 26, true, "02.03.2023");
  addNewUser("user04", "user123", 24, true, "01.03.2023");
  addNewUser("user05", "user123", 25, true, "01.03.2023");
  addNewUser("user06", "user123", 27, true, "02.03.2023");
  addNewUser("user07", "user123", 25, true, "03.03.2023");
  addNewUser("user08", "user123", 25, true, "02.03.2023");
  
  const saveUser = userData => fs.writeFileSync(fileName, JSON.stringify(userData))

const appendNewUser = (username, password, age, isActive, date) => {
  const newUser = new User(username,password,age,isActive,date);
  userData.push(newUser);
  saveUser(userData);
}


  const setUserInactive = userData => {
   
  for (let user of userData) {
    if (user.date !== "06.03.2023") user.isActive = false;
  }
    saveUser(userData);
  };

  const deleteUser = userName => {
    const updatedUserData = userData.filter (user => user.username !== userName);
    saveUser(updatedUserData);
  }

  const deleteAllInactive = () => {
    const updatedUserData = userData.filter (user => user.isActive === true);
    saveUser(updatedUserData);
  }


  setUserInactive(userData);
  appendNewUser("user09", "user123", 22, true, "02.03.2023");
  deleteUser("user08");
  // deleteAllInactive();



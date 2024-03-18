const userContainer = document.getElementById('user-container');


async function fetchUser(){
    let userArray = [];
   await fetch('https://dummyjson.com/users')
   .then((nes) => nes.json())
   .then((json) => userArray.push(json.users))

//    console.log()

   userArray[0].forEach((value) => {
    userContainer.innerHTML += `
    <div class="single_user">
    <img src="${value.image}" class = "profile-pic" />
            <h3>name: ${value.firstName} ${value.lastName}</h3>
            <div class="age_gender">
                <span> ${value.age}</span>
                <span> ${value.gender}</span>
            </div>
              <p class="phone">Phone: ${value.phone}</p>
              <p class="email">Email: ${value.email}</p>
              <p class="pass"> ${value.password}</p>
           </div>
           
           `
   })
   
}
fetchUser()
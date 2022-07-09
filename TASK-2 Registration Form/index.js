const enrollStudent = document.querySelector(".btn");


const enrolledStudent = [];

enrollStudent.addEventListener('click', () => {

    var output = document.querySelector(".output");

    //storing the data in objects getting from form
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        img: document.getElementById("img").value,
        gender: document.getElementById("gender").value,
        skills: document.getElementById("skills").value
    };

    //Card Template
    let newlist = document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML = `
      <img src="${data.img}" alt="image" height="40px" width="25px">
      <div class="nameContainer"> Name: ${data.name}</div>
      <div class="emailContainer">Email: ${data.email}</div>
      <div class="ageContainer">Age: ${data.age}</div>
      <div class="genderContainer">Gender: ${data.gender}</div>
      <div class="skillContainer">Skills: ${data.skills}</div>
      <button class="btn deleteButton">Delete</button>
    `
    
    //adding the card one after the other
    output.appendChild(newlist);

    enrolledStudent.push(data);


    enrolledStudent.forEach(element => {
        newlist.addEventListener('click', (e) => {
            output.removeChild(newlist);
        })
    });


    //clearing the input fields after submission
    let input = document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
    });

})

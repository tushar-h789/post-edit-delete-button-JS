let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//button click submit part
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

//from validation part
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    msg.innerHTML = "";
    acceptData();
    console.log("success");
  }
};

//accept and store data

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPosts();
};

//stor data upload in display
let createPosts = () => {
  posts.innerHTML += `
   <div>
        <p>${data.text}</p>
        <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick ="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    
  `;
  input.value = "";
};

//delete button
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

//update or edit button
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

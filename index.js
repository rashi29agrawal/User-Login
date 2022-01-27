function loginUser()
{
    let email1,pwd1;
    email1=document.getElementById("email1").value;
    pwd1=document.getElementById("pwd1").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email1 && v.pwd==pwd1}))
    {
        alert("Login Successful!");
        let current_user=user_records.filter((v)=>{return v.email==email1 && v.pwd==pwd1})[0]
        localStorage.setItem('email',current_user.email);
        showData();
        }
    else
    {
        alert('Login Failed');
    }

}


function saveData()
{
    let fname, lname, email, pwd;
    let roles = document.querySelector('input[type=radio][name=role]:checked').value;
    let role;
    if (roles == 'admin') {
        role = document.getElementById('admin').value;
    }
    else if (roles == 'operations') {
        role = document.getElementById('operations').value;

    }
    else if (roles == 'sales') {
        role = document.getElementById('sales').value;

    }

    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    email=document.getElementById("email").value;
    pwd=document.getElementById("pwd").value;


    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(user_records.some((v)=>{return v.email==email}))
            {
            alert("Email already registered");
            }
        else
            {
            user_records.push({
            "fname":fname,
            "lname":lname,
            "email":email,
            "pwd":pwd,
            "role":role
            }
    )
    localStorage.setItem("users",JSON.stringify(user_records));

    document.getElementById('email').value = "";
    document.getElementById('uname').value = "";
    document.getElementById('pwd').value = "";
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('gen').value = "";
    document.getElementById(roles).checked = false;
    }
    showData();
}

showData();
function showData()
{

  let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {


    let box = document.getElementById('box');
    let li = document.createElement('li');
    li.style.color = "black";
    li.style.fontSize = "20px";
    li.textContent = user_records[i].fname+' '+user_records[i].lname;

    let pos = box.firstElementChild;
    if (pos == null)
        box.appendChild(li);
    else
        box.insertBefore(li, pos);
}

    }
  }

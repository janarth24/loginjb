const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm password");

// form.addEventListener('submit',e=> {
//     e.preventDefault();
//     checkInput();
// })

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
} );

function checkInput()
{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue ==='')
    {
        setError(username,'Username cannot be empty')
    }
    else
    {
        setSuccess(username);
    }
    if(emailValue ==='')
    {
        setError(email,'Email cannot be empty')
    }
    else if(!isEmail(emailValue))
    {
        setError(email,'Not a valid Email')
    }
    else
    {
        setSuccess(email);
    }
    
    if(passwordValue ==='')
        {
            setError(password,'password cannot be empty')
        }
    else
    {
        setSuccess(password);
    }

    if(confirmPasswordValue ==='')
    {
        setError(confirmPassword,'password cannot be empty')
    }
    else if(passwordValue !== confirmPasswordValue)
    {
        setError(confirmPassword,'password doesnot match');
    }
    else
    {
        setSuccess(confirmPassword);
    }
}
function isEmail(email)
    {
        return (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(email);
    }
function setError(input,message)
{
    const formControl=input.parentElement;
    console.log(formControl);
    const small=formControl.querySelector('small');
    formControl.className='form-control error';
    small.innerText=message;

}  
function setSuccess(input)
{
    const formControl=input.parentElement;
    formControl.className='form-control success';
}  



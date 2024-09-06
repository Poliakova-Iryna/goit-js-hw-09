
const formData = {
    email: "",
    message: ""
  };
  
 
  const saveToLocalStorage = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };
  
  
  const populateFormFromLocalStorage = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      formData.email = email;
      formData.message = message;
  
      document.querySelector('input[name="email"]').value = email;
      document.querySelector('textarea[name="message"]').value = message;
    }
  };
  
  
  const handleInput = (event) => {
    const { name, value } = event.target;
    formData[name] = value;
    saveToLocalStorage();
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formData.email === "" || formData.message === "") {
      alert('Fill please all fields');
      return;
    }
  
    console.log(formData);
  
   
    localStorage.removeItem('feedback-form-state');
  
   
    formData.email = "";
    formData.message = "";
  
    
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
  };
  
  
  document.addEventListener('DOMContentLoaded', () => {
    populateFormFromLocalStorage();
    document.querySelector('.feedback-form').addEventListener('input', handleInput);
    document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);
});
  
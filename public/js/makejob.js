const postJob = async (event) => {
    event.preventDefault();
    try {
      const job_name = document.querySelector("#job_name").value.trim();
      const description = document.querySelector("#description").value.trim();
      const price = document.querySelector("#price").value.trim();
      const zipcode = document.querySelector("#zipcode").value.trim();
      const contact_email = document.querySelector("#contact_email").value.trim();

      console.log({ 
        job_name,
        description, 
        price, 
        zipcode,
        contact_email,
      })
      const response = await fetch("/api/hiringposts", {
        method: "POST",
        body: JSON.stringify({ 
          job_name,
          description, 
          price, 
          zipcode,
          contact_email,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
  
      console.log(price)
      if (isNaN(price)) {
        alert("price only accepts numbers, no symbols such as $")
      }
      if (isNaN(zipcode)) {
        alert("zipcode only accepts numbers")
      }
      if (!response.ok) {
        alert("Failed to post job.");
        return;
      }
  
      // go to home page
      window.location.replace("/hiringposts");
    } catch (error) {
      console.log(error);
    }
  };
  
  document
    .querySelector(".job-post")
    .addEventListener("submit", postJob);
const postJob = async (event) => {
    event.preventDefault();
    try {
      const description = document.querySelector("#description").value.trim();
      const job_name = document.querySelector("#job_name").value.trim();
      const price = document.querySelector("#price").value.trim();
      const zipcode = document.querySelector("#zipcode").value.trim();
  
      const response = await fetch("/api/hiringposts", {
        method: "POST",
        body: JSON.stringify({ description, job_name, price, zipcode }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
  
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
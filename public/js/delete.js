// Deletes selected job in table
const hiringPostDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/hiringposts/1", {
        method: "DELETE",
      });
  
      if (!response.ok) {
        alert("There was a problem deleting this post");
        return;
      }
  
      // go to hiring posts page
      window.location.replace("/hiringposts");
    } catch (error) {
      console.log(error);
    }
  };
  
  document.querySelector("#delete").addEventListener("click", hiringPostDelete);
// Deletes selected entry in job table
const hiringPostDelete = async (event) => {
    event.preventDefault();
    const id = location.href.split('hiringposts/')[1];
    try {
      const response = await fetch(`/api/hiringposts/${id}`, {
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
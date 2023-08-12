
document.body.style.border = "20px solid green";


// Start observing the target node for configured mutations
setTimeout(()=>{
  document.querySelectorAll('[id^="google"]').forEach((e, i) => {
    e.style.display = "none" 
  });
}, 3000)


const pre = document.querySelectorAll(".pre");

pre.forEach((e)=> {
  e.addEventListener("click", (ele) => {
    let show = e.firstElementChild.firstElementChild;
    show.textContent = 'Copied';
    show.style.cssText = 'left: -18px; transition: none;';
    setTimeout(()=> {
      show.textContent = 'Copy Code';
      show.style.cssText = 'left: -33px; transition: block;';
    }, 1000);
    var copyText = e.children[1].innerHTML;
    navigator.clipboard.writeText(copyText);
  });
});
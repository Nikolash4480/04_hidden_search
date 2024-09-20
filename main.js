const search = document.querySelector('.search');

function searchContainer(){
  const input = document.createElement('input');
  input.classList.add("input");
  input.setAttribute("placeholder", "Search...");
  search.appendChild(input);

  const button = document.createElement('button');
  button.classList.add("btn");
  search.appendChild(button);

  const span =  document.createElement('span');
  span.classList.add("material-symbols-outlined");
  span.textContent="search";
  button.appendChild(span);

  button.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
  });
}
searchContainer();
// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const deleteBtn = document.querySelector('.delete');

const fullBlog = document.querySelector('.details');
const renderDetails = async () =>{
    const res = await fetch('http://localhost:3000/posts/'+id);
    const post = await res.json()
    
    const template =  `<div >
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body}</p>
        </div>
        `;
    fullBlog.innerHTML = template
  
}
deleteBtn.addEventListener('click',async (e) =>{
    const res = await fetch('http://localhost:3000/posts/'+id,{
        method:"DELETE"
    });
  window.location.replace('/index.html'); 
});

window.addEventListener('DOMContentLoaded',() => renderDetails())
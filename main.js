let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let boxs = document.querySelectorAll('.box');
let drag = null ;
btn.onclick = ()=>{
    if(inp.value != ''){
        boxs[0].innerHTML += `
            <p class="item" draggable="true">${inp.value}</p>
        `
        inp.value = ''
    }
    dragitem();
}

function dragitem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart', ()=>{
            drag = item;
            item.style.opacity = '0.5';
        })
        item.addEventListener('dragend',()=>{
            drag = null;
            item.style.opacity = '1';
        })
        boxs.forEach(box=>{
            box.addEventListener('dragover',(e)=>{
                e.preventDefault();
                box.style.background = '#090';
                box.style.color = '#fff';
            })
            box.addEventListener('dragleave', ()=>{
                box.style.background = '#fff';
                box.style.color = '#000';
            })
            box.addEventListener('drop', ()=>{
                box.appendChild(drag)
                box.style.background = '#fff';
                box.style.color = '#000';
            })
        })
    });
}

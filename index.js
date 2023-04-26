var list=document.getElementById('list');
let amount=document.getElementById('expense');
let description=document.getElementById('description');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let expense=document.createElement('li')
    expense.appendChild(document.createTextNode(amount.value+' Rs - '+description.value+' - '+category.value+'  '))
    list.appendChild(expense)
    
    let ebutton=document.createElement('button')
    ebutton.className='btn btn-primary btn-sm'
    ebutton.appendChild(document.createTextNode('Edit Expense'))
    // <button type="button" class="btn btn-primary btn-sm">Small button</button>
    let dbutton=document.createElement('button')
    dbutton.className='btn btn-secondary btn-sm'
    dbutton.appendChild(document.createTextNode('Delete Expense'))
    
    expense.appendChild(dbutton)
    expense.appendChild(ebutton)
    list.append(document.createTextNode(' '))
    // let OBJ=JSON.stringify({'amount': amount.value,'description':description.value,'category':category.value})
    // localStorage.setItem(count,OBJ)
    axios
    .post(`https://crudcrud.com/api/5a5d3f225ee041f0bede845bdb7ab150/expense`,{
        "amount": amount.value,
        "description": description.value,
        "category": category.value
    })
    // .then(res => console.log(res))
    .catch(err => console.error(err));    
})

list.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('btn-secondary')){
        let parent=e.target.parentElement
        list.removeChild(parent)
        // axios
        // .delete(`https://crudcrud.com/api/7d0255157e2f476b9b58f1b425f7a29a/expense/`)
        // .catch(err => console.error(err));
    }
    
})
list.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('btn-primary')){
        let parent=e.target.parentElement
        list.removeChild(parent)
        // axios
        // .delete(`https://crudcrud.com/api/7d0255157e2f476b9b58f1b425f7a29a/expense/`)
        // .catch(err => console.error(err));
    }
})
window.addEventListener('DOMContentLoaded',()=>{
    axios(`https://crudcrud.com/api/5a5d3f225ee041f0bede845bdb7ab150/expense`)
    .then((val)=>{
        // console.log(val.data);
        for(i=0;i<val.data.length;i++){
            let expense=document.createElement('li')
            expense.appendChild(document.createTextNode(val.data[i].amount+' Rs - '+val.data[i].description+' - '+val.data[i].category+'  '))
            list.appendChild(expense)
            
            let ebutton=document.createElement('button')
            ebutton.className='btn btn-primary btn-sm'
            ebutton.appendChild(document.createTextNode('Edit Expense'))
            // <button type="button" class="btn btn-primary btn-sm">Small button</button>
            let dbutton=document.createElement('button')
            dbutton.className='btn btn-secondary btn-sm'
            dbutton.appendChild(document.createTextNode('Delete Expense'))
            
            expense.appendChild(dbutton)
            expense.appendChild(ebutton)
            list.append(document.createTextNode(' '))
        }
    })
    
})
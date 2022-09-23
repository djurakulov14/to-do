let form = document.forms.todo
let container = document.querySelector('.container')
let todos = [
    {
        id: 1, 
        task: "купить тесла",
        isDone: false,
        time: "10:34"
    },
    {
        id: 2, 
        task: "купить луну",
        isDone: true,
        time: "09:34"
    },
    {
        id: 3, 
        task: "поиграть в csgo",
        isDone: false,
        time: "12:34"
    }
]

const reload = (arr) => {
    container.innerHTML = ""
    // let change_inp_value = document.querySelectorAll('#change_inp')
    
    
    
    for(let item of arr) {
        
        let modal = document.createElement('div')
        let modal_bg = document.createElement('div')
        let h1 = document.createElement('h1')
        let inputGroup = document.createElement('div')
        let input = document.createElement('input')
        let btn_save = document.createElement('button')
        let btn_cancel = document.createElement('button')
        
        
        modal_bg.classList.add('modal_bg')
        modal.classList.add('modal')
        inputGroup.classList.add('inputGroup')
        btn_cancel.classList.add('cancel')
    
        h1.innerHTML = 'Edite Task'
        btn_save.innerHTML = 'save'
        btn_cancel.innerHTML = 'cancel'
        
        container.after(modal_bg)
        container.after(modal)
        modal.append(h1, inputGroup, btn_cancel)
        inputGroup.append(input, btn_save)

        let div = document.createElement('div')   
        let topLeftDiv = document.createElement('div')   
        let img = document.createElement('img')   
        let changeBtn = document.createElement('img')
        let span = document.createElement('span')   
        let time = document.createElement('time')
        let topRightDiv = document.createElement('div')
        let topDiv = document.createElement('div')



        if(item.isDone === true) {
            span.classList.add('done')
            time.classList.add('done')
        }
        div.classList.add('item')
        topDiv.classList.add('top')

        changeBtn.classList.add('img2')


        span.innerHTML = item.task
        time.innerHTML = item.time

        img.src = "./img/Group 14.svg"
        changeBtn.src = "./img/edit (2).svg"

        topRightDiv.append(changeBtn, img)
        topLeftDiv.append(span)
        topDiv.append(topLeftDiv,topRightDiv)
        div.append(topDiv, time)
        container.append(div)


        img.onclick = () => {
            todos = todos.filter(elem => elem.id !== item.id)
            reload(todos)
        }
        span.onclick = () => {
            item.isDone = !item.isDone

            reload(todos)
        }

        changeBtn.onclick = () => {
            console.log(item.task);
            modal_bg.style.display = 'block'
            modal.style.display = 'block'
            setTimeout(() => {
                modal_bg.style.opacity = 1
                modal.style.opacity = 1 
            }, 100);
        }
        btn_save.onclick = () => {
            console.log(item.task);
            if(input.value.length === 0){
                alert('Поле запольнения не может быть пустым')
            } else{
                item.task = input.value
                modal_bg.style.display = 'none'
                modal.style.display = 'none'
                setTimeout(() => {
                    modal_bg.style.opacity = 0
                    modal.style.opacity = 0
                }, 100);
                reload(todos)
            }
        }
        
        btn_cancel.onclick = () => {
            console.log(item.task);
            modal_bg.style.opacity = 0
            modal.style.opacity = 0
            setTimeout(() => {
                modal_bg.style.display = 'none'
                modal.style.display = 'none'
            }, 100);
        }

    }

}

form.onsubmit = (e) => {
    e.preventDefault()

    let task = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes() 
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })


    todos.push(task)

    reload(todos)
}

// const openModal = () => {
//     document.querySelector('.modal_bg').style.display = 'block'
//     document.querySelector('.modal').style.display = 'block'
//     setTimeout(() => {
//         document.querySelector('.modal_bg').style.opacity = 1
//         document.querySelector('.modal').style.opacity = 1 
//     }, 100);
    
// }
// const closeModal = () => {
//     item.task = change_inp_value.value
//     document.querySelector('.modal_bg').style.opacity = 0
//     document.querySelector('.modal').style.opacity = 0
//     setTimeout(() => {
//         document.querySelector('.modal_bg').style.display = 'none'
//         document.querySelector('.modal').style.display = 'none'
//     }, 1000);
//     reload(arr)
// }

// const cancelModal = () =>{
//     document.querySelector('.modal_bg').style.opacity = 0
//     document.querySelector('.modal').style.opacity = 0
//     setTimeout(() => {
//         document.querySelector('.modal_bg').style.display = 'none'
//         document.querySelector('.modal').style.display = 'none'
//     }, 100);
// }

reload(todos)

console.log(todos);

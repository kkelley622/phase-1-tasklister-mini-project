document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildNewTask(e.target.new_task_description.value)
    form.reset()
  })

});

function buildNewTask(newTask) {
  console.log(newTask)
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${newTask} ` 
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()

}

// document.querySelector('#create-task-form').addEventListener("submit", function(event) {
//   event.preventDefault();
//   console.log('Submit was prevented')
// })

// document.querySelector('#create-task-form').addEventListener("type", function(event) {
//   append()
// })

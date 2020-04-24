document.querySelector("ul.todo-list input.toggle").click()

document.querySelector("ul.todo-list button.destroy").click()

location.hash = "/active"
location.hash = "/completed"
location.hash = "/"

document.querySelector('input.new-todo').value="Hello"
document.querySelector('input.new-todo').dispatchEvent(new Event('change',{'bubbles':true}));
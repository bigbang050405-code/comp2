const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(e) {
    e.preventDefault(); // 새로고침 절대 방지!
    const value = toDoInput.value;
    toDoInput.value = "";
    
    // 리스트 만들기
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = value;
    
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.onclick = () => li.remove(); // 삭제 기능 바로 넣기
    
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
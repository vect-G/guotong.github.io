"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-actions">
                    <button class="complete-btn">完成</button>
                    <button class="edit-btn">编辑</button>
                    <button class="delete-btn">删除</button>
                </div>
            `;
            taskList.appendChild(taskItem);

            // 添加完成按钮事件
            taskItem.querySelector('.complete-btn').addEventListener('click', () => {
                taskItem.querySelector('span').classList.toggle('task-completed');
            });

            // 添加编辑按钮事件
            taskItem.querySelector('.edit-btn').addEventListener('click', () => {
                const newTaskText = prompt("编辑任务:", taskText);
                if (newTaskText !== null) {
                    taskItem.querySelector('span').textContent = newTaskText;
                }
            });

            // 添加删除按钮事件
            taskItem.querySelector('.delete-btn').addEventListener('click', () => {
                taskItem.remove();
            });

            newTaskInput.value = "";
        }
    }
})
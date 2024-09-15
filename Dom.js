// Merubah background berwarna
document.getElementById('redButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

document.getElementById('blueButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('whiteButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
});

// Open Google
document.getElementById('googleButton').addEventListener('click', function() {
    window.open('https://www.google.com', '_blank');
});

// Open YouTube
document.getElementById('youtubeButton').addEventListener('click', function() {
    window.open('https://www.youtube.com', '_blank');
})



    let todoId = 1; // Inisialisasi ID todo

    // Fungsi untuk menambah todo ke tabel
    function addTodo() {
        const todoInput = document.getElementById('todoInput').value;
        const dateInput = document.getElementById('dateInput').value;
        
        if (!todoInput || !dateInput) {
            alert("Semua input wajib di isi");
            return;
        }

        const todoList = document.getElementById('todoList');
        
        // Buat baris baru untuk todo
        const row = document.createElement('tr');
        
        // Buat kolom ID
        const idCell = document.createElement('td');
        idCell.textContent = todoId;

        // Buat kolom Todo
        const todoCell = document.createElement('td');
        todoCell.textContent = todoInput;

        // Buat kolom Tanggal
        const dateCell = document.createElement('td');
        dateCell.textContent = dateInput;

        // Buat kolom Action dengan tombol Edit dan Delete
        const actionCell = document.createElement('td');
        
        // Tombol Edit
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editTodo(row, todoCell, dateCell);
        };

        // Tombol Delete
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteTodo(row);
        };

        // Tambah tombol ke kolom Action
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        // Tambah semua kolom ke baris
        row.appendChild(idCell);
        row.appendChild(todoCell);
        row.appendChild(dateCell);
        row.appendChild(actionCell);

        // Tambah baris ke tabel
        todoList.appendChild(row);

        // Increment ID untuk todo berikutnya
        todoId++;

        // Reset input setelah submit
        document.getElementById('todoInput').value = '';
        document.getElementById('dateInput').value = '';
    }

    // Fungsi untuk edit todo
    function editTodo(row, todoCell, dateCell) {
        const newTodo = ("Edit your todo:", todoCell.textContent);
        const newDate = ("Edit the date:", dateCell.textContent);
        
        if (newTodo && newDate) {
            todoCell.textContent = newTodo;
            dateCell.textContent = newDate;
        }
    }

    // Fungsi untuk delete todo
    function deleteTodo(row) {
        row.remove();
    }

    // Tambahkan event listener untuk tombol submit
    document.getElementById('submitBtn').addEventListener('click', addTodo);



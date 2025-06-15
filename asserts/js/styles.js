    const input = document.getElementById("taskInput");
    const list = document.getElementById("list");

    const add = () => {
      const text = input.value.trim();
      if (!text) return;

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = text;

      const actions = document.createElement("div");
      actions.className = "actions";

      const editBtn = document.createElement("button");
      editBtn.innerHTML = "✏️";
      editBtn.onclick = () => edit(span, editBtn);

      const delBtn = document.createElement("button");
      delBtn.innerHTML = "🗑️";
      delBtn.onclick = () => li.remove();

      actions.append(editBtn, delBtn);
      li.append(span, actions);
      list.appendChild(li);
      input.value = "";
    };

    const edit = (span, btn) => {
      const oldText = span.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = oldText;

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "💾";
      saveBtn.onclick = () => {
        span.textContent = input.value.trim() || oldText;
        span.style.display = "inline";
        input.remove();
        saveBtn.remove();
        btn.style.display = "inline";
      };

      span.style.display = "none";
      btn.style.display = "none";
      span.parentNode.insertBefore(input, span);
      btn.parentNode.insertBefore(saveBtn, btn);
    };
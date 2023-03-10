const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDeTails = {
    timer: 5000,
    success: {
        icon:"fa-circle-xmark",
        text:"success: this is a success toast.",
    },
    error: {
        icon:"fa-circle-xmark",
        text:"error: this is a success toast.",
    },
    warning: {
        icon:"fa-triangle-exclamation",
        text:"warning: this is a success toast.",
    },
    info: {
        icon:"fa-circle-info",
        text:"info: this is a success toast.",
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide")
    setTimeout(()=> toast.remove(),500)
}


const createToast = (id) => {
    const {icon, text } = toastDeTails[id];
    const toast =document.createElement("li");
    toast.className = `toast ${id}`
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                     </div>
                     <i class="fa-solid fa-x" onclick="removeToast(this.parentElement)"></i>`
    notifications.appendChild(toast);
    setTimeout(() => removeToast(toast), toastDeTails.timer)
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id))
})


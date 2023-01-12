const shareBtn = document.querySelector("#share-icon")

const popupMenu = document.querySelector(".profile-share")

function handleClick(e) {
    popupMenu.classList.toggle("profile-share-open")
    shareBtn.style.setProperty("z-index", "99")
}

shareBtn.addEventListener("click", handleClick)



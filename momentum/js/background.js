const images = [
    "kitty.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// --- 아래 스타일 코드를 추가해서 '배경'으로 만듭니다 ---
bgImage.classList.add("bg-style"); // CSS에서 꾸미기 위해 클래스 이름을 붙여줌
document.body.appendChild(bgImage);


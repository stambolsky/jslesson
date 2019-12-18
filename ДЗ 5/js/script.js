let menuBtn = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu"),
    title = document.getElementById("title"),
    column = document.querySelectorAll(".column"),
    ad = document.getElementsByClassName("adv"),
    promptDiv = document.getElementById("prompt"),
    answer = prompt("Какое твое отношение к технике apple", "");

menu.appendChild(menuBtn[1], menuBtn[2]);
menu.appendChild(menuBtn[3], menuBtn[1]);

document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";
title.textContent = "Мы продаем только подлинную технику Apple";
column[1].removeChild(ad[0]);
promptDiv.textContent = answer;

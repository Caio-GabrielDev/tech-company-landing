console.log("JavaScript da TechNova funcionando!");

console.log(document.querySelector("#menuTechNova"));

const linksMenu = document.querySelectorAll("#menuTechNova .nav-link");
const menu = document.querySelector("#menuTechNova");

console.log(linksMenu);

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        const menuBootstrap = bootstrap.Collapse.getOrCreateInstance(menu, {
            toggle: false
        });

        menuBootstrap.hide();

    });
});
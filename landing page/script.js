class MobileNavbar{
    constructor(iconMenu, navList, navLinks){
        this.iconMenu = document.querySelector(iconMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.iconMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if (this.iconMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".iconMenu",
    ".nav-list",
    ".nav-lis li",
);

mobileNavbar.init();
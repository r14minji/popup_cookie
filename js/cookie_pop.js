class MyPopup {

  constructor(opt){
    this.cookieName = opt.name;
    this.pop = document.querySelector(opt.popup);
    this.btnClose = this.pop.querySelector(".close");
    this.btnDel = document.querySelector(opt.btnDel);
    this.btnView = document.querySelector(opt.btnView);
    this.isCookie = document.cookie.indexOf(this.cookieName);
    this.isOn;
    console.log(this.isCookie);
    
    (this.isCookie == -1) ? this.isOn = "block" : this.isOn = "none";
    this.pop.style.display = this.isOn;
    
    this.btnView.addEventListener("click", e =>{
      e.preventDefault();
      console.log(document.cookie)
    })
    this.btnDel.addEventListener("click", e=>{
      e.preventDefault();
      this.setCookie(this.cookieName, 0);
    })
    
    this.btnClose.addEventListener("click", e => {
      this.pop.style.display = "none";
    
      let isChecked = this.pop.querySelector("input[type=checkbox]").checked;
      if(isChecked)  this.setCookie(this.cookieName, 1);
    })
  }
  
  
  setCookie(name, due){
    const today = new Date();
    const day = today.getDate();
    today.setDate(day + due);
    const duedate = today.toGMTString();
    document.cookie = `${name}; path=/; expires=${duedate}`;
  }
}


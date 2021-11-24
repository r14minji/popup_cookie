class CookiePop {

  constructor(opt) {
    this.cookieName = opt.name;
    this.popup = document.querySelector(opt.popup);
    this.btnClose = this.popup.querySelector(".close");
    this.btnDel = document.querySelector(opt.btnDel);
    this.btnView = document.querySelector(opt.btnView);
    this.isCookie = document.cookie.indexOf(this.cookieName);
    this.isOn;


    (this.isCookie == -1) ? this.isOn = "block" : this.isOn = "none";
    this.popup.style.display = this.isOn;


    //쿠키 확인 버튼 이벤트 
    this.btnView.addEventListener("click", e => {
      e.preventDefault();
      console.log(document.cookie);
    });

    //쿠키삭제 버튼 이벤트 
    this.btnDel.addEventListener("click", e => {
      e.preventDefault();
      this.setCookie(this.cookieName, 0);
    })


    //팝업 닫기 버튼 이벤트 
    this.btnClose.addEventListener("click", e => {
      this.popup.style.display = "none";

      let isChecked = this.popup.querySelector("input[type=checkbox]").checked;
      if (isChecked) this.setCookie(this.cookieName, 1);
    });
  }

  setCookie(name, due) {
    const today = new Date();
    const date = today.getDate();
    today.setDate(date + due);
    const duedate = today.toGMTString();
    document.cookie = `${name}; path=/; expires = ${duedate}`;
  }
}


const popup = document.querySelector("#popup");
const btnClose = popup.querySelector(".close");
//console.log(document.cookie);
const btnDel = document.querySelector(".del");
const btnView = document.querySelector(".view");
const isCookie = document.cookie.indexOf("popup=done"); //결과값이 있으면 0, 없으면 -1
console.log(isCookie) //0

//쿠키가 없다면
if(isCookie == -1){
  console.log("쿠키 없음");
  popup.style.display = "block";
} else {
  //쿠키가 있다면
  console.log("쿠키 있음");
  popup.style.display = "none";
}

//쿠키 삭제 버튼을 클릭했을 때
btnDel.addEventListener("click", e => {
  e.preventDefault();

  //쿠키 생성 함수의 time값을 0으로 설정하면 현재 시간 이후로 만료되기 때문에 쿠키 삭제
  setCookie("popup", "done", 0) //완료시간, 지금 당장. 그러면 쿠키가 지워진다.
})

//쿠키 보기버튼 클릭시 
btnView.addEventListener("click", e => {
  e.preventDefault();
  console.log(document.cookie);
})

// 닫기 버튼을 클릭했을때
btnClose.addEventListener("click", e => {
  e.preventDefault();

  //팝업의 체크박스에 체크가 되어있는지 판별하여 저장
  let isChecked = popup.querySelector("input[type=checkbox]").checked;
  let id_name = popup.getAttribute("id");

  //처크가 되어 있다면 set함수 실행
  if(isChecked) setCookie(id_name, "done", 1);
  //팝업 안보이게 처리
  popup.style.display = "none";
})

//쿠키 생성함수 정의
function setCookie(cookieName, cookieValue, time){
  //현재시간
  const today = new Date();
  //날짜만 저장
  const date = today.getDate();
  //유효기간 설정을 위한 날짜 세팅. 현재시간에서 time값 만큼 더함
  today.setDate(date + time);
  const duedate = today.toGMTString(); //GMT시간으로 변환.쿠키에 적용할 때, 반드시 GMTString으로 해야하는 규칙이 있음. 

  document.cookie = `${cookieName} = ${cookieValue}; path ="/"; expires=${duedate}`;
}
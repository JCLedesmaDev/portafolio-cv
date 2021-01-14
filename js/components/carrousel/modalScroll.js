export function modalScroll() {

  const $body = document.querySelector("body");

  if (location.hash.includes("#trabajo-")) {

    $body.style.overflow = "hidden";
  }else{
    $body.style.overflow = "scroll";
  }
}

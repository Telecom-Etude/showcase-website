// const reveal = () => {
//     var reveals = document.querySelectorAll(".scroll-appear-layout-div");
//     for (const elt of Array.from(reveals)) {
//         var widnowHeight = window.innerHeight;
//         var revealTop = elt.getBoundingClientRect().top;
//         var revealpoint = widnowHeight / 50;

//         if (revealTop < widnowHeight - revealpoint) {
//             for (const cn of invisible) {
//                 elt.classList.remove(cn);
//             }
//         } else {
//             for (const cn of invisible) {
//                 elt.classList.add(cn);
//             }
//         }
//     }
// };

// console.log("load");

// reveal();
// window.addEventListener("scroll", reveal);
// // return () => {
// //     window.removeEventListener("scroll", reveal);
// // };

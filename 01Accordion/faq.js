const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody = document.querySelector(".accordian_body");
const faqs = [];


function createFaq() {

  for (let item = 0; item < faqData.length; item++) {

    // Create and append element
    let ele = document.createElement('div');
    ele.style.width = "100%";
    ele.innerHTML = `<div class="faq faq_header">
      <div class="faq_header">
        <h3>${faqData[item].question}</h3>
        <div class="show_btn btn${item}"></div>
      </div>
      <p class="hidden pera${item}">${faqData[item].answer}</p>
    </div>`
    accordianBody.append(ele)
    // Toggleing discription
    let p = document.querySelector(`.faq_header > .pera${item}`)
    
    document.querySelector(`.btn${item}`).addEventListener("click", () => {
      p.classList.toggle('hidden')
    })

    
  }
}
createFaq()


function btnStatusUpdate() {
}




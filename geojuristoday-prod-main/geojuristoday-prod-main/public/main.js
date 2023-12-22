// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// FOR NAVBAR

const navEl = document.getElementById("nav");
const navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", () => {
	navEl.classList.toggle("show");
});

const joinUsBtn = document.getElementById("joinUsButton");

// FOR BLOGS

const blogsCon = document.getElementById("blogsCon");

const blogListArray = [
	{
		blogImageLink: "images/SOUTH CHINA SEA DISPUTE (1).png",
		blogHeading: "South China Sea Dispute",
		blogBy: "Rudraksh Aneja",
		blogDescription:
			"This research paper examines the South China Sea dispute, a volatile territorial conflict involving multiple nations, with a particular focus on the role of the United Nations Convention on the Law of the Sea (UNCLOS) as a framework for addressing the issues. It analyzes historical context, legal dimensions, political dynamics.",
		blogLink: "blogs/china-dispute.html",
	},
	{
		blogImageLink: "images/Untitled design (3).png",
		blogHeading: "Israel-Palestine Conflict.",
		blogBy: "Rudraksh Aneja",
		blogDescription:
			"This research paper delves into the complex Israel-Palestine conflict, exploring the question of international law as a means to address and potentially resolve the longstanding dispute. The paper offers a comprehensive analysis of the historical, and United Nations resolutions in shaping the ongoing discourse and potential solutions in the region.",
		blogLink: "blogs/israel-palestine-conflict.html",
	},
];

function elementFromHtml(html) {
	const template = document.createElement("template");
	template.innerHTML = html.trim();
	return template.content.firstElementChild;
}

function createAndAppendBlog(item) {
	let myHtml = elementFromHtml(`
  <a href="${item.blogLink}" style="margin: 20px;">
    <div class="blog2">
        <div class="blog-img-con">
          <div class="blog-img" style="background-image: url('${item.blogImageLink}')"></div>
        </div>
        <div class="blog-description">
          <h1 class="blog-des-head">${item.blogHeading}</h1>
          <p class="blog-des-para">${item.blogDescription}</p>
        </div>
    </div>
  </a>  
  `);

	blogsCon.appendChild(myHtml);
}

for (let item of blogListArray) {
	createAndAppendBlog(item);
}

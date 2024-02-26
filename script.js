console.log("hi");
let index =1;
let data = [
    ["Udhav vinaik","Google"," Linkedin is a game-changer! The intuitive interface, personalized job recommendations, and vast array of quality listings make job hunting a breeze. Seamless application processes and excellent customer support seal the deal. Highly recommend for anyone serious about their career. This is a excellent job giving website for sure."],
    ["Ujwal Sharma","Amazon","Linkedin has revolutionized my job search journey. The user-friendly platform, coupled with a sophisticated algorithm, delivered tailored job recommendations that perfectly matched my skills. The abundance of high-quality job listings from diverse industries made it a one-stop-shop for opportunities. Applying for positions became a breeze with integrated features like resume upload and cover letter creation. What sets this platform apart is its commitment to user satisfaction, evident in the prompt and helpful customer support. [Job Giving Website] not only simplifies the job hunt but also empowers career growth through valuable resources. A must-try for anyone serious about finding their dream job!"],
    ["Abhay","Flipkart","Linkedin has been a game-changer in my job search. The platform's intuitive design and powerful search filters made finding relevant opportunities a breeze. What impressed me the most was the personalized touch in job recommendations, aligning seamlessly with my career goals. The platform's commitment to user experience extends to a smooth application process and a treasure trove of resources for skill development. The diverse range of job listings from reputable companies adds to the overall appeal. I'm truly grateful for [Job Giving Website]—it's not just a job portal; it's a partner in shaping careers!"],
    ["No name","Facebook","I stumbled upon Linkedin and it has transformed my job search into a remarkable experience. The user interface is incredibly intuitive, and the personalized job suggestions were spot-on, saving me time and effort. The platform's commitment to quality is evident in the array of top-notch job listings, covering a spectrum of industries. The streamlined application process, coupled with helpful features like resume uploads, made applying for jobs a breeze. What sets [Job Giving Website] apart is not just its efficiency but also the wealth of resources provided for career growth and skill enhancement. If you're serious about finding your dream job, look no further—[Job Giving Website] is the answer!"]
];

function next(){
    if(index>3){
        index=0;
    }
    document.querySelector(".x1").textContent = data[index][0];
    document.querySelector(".x2").textContent = data[index][1];
    document.querySelector(".rbott").textContent = data[index][2];
    document.querySelector(".people").style.backgroundImage = `url("./images/p${index}.jpg")`;
    index++;
}

function prev(){
    if(index<0){
        index=3;
    }
    document.querySelector(".x1").textContent = data[index][0];
    document.querySelector(".x2").textContent = data[index][1];
    document.querySelector(".rbott").textContent = data[index][2];
    document.querySelector(".people").style.backgroundImage = `url("./images/p${index}.jpg")`;
    index--;
}

















const initialJobs = [
    { title: "Web Developer", description: "Front-end and back-end development", category: "IT" },
    { title: "Graphic Designer", description: "Create visually appealing designs", category: "Design" },
];

function displayJobs(jobs) {
    const jobsContainer = document.getElementById("jobs");
    jobsContainer.innerHTML = "";

    for (const job of jobs) {
        const jobCard = document.createElement("div");
        jobCard.classList.add("jobCard");

        const title = document.createElement("h3");
        title.textContent = job.title;

        const description = document.createElement("p");
        description.textContent = job.description;

        const category = document.createElement("p");
        category.textContent = `Category: ${job.category}`;

        jobCard.appendChild(title);
        jobCard.appendChild(description);
        jobCard.appendChild(category);

        jobsContainer.appendChild(jobCard);
    }
}

//publish a new job
function publishJob() {
    const jobTitle = document.getElementById("jobTitle").value;
    const jobDescription = document.getElementById("jobDescription").value;
    const jobCategory = document.getElementById("jobCategory").value;

    if (jobTitle && jobDescription && jobCategory) {
        const newJob = { title: jobTitle, description: jobDescription, category: jobCategory };
        initialJobs.push(newJob);
        displayJobs(initialJobs);

        // Clear form fields
        document.getElementById("jobTitle").value = "";
        document.getElementById("jobDescription").value = "";
        document.getElementById("jobCategory").value = "";
    } else {
        alert("Please fill in all the fields.");
    }
}


displayJobs(initialJobs);

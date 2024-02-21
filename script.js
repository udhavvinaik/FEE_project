console.log("hi");
let index =0;
let data = [
    ["Udhav vinaik","Google","Cutting through the traditional application process, Linkedin allowed me to directly connect with hiring managers and recruiters, increasing my visibility and chances."],
    ["Ujwal Sharma","Amazon","The platform's vibrant professional community opened doors to valuable connections and insights, ultimately leading me to the right opportunity."],
    ["Abhay","Flipkart","Thanks to Linkedin's placement services, I transitioned seamlessly into a new career chapter, exceeding my expectations and achieving my professional goals."],
    ["No name","Facebook","Linkedin gave me the tools and network to confidently navigate the job market, ultimately landing a fulfilling position at a company I truly admire."]
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



// Function to search jobs
function searchJobs() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredJobs = initialJobs.filter(
        job =>
            job.title.toLowerCase().includes(searchInput) ||
            job.description.toLowerCase().includes(searchInput) ||
            job.category.toLowerCase().includes(searchInput)
    );
    displayJobs(filteredJobs);
}



// filter jobs by category
function filterByCategory() {
    const selectedCategory = document.getElementById("categoryFilter").value.toLowerCase();
    const filteredJobs = selectedCategory
        ? initialJobs.filter(job => job.category.toLowerCase() === selectedCategory)
        : initialJobs;
    displayJobs(filteredJobs);
}

// Initial display of jobs
displayJobs(initialJobs);

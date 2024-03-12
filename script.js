console.log("hi");
let ccp = " ";
flag =0;
let index =1;
let data = [
    ["Udhav vinaik","Google"," Linkedin is a game-changer! The intuitive interface, personalized job recommendations, and vast array of quality listings make job hunting a breeze. Seamless application processes and excellent customer support seal the deal. Highly recommend for anyone serious about their career. This is a excellent job giving website for sure."],
    ["Ujwal Sharma","Amazon","Linkedin has revolutionized my job search journey. The user-friendly platform, coupled with a sophisticated algorithm, delivered tailored job recommendations that perfectly matched my skills. The abundance of high-quality job listings from diverse industries made it a one-stop-shop for opportunities. Applying for positions became a breeze with integrated features like resume upload and cover letter creation. What sets this platform apart is its commitment to user satisfaction, evident in the prompt and helpful customer support. Linkedin not only simplifies the job hunt but also empowers career growth through valuable resources. A must-try for anyone serious about finding their dream job!"],
    ["Abhay","Flipkart","Linkedin has been a game-changer in my job search. The platform's intuitive design and powerful search filters made finding relevant opportunities a breeze. What impressed me the most was the personalized touch in job recommendations, aligning seamlessly with my career goals. The platform's commitment to user experience extends to a smooth application process and a treasure trove of resources for skill development. The diverse range of job listings from reputable companies adds to the overall appeal. I'm truly grateful for linkedin—it's not just a job portal; it's a partner in shaping careers!"],
    ["Abhay","Facebook","I stumbled upon Linkedin and it has transformed my job search into a remarkable experience. The user interface is incredibly intuitive, and the personalized job suggestions were spot-on, saving me time and effort. The platform's commitment to quality is evident in the array of top-notch job listings, covering a spectrum of industries. The streamlined application process, coupled with helpful features like resume uploads, made applying for jobs a breeze. What sets this Website apart is not just its efficiency but also the wealth of resources provided for career growth and skill enhancement. If you're serious about finding your dream job, look no further—[Job Giving Website] is the answer!"]
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
    { 
        title: "Web Developer",
        description: "Front-end and back-end development",
        category: "IT",
        company: "Amazon",
        position: "Software Engineer",
        location: "Delhi",
        salary: "80,000",
        mode: "Online"
    },
    { 
        title: "UX Designer",
        description: "User experience design for web applications",
        category: "Design",
        company: "Google",
        position: "UX/UI Designer",
        location: "Bangalore",
        salary: "90,000",
        mode: "Online"
    },
    { 
        title: "Marketing Specialist",
        description: "Developing and implementing marketing strategies",
        category: "Marketing",
        company: "Microsoft",
        position: "Marketing Specialist",
        location: "Hyderabad",
        salary: "85,000",
        mode: "Offline"
    },
    { 
        title: "HR Manager",
        description: "Managing human resources and employee relations",
        category: "HR",
        company: "Facebook",
        position: "HR Manager",
        location: "Mumbai",
        salary: "95,000",
        mode: "Offline"
    },
    { 
        title: "Data Scientist",
        description: "Analyzing and interpreting complex data sets",
        category: "IT",
        company: "IBM",
        position: "Data Scientist",
        location: "Pune",
        salary: "100,000",
        mode: "Online"
    },
    { 
        title: "Financial Analyst",
        description: "Analyzing financial data and trends",
        category: "Finance",
        company: "Goldman Sachs",
        position: "Financial Analyst",
        location: "Mumbai",
        salary: "110,000",
        mode: "Offline"
    },
    { 
        title: "Content Writer",
        description: "Creating engaging and informative content",
        category: "Content",
        company: "LinkedIn",
        position: "Content Writer",
        location: "Bangalore",
        salary: "75,000",
        mode: "Online"
    },
    { 
        title: "Software Engineer",
        description: "Developing and testing software applications",
        category: "IT",
        company: "Microsoft",
        position: "Software Engineer",
        location: "Hyderabad",
        salary: "90,000",
        mode: "Offline"
    },
    { 
        title: "Graphic Designer",
        description: "Creating visual concepts and designs",
        category: "Design",
        company: "Adobe",
        position: "Graphic Designer",
        location: "Noida",
        salary: "85,000",
        mode: "Online"
    },
    { 
        title: "Sales Manager",
        description: "Leading and managing sales teams",
        category: "Marketing",
        company: "Salesforce",
        position: "Sales Manager",
        location: "Gurgaon",
        salary: "120,000",
        mode: "Offline"
    },
];


function displayJobs(jobs) {
    const jobsContainer = document.getElementById("jobs");
    jobsContainer.innerHTML = "";

    for (const job of jobs) {
        const jobCard = document.createElement("div");
        jobCard.classList.add("jobCard");

        const title = document.createElement("h3");
        title.textContent = job.title + " ("+ job.company+")";

        const description = document.createElement("p");
        description.textContent = job.description;

        const category = document.createElement("p");
        category.textContent = `Category: ${job.category}`;

        const company = document.createElement("p");
        company.textContent = `Company: ${job.company}`;

        const position = document.createElement("p");
        position.textContent = `Position: ${job.position}`;

        const location = document.createElement("p");
        location.textContent = `Location: ${job.location}`;

        const salary = document.createElement("p");
        salary.textContent = `Salary: ₹${job.salary}`;

        const mode = document.createElement("p");
        mode.textContent = `Mode: ${job.mode}`;

        const applyButton = document.createElement("button");
        applyButton.textContent = `Apply for the post of ${job.title}`;
        applyButton.id = "applied";
        applyButton.addEventListener("click", function() {
            if(flag==1){
                alert(`successfully applied for the post of ${job.position} at ${job.company} `);
            }
            else{
                alert('kindly login first');
                document.addEventListener("DOMContentLoaded", function () {
                    document.getElementById("openForm").click();
                });
            }
        });
        

        jobCard.appendChild(title);
        jobCard.appendChild(description);
        jobCard.appendChild(company);
        jobCard.appendChild(category);
        jobCard.appendChild(position);
        jobCard.appendChild(location);
        jobCard.appendChild(salary);
        jobCard.appendChild(mode);
        jobCard.appendChild(applyButton);

        jobsContainer.appendChild(jobCard);
    }
}



//publish a new job
function publishJob() {
    const jobTitle = document.getElementById("jobTitle").value;
    const jobDescription = document.getElementById("jobDescription").value;
    const jobCategory = document.getElementById("jobCategory").value;
    const jobPosition = document.getElementById("jobPosition").value;
    const jobLocation = document.getElementById("jobLocation").value;
    const jobSalary = document.getElementById("jobSalary").value;
    const jobMode = document.getElementById("jobMode").value;

    const cpn = ccp.charAt(0).toUpperCase() + ccp.slice(1);
    if (jobTitle && jobDescription && jobCategory && companyName && jobPosition && jobLocation && jobSalary && jobMode) {
        const newJob = {
            title: jobTitle,
            description: jobDescription,
            category: jobCategory,
            company: cpn,
            position: jobPosition,
            location: jobLocation,
            salary: jobSalary,
            mode: jobMode
        };
        initialJobs.unshift(newJob);
        displayJobs(initialJobs);

        // Clear form fields
        document.getElementById("jobTitle").value = "";
        document.getElementById("jobDescription").value = "";
        document.getElementById("jobCategory").value = "";
        document.getElementById("companyName").value = "";
        document.getElementById("jobPosition").value = "";
        document.getElementById("jobLocation").value = "";
        document.getElementById("jobSalary").value = "";
        document.getElementById("jobMode").value = "";
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



displayJobs(initialJobs);




document.getElementById("openForm").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "block";
});

document.getElementById("closeForm").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "none";
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
    document.getElementById("popupContainer").style.display = "none";
    flag = 1;
});







    document.addEventListener("DOMContentLoaded", function () {
        const users = {
            recruiter: { name: "publish", email: "publish@gmail.com", password: "123", type: "recruiter" },
            jobSeeker: { name: "seek", email: "seek@gmail.com", password: "123", type: "jobseeker" }
        };

        const loginForm = document.getElementById("signupForm");
        const publishJobSection = document.getElementById("publ");
        const companyNameInput = document.getElementById("companyName");

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Check if the entered credentials match a user
            const user = Object.values(users).find(u => u.email === email && u.password === password);

            if (user) {
                // User logged in successfully
                alert(`Welcome, ${user.name}! You are logged in as a ${user.type}.`);

                // Show/hide "Publish Job" section based on user type
                if (user.type === "recruiter") {
                    document.getElementById("jobFormContainer").style.display = "block";
                    document.getElementById("hdd").style.display = "block";
                }
                else{
                    document.getElementById("jobFormContainer").style.display = "none";
                    document.getElementById("hdd").style.display = "none";
                }

                // If the user is a recruiter
                if (user.type === "recruiter") {
                    const company = prompt("Please enter your company name:");
                    if (company) {
                        companyNameInput.value = company;
                        ccp = companyNameInput.value;
                    }
                }
                const openFormButton = document.getElementById("openForm");
                const nn = user.name.charAt(0).toUpperCase() + user.name.slice(1);
                openFormButton.innerHTML = `<i class="fa-solid fa-user" style="margin-top: 2%;"></i> ${nn}`;
            } else {
                // Invalid credentials
                alert("Invalid email or password. Please try again.");
            }
        });
    });




    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("openForm").click();
    });
    


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
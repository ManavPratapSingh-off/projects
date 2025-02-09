const job_title_input = document.getElementById("jobTitle");
const company_name_input = document.getElementById("companyName");
const app_date_input = document.getElementById("appliedDate");
const app_status_input = document.getElementById("status");
const job_form = document.getElementById("jobForm");
//till here are all the inputs to be displayed

const applied_jobs_arr = [];

const statusIcons = {
    "Applied": '<i class="fas fa-file-alt"></i> Applied',
    "Interviewing": '<i class="fas fa-comments"></i> Interviewing',
    "Offer-Received": '<i class="fas fa-check-circle"></i> Hired',
    "Rejected": '<i class="fas fa-times-circle"></i> Rejected'
};


function upload_in_storage () {
    const job_title = job_title_input.value;
    const company_name = company_name_input.value;
    const app_date = app_date_input.value;
    const app_status = app_status_input.value;
    let ob = {
        "Job Title" : job_title,
        "Company Name" : company_name,
        "Application Date" : app_date,
        "Application Status" : app_status
    };

    applied_jobs_arr.push (ob);

    const key = `applied Jobs`;
           
    const stored_obj = JSON.stringify(applied_jobs_arr);
  
    localStorage.setItem (key, stored_obj);

    job_title_input.value = "";
    company_name_input.value = "";
    app_date_input.value = "";
    app_status_input.value = "";

}

let message_flag = false;
const modal_overlay = document.getElementById ("modalOverlay");
const modal = modal_overlay.querySelector(".modal");

function diplay_message () {
    message_flag = true;
    modal_overlay.classList.add("active");
}

function close_popup () {
    if (message_flag) {
        
        modal_overlay.classList.remove("active");
    }
    message_flag = false;
}

const template = document.getElementById ("row-template");

// let row_template = template.content.cloneNode (true);
// console.log(row_template);

function make_table () {
    //get data from local storage and form rows
    let table_body = document.querySelector ("tbody");
    table_body.innerHTML = "";
    let tmp_job_arr = JSON.parse(localStorage.getItem("applied Jobs"));
    // console.log (tmp_job_arr);
    tmp_job_arr.forEach(application => {
        let tmp_row = template.content.cloneNode (true);
        
        let tmp_title = tmp_row.querySelector (".tmpJobTitle");
        let tmp_company = tmp_row.querySelector (".tmpCompanyName");
        let tmp_date = tmp_row.querySelector (".tmpAppDate");
        let tmp_status = tmp_row.querySelector (".tmpAppStatus");


        tmp_title.innerText = application["Job Title"];
        tmp_company.innerText = application["Company Name"];
        tmp_date.innerText = application["Application Date"];
        tmp_status.innerHTML = statusIcons [application["Application Status"]];
        tmp_status.classList.add(application["Application Status"]);

        console.log (tmp_status.classList);

        table_body.appendChild (tmp_row);


    });

}


function upon_add_application (event) {
    event.preventDefault();

    upload_in_storage();

    diplay_message ();

    make_table ();


}

job_form.addEventListener ("submit", upon_add_application);

window.addEventListener ("click", function (e) {
    if (message_flag) {
        close_popup();
    }
})

window.addEventListener ("load", make_table);











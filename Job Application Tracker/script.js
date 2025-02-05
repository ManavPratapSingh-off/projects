const job_title_input = document.getElementById("jobTitle");
const company_name_input = document.getElementById("companyName");
const app_date_input = document.getElementById("appliedDate");
const app_status_input = document.getElementById("status");
const job_form = document.getElementById("jobForm");
//till here are all the inputs to be displayed


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

    const key = `${job_title}For${company_name}`;
           
    const stored_obj = JSON.stringify(ob);
  
    localStorage.setItem (key, stored_obj);

    job_title_input.value = "";
    company_name_input.value = "";
    app_date_input.value = "";
    app_status_input.value = "";

}

function make_table () {
    //get data from local storage and form rows

}

function upon_add_application (event) {
    event.preventDefault();

    upload_in_storage();


}

job_form.addEventListener ("submit", upon_add_application);











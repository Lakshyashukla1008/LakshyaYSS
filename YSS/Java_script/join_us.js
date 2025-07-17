const form = document.getElementById("form");

const elements = {
    Fname: document.getElementById("name"),
    Lname: document.getElementById("Lname"),
    HousenName: document.getElementById("House"),
    city: document.getElementById("city"),
    Mobile_number: document.getElementById("number")
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    localStorage.removeItem("First name ");
    localStorage.removeItem("Last Name ");
    localStorage.removeItem("Mobail number");

    const values = {
        Fname: elements.Fname.value,
        Lname: elements.Lname.value,
        HousenName: elements.HousenName.value,
        city: elements.city.value,
        Mobile_number: elements.Mobile_number.value
    };

    localStorage.setItem("FirstName", values.Fname);
    localStorage.setItem("LastName", values.Lname);
    localStorage.setItem("House", values.HousenName);
    localStorage.setItem("City", values.city);
    localStorage.setItem("MobileNumber", values.Mobile_number);

    window.location.href = "/body/Complane.html";
})

// "c:/Users/PC/Desktop/YSS/body/Complane.html"
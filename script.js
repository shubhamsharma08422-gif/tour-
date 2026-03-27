const API_URL = "https://your-app.up.railway.app"; // Still placeholder!

// MENU
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// SEARCH
function searchDestination() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    if (query.includes("ayodhya")) window.location.href = "ayodhya.html";
    else if (query.includes("varanasi")) window.location.href = "varanasi.html";
    else if (query.includes("chitrakoot")) window.location.href = "chitrakoot.html";
    else alert("Not found");
}

// API
async function apiRequest(endpoint, method = "GET", body) {
    const token = localStorage.getItem("token");

    const res = await fetch(API_URL + endpoint, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        },
        body: body ? JSON.stringify(body) : null
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.detail || "Error");

    return data;
}

// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const res = await apiRequest("/login", "POST", { email, password });

        localStorage.setItem("token", res.token);

        document.getElementById("message").innerText = "Success";

        window.location.href = "booking.html";
    } catch (err) {
        document.getElementById("message").innerText = err.message;
    }
});

// BOOKING
document.getElementById("bookingForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    try {
        await apiRequest("/booking", "POST", {
            name, phone, destination, date, guests
        });

        const msg = `Booking:\n${name}\n${destination}\n${date}`;
        window.open(`https://wa.me/917607745628?text=${encodeURIComponent(msg)}`);

        alert("Booked!");
    } catch {
        alert("Error");
    }
});

// AUTO DESTINATION
const params = new URLSearchParams(window.location.search);
const dest = params.get("destination");
if (dest) {
    document.getElementById("destination").value = dest;
}

// AUTH CHECK
if (window.location.pathname.includes("booking.html")) {
    if (!localStorage.getItem("token")) {
        window.location.href = "login.html";
    }
}

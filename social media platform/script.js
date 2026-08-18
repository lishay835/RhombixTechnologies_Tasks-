/* =========================================================
   MYBOOK LIBRARY
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   1. BOOK DATA
========================================================= */

const books = [

    /* ================= FICTION ================= */

    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        year: 1988,
        description: "A young shepherd follows his dreams and discovers the importance of listening to his heart.",
        image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
        status: "available"
    },

    {
        id: 2,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        category: "Fiction",
        year: 2003,
        description: "A powerful story of friendship, family, guilt and redemption set against the history of Afghanistan.",
        image: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg",
        status: "available"
    },

    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        year: 1925,
        description: "A classic story about wealth, dreams, love and the American society of the 1920s.",
        image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        status: "available"
    },

    {
        id: 4,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        year: 1960,
        description: "A coming-of-age story exploring justice, compassion and social inequality.",
        image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
        status: "available"
    },

    {
        id: 5,
        title: "Little Women",
        author: "Louisa May Alcott",
        category: "Fiction",
        year: 1868,
        description: "The story of four sisters growing up together while learning about family, dreams and independence.",
        image: "https://covers.openlibrary.org/b/isbn/9780147514011-L.jpg",
        status: "available"
    },

    {
        id: 6,
        title: "The Book Thief",
        author: "Markus Zusak",
        category: "Fiction",
        year: 2005,
        description: "A young girl discovers the power of words while living in Germany during World War II.",
        image: "https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg",
        status: "available"
    },


    /* ================= SCIENCE ================= */

    {
        id: 7,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        year: 1988,
        description: "An accessible exploration of the universe, black holes, time and the origins of space.",
        image: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
        status: "available"
    },

    {
        id: 8,
        title: "Cosmos",
        author: "Carl Sagan",
        category: "Science",
        year: 1980,
        description: "A fascinating journey through space, science, history and humanity's place in the universe.",
        image: "https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg",
        status: "available"
    },

    {
        id: 9,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        category: "Science",
        year: 1976,
        description: "An influential introduction to evolutionary biology and the role of genes in natural selection.",
        image: "https://covers.openlibrary.org/b/isbn/9780198788607-L.jpg",
        status: "available"
    },

    {
        id: 10,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "Science",
        year: 2011,
        description: "A broad look at human history and how Homo sapiens came to dominate the world.",
        image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
        status: "available"
    },

    {
        id: 11,
        title: "The Gene",
        author: "Siddhartha Mukherjee",
        category: "Science",
        year: 2016,
        description: "A history of genetics and an exploration of how genes shape human life.",
        image: "https://covers.openlibrary.org/b/isbn/9781476733500-L.jpg",
        status: "available"
    },

    {
        id: 12,
        title: "Astrophysics for People in a Hurry",
        author: "Neil deGrasse Tyson",
        category: "Science",
        year: 2017,
        description: "A short and engaging introduction to major ideas in astrophysics.",
        image: "https://covers.openlibrary.org/b/isbn/9780393609394-L.jpg",
        status: "available"
    },


    /* ================= HISTORY ================= */

    {
        id: 13,
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        category: "History",
        year: 1997,
        description: "An exploration of geography, environment and their influence on human societies.",
        image: "https://covers.openlibrary.org/b/isbn/9780393317558-L.jpg",
        status: "available"
    },

    {
        id: 14,
        title: "The Silk Roads",
        author: "Peter Frankopan",
        category: "History",
        year: 2015,
        description: "A history of the world centered around the interconnected civilizations of the Silk Roads.",
        image: "https://covers.openlibrary.org/b/isbn/9781101912379-L.jpg",
        status: "available"
    },

    {
        id: 15,
        title: "1776",
        author: "David McCullough",
        category: "History",
        year: 2005,
        description: "A detailed account of the events surrounding the American Revolution in 1776.",
        image: "https://covers.openlibrary.org/b/isbn/9780743226721-L.jpg",
        status: "available"
    },

    {
        id: 16,
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        category: "History",
        year: 1947,
        description: "The diary of a young girl documenting her life and thoughts during wartime.",
        image: "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg",
        status: "available"
    },

    {
        id: 17,
        title: "A People's History",
        author: "Howard Zinn",
        category: "History",
        year: 1980,
        description: "A history of the United States presented through the experiences of ordinary people.",
        image: "https://covers.openlibrary.org/b/isbn/9780062397348-L.jpg",
        status: "available"
    },

    {
        id: 18,
        title: "The Wright Brothers",
        author: "David McCullough",
        category: "History",
        year: 2015,
        description: "The story of the Wright brothers and their journey toward powered flight.",
        image: "https://covers.openlibrary.org/b/isbn/9781476728759-L.jpg",
        status: "available"
    },


    /* ================= TECHNOLOGY ================= */

    {
        id: 19,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Technology",
        year: 2008,
        description: "Practical principles and techniques for writing readable and maintainable software.",
        image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
        status: "available"
    },

    {
        id: 20,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        category: "Technology",
        year: 1999,
        description: "A practical guide to becoming a better and more effective software developer.",
        image: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
        status: "available"
    },

    {
        id: 21,
        title: "Don't Make Me Think",
        author: "Steve Krug",
        category: "Technology",
        year: 2000,
        description: "A practical guide to usability and creating websites that are easy to navigate.",
        image: "https://covers.openlibrary.org/b/isbn/9780321965516-L.jpg",
        status: "available"
    },

    {
        id: 22,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        category: "Technology",
        year: 2015,
        description: "A detailed introduction to the deeper concepts and mechanics of JavaScript.",
        image: "https://covers.openlibrary.org/b/isbn/9781491904244-L.jpg",
        status: "available"
    },

    {
        id: 23,
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        category: "Technology",
        year: 2017,
        description: "An exploration of modern systems for storing, processing and managing data.",
        image: "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg",
        status: "available"
    },

    {
        id: 24,
        title: "The Clean Coder",
        author: "Robert C. Martin",
        category: "Technology",
        year: 2011,
        description: "Professional advice and practices for becoming a responsible software developer.",
        image: "https://covers.openlibrary.org/b/isbn/9780137081073-L.jpg",
        status: "available"
    },


    /* ================= MYSTERY ================= */

    {
        id: 25,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        category: "Mystery",
        year: 2005,
        description: "A journalist and a mysterious hacker investigate a decades-old disappearance.",
        image: "https://covers.openlibrary.org/b/isbn/9780307454546-L.jpg",
        status: "available"
    },

    {
        id: 26,
        title: "Gone Girl",
        author: "Gillian Flynn",
        category: "Mystery",
        year: 2012,
        description: "A psychological mystery surrounding a disappearance and the secrets within a marriage.",
        image: "https://covers.openlibrary.org/b/isbn/9780553418361-L.jpg",
        status: "available"
    },

    {
        id: 27,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        category: "Mystery",
        year: 2019,
        description: "A famous painter stops speaking after a shocking event, leaving a therapist determined to uncover why.",
        image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
        status: "available"
    },

    {
        id: 28,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        category: "Mystery",
        year: 2003,
        description: "A mystery involving hidden symbols, historical secrets and a dangerous conspiracy.",
        image: "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg",
        status: "available"
    },

    {
        id: 29,
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        category: "Mystery",
        year: 1934,
        description: "Detective Hercule Poirot investigates a murder aboard a luxury train.",
        image: "https://covers.openlibrary.org/b/isbn/9780062073501-L.jpg",
        status: "available"
    },

    {
        id: 30,
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        category: "Mystery",
        year: 1902,
        description: "Sherlock Holmes investigates a mysterious legend surrounding the Baskerville family.",
        image: "https://covers.openlibrary.org/b/isbn/9780451528018-L.jpg",
        status: "available"
    },


    /* ================= EDUCATION ================= */

    {
        id: 31,
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        category: "Education",
        year: 1936,
        description: "Classic advice about communication, relationships and interacting effectively with others.",
        image: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg",
        status: "available"
    },

    {
        id: 32,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        category: "Education",
        year: 1989,
        description: "A framework for developing effective habits and improving personal and professional life.",
        image: "https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg",
        status: "available"
    },

    {
        id: 33,
        title: "Mindset",
        author: "Carol S. Dweck",
        category: "Education",
        year: 2006,
        description: "An exploration of how different mindsets influence learning, achievement and personal growth.",
        image: "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg",
        status: "available"
    },

    {
        id: 34,
        title: "Make It Stick",
        author: "Peter C. Brown",
        category: "Education",
        year: 2014,
        description: "Evidence-based strategies for learning more effectively and remembering information longer.",
        image: "https://covers.openlibrary.org/b/isbn/9780674729018-L.jpg",
        status: "available"
    },

    {
        id: 35,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        category: "Education",
        year: 2012,
        description: "An exploration of how habits work and how they can be changed.",
        image: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",
        status: "available"
    },

    {
        id: 36,
        title: "Deep Work",
        author: "Cal Newport",
        category: "Education",
        year: 2016,
        description: "Strategies for improving concentration and doing meaningful work without distractions.",
        image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
        status: "available"
    },


    /* ================= ROMANCE ================= */

    {
        id: 37,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Romance",
        year: 1813,
        description: "A classic romance exploring love, social expectations and misunderstandings.",
        image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
        status: "available"
    },

    {
        id: 38,
        title: "Me Before You",
        author: "Jojo Moyes",
        category: "Romance",
        year: 2012,
        description: "A story about an unexpected relationship that changes two people's lives.",
        image: "https://covers.openlibrary.org/b/isbn/9780143124542-L.jpg",
        status: "available"
    },

    {
        id: 39,
        title: "The Notebook",
        author: "Nicholas Sparks",
        category: "Romance",
        year: 1996,
        description: "A heartfelt story about enduring love and memories.",
        image: "https://covers.openlibrary.org/b/isbn/9780446695236-L.jpg",
        status: "available"
    },

    {
        id: 40,
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        category: "Romance",
        year: 1847,
        description: "A classic novel about independence, love and personal identity.",
        image: "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg",
        status: "available"
    },

    {
        id: 41,
        title: "The Fault in Our Stars",
        author: "John Green",
        category: "Romance",
        year: 2012,
        description: "A story of young people navigating friendship, love and life's challenges.",
        image: "https://covers.openlibrary.org/b/isbn/9780525478812-L.jpg",
        status: "available"
    },

    {
        id: 42,
        title: "One Day",
        author: "David Nicholls",
        category: "Romance",
        year: 2009,
        description: "A relationship is revisited over many years as two people navigate life and love.",
        image: "https://covers.openlibrary.org/b/isbn/9780307474711-L.jpg",
        status: "available"
    },


    /* ================= SELF DEVELOPMENT ================= */

    {
        id: 43,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Development",
        year: 2018,
        description: "A practical guide to building good habits, breaking bad ones and making small improvements.",
        image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
        status: "available"
    },

    {
        id: 44,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "Self Development",
        year: 1937,
        description: "Classic principles about mindset, goals and personal achievement.",
        image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
        status: "available"
    },

    {
        id: 45,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        category: "Self Development",
        year: 1997,
        description: "A guide to mindfulness and focusing attention on the present moment.",
        image: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
        status: "available"
    },

    {
        id: 46,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        category: "Self Development",
        year: 2016,
        description: "A direct perspective on values, responsibility and dealing with life's challenges.",
        image: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
        status: "available"
    },

    {
        id: 47,
        title: "Can't Hurt Me",
        author: "David Goggins",
        category: "Self Development",
        year: 2018,
        description: "A memoir focused on resilience, discipline and overcoming personal obstacles.",
        image: "https://covers.openlibrary.org/b/isbn/9781544512280-L.jpg",
        status: "available"
    },

    {
        id: 48,
        title: "The 5 AM Club",
        author: "Robin Sharma",
        category: "Self Development",
        year: 2018,
        description: "A motivational approach to building routines and using mornings effectively.",
        image: "https://covers.openlibrary.org/b/isbn/9781443456623-L.jpg",
        status: "available"
    }

];


/* =========================================================
   2. BORROW HISTORY
========================================================= */

let borrowHistory = [

    {
        id: 101,
        borrower: "Ali Khan",
        bookId: 1,
        borrowDate: "2026-08-02",
        returnDate: "2026-08-10",
        status: "returned"
    },

    {
        id: 102,
        borrower: "Sara Ahmed",
        bookId: 43,
        borrowDate: "2026-08-05",
        returnDate: "",
        status: "borrowed"
    },

    {
        id: 103,
        borrower: "Hamza Malik",
        bookId: 3,
        borrowDate: "2026-08-07",
        returnDate: "2026-08-14",
        status: "returned"
    },

    {
        id: 104,
        borrower: "Hira Noor",
        bookId: 19,
        borrowDate: "2026-08-09",
        returnDate: "",
        status: "pending"
    },

    {
        id: 105,
        borrower: "Usman Ali",
        bookId: 2,
        borrowDate: "2026-08-11",
        returnDate: "",
        status: "borrowed"
    },

    {
        id: 106,
        borrower: "Ayesha Raza",
        bookId: 7,
        borrowDate: "2026-08-13",
        returnDate: "",
        status: "pending"
    }

];


/* =========================================================
   3. ELEMENTS
========================================================= */

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll(".page-section");

const featuredBooksContainer = document.getElementById("featuredBooks");

const allBooksGrid = document.getElementById("allBooksGrid");

const bookSearch = document.getElementById("bookSearch");
const categoryFilter = document.getElementById("categoryFilter");
const statusFilter = document.getElementById("statusFilter");

const bookModal = document.getElementById("bookModal");
const closeBookModal = document.getElementById("closeBookModal");

const modalBookImage = document.getElementById("modalBookImage");
const modalBookCategory = document.getElementById("modalBookCategory");
const modalBookTitle = document.getElementById("modalBookTitle");
const modalBookAuthor = document.getElementById("modalBookAuthor");
const modalBookYear = document.getElementById("modalBookYear");
const modalBookStatus = document.getElementById("modalBookStatus");
const modalBookDescription = document.getElementById("modalBookDescription");
const modalBorrowBtn = document.getElementById("modalBorrowBtn");

const addBookForm = document.getElementById("addBookForm");
const contactForm = document.getElementById("contactForm");

const historyTableBody = document.getElementById("historyTableBody");
const historySearch = document.getElementById("historySearch");
const historyFilter = document.getElementById("historyFilter");

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
const closeToast = document.getElementById("closeToast");


let selectedBookId = null;


/* =========================================================
   4. INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderFeaturedBooks();

    renderCategoryBooks();

    renderAllBooks();

    renderBorrowHistory();

    updateStatistics();

});


/* =========================================================
   5. SIDEBAR / PAGE NAVIGATION
========================================================= */

function showSection(sectionId) {

    pageSections.forEach(section => {

        section.classList.remove("active-section");

    });


    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {

        selectedSection.classList.add("active-section");

    }


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.dataset.section === sectionId) {

            link.classList.add("active");

        }

    });


    closeMobileSidebar();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* Sidebar navigation */

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const sectionId = link.dataset.section;

        showSection(sectionId);

    });

});


/* Buttons that target sections */

document.querySelectorAll("[data-target]").forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.target;

        showSection(target);

    });

});


/* =========================================================
   6. MOBILE SIDEBAR
========================================================= */

function openMobileSidebar() {

    sidebar.classList.add("open");

    sidebarOverlay.classList.add("active");

}


function closeMobileSidebar() {

    sidebar.classList.remove("open");

    sidebarOverlay.classList.remove("active");

}


if (openSidebar) {

    openSidebar.addEventListener("click", openMobileSidebar);

}


if (closeSidebar) {

    closeSidebar.addEventListener("click", closeMobileSidebar);

}


if (sidebarOverlay) {

    sidebarOverlay.addEventListener("click", closeMobileSidebar);

}


/* =========================================================
   7. BOOK CARD HTML
========================================================= */

function createBookCard(book) {

    const card = document.createElement("article");

    card.className = "book-card";

    card.dataset.bookId = book.id;


    card.innerHTML = `

        <div class="book-cover">

            <img
                src="${book.image}"
                alt="${escapeHTML(book.title)}"
                loading="lazy"
            >

            <span class="book-status ${book.status}">
                ${book.status === "available" ? "Available" : "Borrowed"}
            </span>

        </div>


        <div class="book-info">

            <h3>${escapeHTML(book.title)}</h3>

            <p>${escapeHTML(book.author)}</p>

            <span class="book-category">
                ${escapeHTML(book.category)}
            </span>

        </div>

    `;


    card.addEventListener("click", () => {

        openBookModal(book.id);

    });


    return card;

}


/* =========================================================
   8. FEATURED BOOKS
========================================================= */

function renderFeaturedBooks() {

    if (!featuredBooksContainer) return;


    featuredBooksContainer.innerHTML = "";


    const featured = books.slice(0, 6);


    featured.forEach(book => {

        featuredBooksContainer.appendChild(
            createBookCard(book)
        );

    });

}


/* =========================================================
   9. CATEGORY BOOK ROWS
========================================================= */

function renderCategoryBooks() {

    const categoryContainers =
        document.querySelectorAll("[data-books]");


    categoryContainers.forEach(container => {

        const category = container.dataset.books;

        container.innerHTML = "";


        const categoryBooks = books.filter(
            book => book.category === category
        );


        categoryBooks.forEach(book => {

            container.appendChild(
                createBookCard(book)
            );

        });

    });

}


/* =========================================================
   10. ALL BOOKS
========================================================= */

function renderAllBooks() {

    if (!allBooksGrid) return;


    const searchValue =
        bookSearch
            ? bookSearch.value.trim().toLowerCase()
            : "";


    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    const selectedStatus =
        statusFilter
            ? statusFilter.value
            : "all";


    let filteredBooks = books.filter(book => {

        const matchesSearch =
            book.title.toLowerCase().includes(searchValue) ||
            book.author.toLowerCase().includes(searchValue);


        const matchesCategory =
            selectedCategory === "all" ||
            book.category === selectedCategory;


        const matchesStatus =
            selectedStatus === "all" ||
            book.status === selectedStatus;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
        );

    });


    allBooksGrid.innerHTML = "";


    if (filteredBooks.length === 0) {

        allBooksGrid.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-book-open"></i>

                <h3>No Books Found</h3>

                <p>
                    Try changing your search or filter.
                </p>

            </div>

        `;

        return;

    }


    filteredBooks.forEach(book => {

        allBooksGrid.appendChild(
            createBookCard(book)
        );

    });

}


/* Search */

if (bookSearch) {

    bookSearch.addEventListener("input", renderAllBooks);

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        renderAllBooks
    );

}


if (statusFilter) {

    statusFilter.addEventListener(
        "change",
        renderAllBooks
    );

}


/* =========================================================
   11. SEE ALL CATEGORY
========================================================= */

document.querySelectorAll(".see-all-btn").forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;


        showSection("my-books");


        if (categoryFilter) {

            categoryFilter.value =
                category === "all"
                    ? "all"
                    : category;

        }


        if (bookSearch) {

            bookSearch.value = "";

        }


        if (statusFilter) {

            statusFilter.value = "all";

        }


        renderAllBooks();

    });

});


/* =========================================================
   12. CATEGORY CARDS
========================================================= */

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;


        showSection("my-books");


        categoryFilter.value = category;

        bookSearch.value = "";

        statusFilter.value = "all";


        renderAllBooks();

    });

});


/* =========================================================
   13. BOOK DETAILS MODAL
========================================================= */

function openBookModal(bookId) {

    const book =
        books.find(item => item.id === Number(bookId));


    if (!book) return;


    selectedBookId = book.id;


    modalBookImage.src = book.image;

    modalBookImage.alt = book.title;

    modalBookCategory.textContent =
        book.category;

    modalBookTitle.textContent =
        book.title;

    modalBookAuthor.textContent =
        book.author;

    modalBookYear.textContent =
        book.year;

    modalBookStatus.textContent =
        book.status === "available"
            ? "Available"
            : "Borrowed";

    modalBookDescription.textContent =
        book.description;


    if (book.status === "available") {

        modalBorrowBtn.innerHTML = `
            <i class="fa-solid fa-bookmark"></i>
            Borrow Book
        `;

        modalBorrowBtn.disabled = false;

    } else {

        modalBorrowBtn.innerHTML = `
            <i class="fa-solid fa-rotate-left"></i>
            Return Book
        `;

        modalBorrowBtn.disabled = false;

    }


    bookModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeModal() {

    bookModal.classList.remove("active");

    document.body.style.overflow = "";

}


closeBookModal.addEventListener(
    "click",
    closeModal
);


bookModal.addEventListener("click", event => {

    if (event.target === bookModal) {

        closeModal();

    }

});


document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        bookModal.classList.contains("active")
    ) {

        closeModal();

    }

});


/* =========================================================
   14. BORROW / RETURN BOOK
========================================================= */

modalBorrowBtn.addEventListener("click", () => {

    if (!selectedBookId) return;


    const book =
        books.find(item => item.id === selectedBookId);


    if (!book) return;


    if (book.status === "available") {

        borrowBook(book);

    } else {

        returnBook(book);

    }

});


/* Borrow */

function borrowBook(book) {

    book.status = "borrowed";


    const today =
        new Date().toISOString().split("T")[0];


    const newRecord = {

        id: Date.now(),

        borrower: "Ayesha",

        bookId: book.id,

        borrowDate: today,

        returnDate: "",

        status: "borrowed"

    };


    borrowHistory.unshift(newRecord);


    updateAllBookDisplays();

    renderBorrowHistory();

    updateStatistics();


    closeModal();


    showToast(
        "Book Borrowed",
        `"${book.title}" has been added to your borrowing history.`
    );

}


/* Return */

function returnBook(book) {

    const record =
        borrowHistory.find(
            item =>
                item.bookId === book.id &&
                (
                    item.status === "borrowed" ||
                    item.status === "pending"
                )
        );


    book.status = "available";


    if (record) {

        record.status = "returned";

        record.returnDate =
            new Date().toISOString().split("T")[0];

    }


    updateAllBookDisplays();

    renderBorrowHistory();

    updateStatistics();


    closeModal();


    showToast(
        "Book Returned",
        `"${book.title}" has been marked as returned.`
    );

}


/* =========================================================
   15. UPDATE BOOK DISPLAYS
========================================================= */

function updateAllBookDisplays() {

    renderFeaturedBooks();

    renderCategoryBooks();

    renderAllBooks();

}


/* =========================================================
   16. BORROW HISTORY TABLE
========================================================= */

function renderBorrowHistory() {

    if (!historyTableBody) return;


    const searchValue =
        historySearch
            ? historySearch.value.trim().toLowerCase()
            : "";


    const selectedFilter =
        historyFilter
            ? historyFilter.value
            : "all";


    let records =
        borrowHistory.filter(record => {

            const book =
                books.find(
                    item => item.id === record.bookId
                );


            if (!book) return false;


            const matchesSearch =
                book.title
                    .toLowerCase()
                    .includes(searchValue) ||

                book.author
                    .toLowerCase()
                    .includes(searchValue) ||

                record.borrower
                    .toLowerCase()
                    .includes(searchValue);


            const matchesFilter =
                selectedFilter === "all" ||
                record.status === selectedFilter;


            return (
                matchesSearch &&
                matchesFilter
            );

        });


    historyTableBody.innerHTML = "";


    if (records.length === 0) {

        historyTableBody.innerHTML = `

            <tr>

                <td colspan="6" style="text-align:center;padding:30px;">

                    No borrowing records found.

                </td>

            </tr>

        `;

        updateHistoryStatistics();

        return;

    }


    records.forEach(record => {

        const book =
            books.find(
                item => item.id === record.bookId
            );


        if (!book) return;


        const row =
            document.createElement("tr");


        const statusClass =
            record.status === "returned"
                ? "returned"
                : "borrowed";


        const statusText =
            record.status === "returned"
                ? "Returned"
                : record.status === "pending"
                    ? "Pending"
                    : "Borrowed";


        row.innerHTML = `

            <td>
                <strong>
                    ${escapeHTML(book.title)}
                </strong>
            </td>

            <td>
                ${escapeHTML(book.author)}
            </td>

            <td>
                ${formatDate(record.borrowDate)}
            </td>

            <td>
                ${
                    record.returnDate
                        ? formatDate(record.returnDate)
                        : "—"
                }
            </td>

            <td>

                <span class="status-badge ${statusClass}">
                    ${statusText}
                </span>

            </td>

            <td>

                <button
                    class="table-action delete-history"
                    data-id="${record.id}"
                >
                    <i class="fa-regular fa-trash-can"></i>
                    Delete
                </button>

            </td>

        `;


        historyTableBody.appendChild(row);

    });


    updateHistoryStatistics();


    document
        .querySelectorAll(".delete-history")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    deleteHistoryRecord(
                        Number(button.dataset.id)
                    );

                }
            );

        });

}


/* =========================================================
   17. DELETE HISTORY RECORD
========================================================= */

function deleteHistoryRecord(recordId) {

    const record =
        borrowHistory.find(
            item => item.id === recordId
        );


    if (!record) return;


    const book =
        books.find(
            item => item.id === record.bookId
        );


    if (book && record.status !== "returned") {

        book.status = "available";

    }


    borrowHistory =
        borrowHistory.filter(
            item => item.id !== recordId
        );


    renderBorrowHistory();

    updateAllBookDisplays();

    updateStatistics();


    showToast(
        "Record Deleted",
        "The borrowing record has been removed."
    );

}


/* =========================================================
   18. HISTORY SEARCH & FILTER
========================================================= */

if (historySearch) {

    historySearch.addEventListener(
        "input",
        renderBorrowHistory
    );

}


if (historyFilter) {

    historyFilter.addEventListener(
        "change",
        renderBorrowHistory
    );

}


/* =========================================================
   19. HISTORY STATISTICS
========================================================= */

function updateHistoryStatistics() {

    const borrowedCount =
        borrowHistory.filter(
            record =>
                record.status === "borrowed" ||
                record.status === "pending"
        ).length;


    const returnedCount =
        borrowHistory.filter(
            record =>
                record.status === "returned"
        ).length;


    const totalCount =
        borrowHistory.length;


    const borrowedElement =
        document.getElementById(
            "historyBorrowedCount"
        );


    const returnedElement =
        document.getElementById(
            "historyReturnedCount"
        );


    const totalElement =
        document.getElementById(
            "historyTotalCount"
        );


    if (borrowedElement) {

        borrowedElement.textContent =
            borrowedCount;

    }


    if (returnedElement) {

        returnedElement.textContent =
            returnedCount;

    }


    if (totalElement) {

        totalElement.textContent =
            totalCount;

    }

}


/* =========================================================
   20. MAIN STATISTICS
========================================================= */

function updateStatistics() {

    const total =
        books.length;


    const available =
        books.filter(
            book => book.status === "available"
        ).length;


    const borrowed =
        books.filter(
            book => book.status === "borrowed"
        ).length;


    const totalElement =
        document.getElementById("totalBooks");


    const availableElement =
        document.getElementById("availableBooks");


    const borrowedElement =
        document.getElementById("borrowedBooks");


    if (totalElement) {

        totalElement.textContent =
            total;

    }


    if (availableElement) {

        availableElement.textContent =
            available;

    }


    if (borrowedElement) {

        borrowedElement.textContent =
            borrowed;

    }


    updateHistoryStatistics();

}


/* =========================================================
   21. ADD BOOK
========================================================= */

addBookForm.addEventListener("submit", event => {

    event.preventDefault();


    clearFormErrors();


    const title =
        document.getElementById("bookTitle")
            .value.trim();


    const author =
        document.getElementById("bookAuthor")
            .value.trim();


    const category =
        document.getElementById("bookCategory")
            .value;


    const year =
        document.getElementById("publishedYear")
            .value;


    const description =
        document.getElementById("bookDescription")
            .value.trim();


    let valid = true;


    if (title === "") {

        showFieldError(
            "bookTitle",
            "Book title is required."
        );

        valid = false;

    }


    if (author === "") {

        showFieldError(
            "bookAuthor",
            "Author name is required."
        );

        valid = false;

    }


    if (category === "") {

        showFieldError(
            "bookCategory",
            "Please select a category."
        );

        valid = false;

    }


    if (!valid) return;


    const newBook = {

        id:
            books.length > 0
                ? Math.max(
                    ...books.map(book => book.id)
                ) + 1
                : 1,

        title: title,

        author: author,

        category: category,

        year:
            year ||
            new Date().getFullYear(),

        description:
            description ||
            "No description has been added for this book yet.",

        image:
            "https://placehold.co/400x600/f0ebff/6d45e8?text=New+Book",

        status: "available"

    };


    books.push(newBook);


    updateAllBookDisplays();

    updateStatistics();


    addBookForm.reset();


    showToast(
        "Book Added",
        `"${title}" has been added to your library.`
    );


    showSection("my-books");

});


/* =========================================================
   22. CONTACT FORM VALIDATION
========================================================= */

contactForm.addEventListener("submit", event => {

    event.preventDefault();


    clearContactErrors();


    const name =
        document.getElementById("contactName")
            .value.trim();


    const email =
        document.getElementById("contactEmail")
            .value.trim();


    const subject =
        document.getElementById("contactSubject")
            .value;


    const message =
        document.getElementById("contactMessage")
            .value.trim();


    let valid = true;


    if (name === "") {

        showContactError(
            "contactName",
            "Please enter your name."
        );

        valid = false;

    }


    if (email === "") {

        showContactError(
            "contactEmail",
            "Please enter your email."
        );

        valid = false;

    } else if (!isValidEmail(email)) {

        showContactError(
            "contactEmail",
            "Please enter a valid email."
        );

        valid = false;

    }


    if (subject === "") {

        showContactError(
            "contactSubject",
            "Please select a subject."
        );

        valid = false;

    }


    if (message === "") {

        showContactError(
            "contactMessage",
            "Please enter your message."
        );

        valid = false;

    } else if (message.length < 10) {

        showContactError(
            "contactMessage",
            "Message must contain at least 10 characters."
        );

        valid = false;

    }


    if (!valid) return;


    contactForm.reset();


    showToast(
        "Message Sent",
        "Thank you! Your message has been submitted."
    );

});


/* =========================================================
   23. FORM VALIDATION HELPERS
========================================================= */

function showFieldError(
    fieldId,
    message
) {

    const field =
        document.getElementById(fieldId);


    const error =
        document.getElementById(
            `${fieldId}Error`
        );


    if (field) {

        field.classList.add("error");

    }


    if (error) {

        error.textContent =
            message;

    }

}


function clearFormErrors() {

    document
        .querySelectorAll(
            "#addBookForm .error"
        )
        .forEach(field => {

            field.classList.remove("error");

        });


    document
        .querySelectorAll(
            "#addBookForm .error-message"
        )
        .forEach(error => {

            error.textContent = "";

        });

}


function showContactError(
    fieldId,
    message
) {

    const field =
        document.getElementById(fieldId);


    const error =
        document.getElementById(
            `${fieldId}Error`
        );


    if (field) {

        field.classList.add("error");

    }


    if (error) {

        error.textContent =
            message;

    }

}


function clearContactErrors() {

    document
        .querySelectorAll(
            "#contactForm .error"
        )
        .forEach(field => {

            field.classList.remove("error");

        });


    document
        .querySelectorAll(
            "#contactForm .error-message"
        )
        .forEach(error => {

            error.textContent = "";

        });

}


function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


/* =========================================================
   24. SLIDER CONTROLS
========================================================= */

const previousFeatured =
    document.querySelector(
        ".previous-featured"
    );


const nextFeatured =
    document.querySelector(
        ".next-featured"
    );


if (previousFeatured) {

    previousFeatured.addEventListener(
        "click",
        () => {

            featuredBooksContainer.scrollBy({
                left: -250,
                behavior: "smooth"
            });

        }
    );

}


if (nextFeatured) {

    nextFeatured.addEventListener(
        "click",
        () => {

            featuredBooksContainer.scrollBy({
                left: 250,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   25. TOAST MESSAGE
========================================================= */

function showToast(
    title,
    message
) {

    toastTitle.textContent =
        title;

    toastMessage.textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


closeToast.addEventListener(
    "click",
    () => {

        toast.classList.remove("show");

    }
);


/* =========================================================
   26. LOGOUT BUTTON
========================================================= */

const logoutButton =
    document.querySelector(
        ".logout-btn"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        () => {

            showToast(
                "Logout",
                "You have been logged out successfully."
            );

        }
    );

}


/* =========================================================
   27. NOTIFICATION BUTTON
========================================================= */

const notificationButton =
    document.querySelector(
        ".notification-btn"
    );


if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        () => {

            showToast(
                "Notifications",
                "You have no new notifications."
            );

        }
    );

}


/* =========================================================
   28. PROFILE MENU
========================================================= */

const profileMenu =
    document.querySelector(
        ".profile-menu"
    );


if (profileMenu) {

    profileMenu.addEventListener(
        "click",
        () => {

            showToast(
                "Profile",
                "Profile settings are coming soon."
            );

        }
    );

}


/* =========================================================
   29. DATE FORMATTER
========================================================= */

function formatDate(dateString) {

    if (!dateString) return "—";


    const date =
        new Date(dateString);


    return date.toLocaleDateString(
        "en-US",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   30. HTML ESCAPE
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   31. REMOVE ERROR WHILE USER TYPES
========================================================= */

document
    .querySelectorAll(
        "#addBookForm input, #addBookForm select, #addBookForm textarea"
    )
    .forEach(field => {

        field.addEventListener(
            "input",
            () => {

                field.classList.remove("error");


                const error =
                    document.getElementById(
                        `${field.id}Error`
                    );


                if (error) {

                    error.textContent = "";

                }

            }
        );

    });


document
    .querySelectorAll(
        "#contactForm input, #contactForm select, #contactForm textarea"
    )
    .forEach(field => {

        field.addEventListener(
            "input",
            () => {

                field.classList.remove("error");


                const error =
                    document.getElementById(
                        `${field.id}Error`
                    );


                if (error) {

                    error.textContent = "";

                }

            }
        );

    });


/* =========================================================
   32. KEEP PAGE ON HOME INITIALLY
========================================================= */

showSection("home");
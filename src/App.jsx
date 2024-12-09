import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import bsilogo from "/bsiLogo.jpg";
import house from "/House.jpg";
import its from "/its.jpg";
import "./App.css";
// import Logo from './components/logo'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Farrel Muhammad Alfatih's CV</h1>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={bsilogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={bsilogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <p className="read-the-docs">Click below to know more about me</p>

      <div className="card">
        <button>
          <p>Who's Farrel?</p>
        </button>
        <button>
          <p>Farrel's Address</p>
        </button>
        <button>
          <p>Farrel's Education</p>
        </button>
        <button>
          <p>Farrel's Contact</p>
        </button>
      </div>
      <div>
        <div className="firstCard">
          <h2>Who's Farrel?</h2>
          <p>
            Currently working as ODP IT Specialist at Bank Syariah Indonesia. I
            am passionate about applying mathematics in information technology,
            particularly in web development, mobile application development, AWS
            Solution Architecture, and database management (SQL/NoSQL). With
            over 2 years of professional experience, I have successfully
            developed and managed data models, implemented database triggers,
            and integrated various databases using Prisma and Mongoose. My
            technical expertise includes Flutter, Express.Js, PostgreSQL,
            MongoDB, JavaScript, and Java. In addition to my technical skills, I
            am actively engaged in organizational activities and have been
            honored as a recipient of the Bank Indonesia Scholarship (GenBI).
          </p>
        </div>

        <div className="secondCard">
          <h2>Farrel's Address</h2>
          <a>
            <img src={house} className="house" />
          </a>
          <p>
            Jl. Singasari B.A1 N0. 10 Cimanggu Permai, Bogor, Jawa Barat. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Dicta voluptatem
            eius quo tenetur in temporibus corrupti voluptates commodi
            voluptatibus nemo! Expedita, dolor architecto! Sequi a ut
            consectetur, nulla quod quasi.
          </p>
        </div>

        <div className="thirdCard">
          <h2>Farrel's Education</h2>
          <a>
            <img src={its} className="its" />
          </a>
          <p>
            institut Teknologi Sepuluh Nopember (ITS) Surabaya, Jawa Timur.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            veniam deleniti eaque eligendi repellendus a, esse nobis dolor,
            itaque expedita ipsa, facilis sed. Sed eveniet provident nemo
            explicabo optio veniam!
          </p>
        </div>

        <div className="fourthCard">
          <h2>Farrel's Contact</h2>
          <p>
            Email: farrelfatih11@gmail.com || Phone: +62 812-1234-5678 ||
            linkedin: farrelmuhammadalfatih
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

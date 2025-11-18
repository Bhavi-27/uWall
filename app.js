const { useState } = React;
const { BrowserRouter, Routes, Route, NavLink, useNavigate } = ReactRouterDOM;

// Utility: validate chitkara email
const isChitkaraEmail = (email) => /@chitkara\.edu\.in$/i.test(email.trim());

function AppShell() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/upload" element={<UploadEvent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header className="app-header">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-circle">U</div>
          <div className="brand-text">
            <span className="brand-name">uWall</span>
            <span className="brand-subtitle">Chitkara University · Events & Moments</span>
          </div>
        </div>
        <div className="nav-links">
          <NavLink end to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            Home
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            Events
          </NavLink>
          <NavLink to="/upload" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            Upload
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            About Us
          </NavLink>
        </div>
        <div className="nav-auth">
          <NavLink to="/login">
            <button className="btn btn-outline-light">Log in</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="btn btn-light">Sign up</button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section>
      <div className="hero">
        <div>
          <h1 className="hero-title">
            Your <span>Campus Wall</span> for Events, Fests & Hackathons.
          </h1>
          <p className="hero-subtitle">
            uWall is a university event and photo sharing platform for Chitkara University.
            Discover upcoming events, fests and hackathons, share memories with friends, and
            never miss what is happening on campus.
          </p>
          <div className="hero-highlights">
            <span className="pill">Upcoming events at a glance</span>
            <span className="pill">Share event photos with your peers</span>
            <span className="pill">Built for Chitkara community</span>
          </div>
          <div className="hero-cta">
            <NavLink to="/signup">
              <button className="btn btn-primary">Get started with your chitkara.edu.in ID</button>
            </NavLink>
            <NavLink to="/events">
              <button className="btn btn-outline-light" style={{ color: "var(--uwall-red)", borderColor: "var(--uwall-red)" }}>
                Browse events
              </button>
            </NavLink>
          </div>
          <div className="hero-stats" style={{ marginTop: "1.1rem" }}>
            <div>
              <span>50+</span> upcoming events
            </div>
            <div>
              <span>500+</span> photos shared
            </div>
            <div>
              <span>10+</span> active clubs
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-title">Today on uWall</div>
          <div className="hero-card-list">
            <div>
              <strong>HackArena 5.0</strong>
              <div className="card-meta">Innovation Block · 10:00 AM</div>
            </div>
            <div>
              <strong>Rhythm Cultural Night</strong>
              <div className="card-meta">Central Lawn · 6:30 PM</div>
            </div>
            <div>
              <strong>Photography Club Photo Walk</strong>
              <div className="card-meta">Campus Drive · 4:00 PM</div>
            </div>
          </div>
          <div className="hero-chip-row">
            <span className="hero-chip">Tech</span>
            <span className="hero-chip">Cultural</span>
            <span className="hero-chip">Sports</span>
            <span className="hero-chip">Workshops</span>
          </div>
        </div>
      </div>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 className="section-heading">Why uWall?</h2>
        <p className="section-subtitle">
          uWall aims to improve campus engagement and community spirit by bringing all events,
          announcements and memories to one place, just for Chitkara University.
        </p>
        <div className="card-grid">
          <div className="card">
            <div className="card-title">Discover events easily</div>
            <p className="card-desc">
              Filter events by category and date so you will never miss a fest, hackathon or
              workshop again.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Share photos with your batch</div>
            <p className="card-desc">
              Upload event pictures and create shared memories with your friends, clubs and
              societies.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Built for Chitkara</div>
            <p className="card-desc">
              Only students with a <strong>chitkara.edu.in</strong> email can sign up, keeping the
              platform safe and campus-focused.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

function Events() {
  const sampleEvents = [
    {
      id: 1,
      title: "HackArena 5.0",
      category: "Hackathon",
      date: "24 Nov 2025",
      venue: "Innovation Block",
      desc: "24-hour coding marathon to solve real-world problems with your team.",
      tags: ["Coding", "Projects", "Prizes"]
    },
    {
      id: 2,
      title: "Rhythm Cultural Fest",
      category: "Cultural",
      date: "28 Nov 2025",
      venue: "Main Stage, Central Lawn",
      desc: "Music, dance, drama and more by Chitkara's cultural societies.",
      tags: ["Music", "Dance", "Drama"]
    },
    {
      id: 3,
      title: "Sports League Finals",
      category: "Sports",
      date: "30 Nov 2025",
      venue: "Sports Ground",
      desc: "Cheer for your house in the football and basketball finals.",
      tags: ["Football", "Basketball", "Cheer"]
    }
  ];

  return (
    <section>
      <h2 className="section-heading">Upcoming events</h2>
      <p className="section-subtitle">
        Explore a snapshot of events happening across Chitkara University campus.
      </p>
      <div className="card-grid">
        {sampleEvents.map((event) => (
          <div key={event.id} className="card">
            <div className="card-badge-row">
              <span className="badge">{event.category}</span>
              <span className="card-meta">{event.date}</span>
            </div>
            <div className="card-title">{event.title}</div>
            <div className="card-meta">{event.venue}</div>
            <div className="card-desc">{event.desc}</div>
            <div className="card-tags">
              {event.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function UploadEvent() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Fest");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !venue) {
      setMessage("Please fill all the required fields (title, date, venue).");
      return;
    }
    setMessage("Event submitted! (Frontend only demo – no backend yet.)");
  };

  return (
    <section>
      <h2 className="section-heading">Upload an event</h2>
      <p className="section-subtitle">
        Share your club's events, fests or hackathons with the Chitkara community.
      </p>
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Event title *</label>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. HackArena 5.0"
          />
        </div>
        <div className="form-group">
          <label className="label">Category</label>
          <select
            className="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Fest</option>
            <option>Hackathon</option>
            <option>Workshop</option>
            <option>Sports</option>
            <option>Cultural</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Date *</label>
          <input
            type="date"
            className="input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Venue *</label>
          <input
            className="input"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="e.g. Innovation Block, Auditorium"
          />
        </div>
        <div className="form-group">
          <label className="label">Description</label>
          <textarea
            className="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What is this event about? Who can participate?"
          />
        </div>
        <button className="btn btn-primary btn-full" type="submit">
          Submit event
        </button>
        <p className="helper-text" style={{ marginTop: "0.6rem" }}>
          Note: This is a frontend-only prototype. In a full app, this would save to a database.
        </p>
        {message && <p className="helper-text" style={{ color: "var(--uwall-red-dark)" }}>{message}</p>}
      </form>
    </section>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChitkaraEmail(email)) {
      setError("Please use your chitkara.edu.in email ID.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    setError("");
    alert("Logged in successfully (frontend demo only)");
    navigate("/");
  };

  return (
    <section>
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">Log in</h2>
        <p className="form-subtitle">Access uWall with your Chitkara University account.</p>
        <div className="form-group">
          <label className="label">Chitkara email ID</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username@chitkara.edu.in"
            required
            pattern=".+@chitkara\.edu\.in"
          />
          <p className="helper-text">Only chitkara.edu.in email IDs are allowed.</p>
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button className="btn btn-primary btn-full" type="submit">
          Log in
        </button>
        <p className="form-footer-text">
          New to uWall?{" "}
          <NavLink to="/signup" className="link-inline">
            Create an account
          </NavLink>
        </p>
      </form>
    </section>
  );
}

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please enter your full name.");
      return;
    }
    if (!isChitkaraEmail(email)) {
      setError("Sign up is restricted to chitkara.edu.in email IDs.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }
    setError("");
    alert("Account created (frontend demo only)");
    navigate("/login");
  };

  return (
    <section>
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">Create your uWall account</h2>
        <p className="form-subtitle">Join the Chitkara campus event and photo sharing community.</p>
        <div className="form-group">
          <label className="label">Full name</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Bhumika Raheja"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Chitkara email ID</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username@chitkara.edu.in"
            required
            pattern=".+@chitkara\.edu\.in"
          />
          <p className="helper-text">You must sign up using your official chitkara.edu.in email.</p>
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button className="btn btn-primary btn-full" type="submit">
          Sign up
        </button>
        <p className="form-footer-text">
          Already have an account?{" "}
          <NavLink to="/login" className="link-inline">
            Log in
          </NavLink>
        </p>
      </form>
    </section>
  );
}

function About() {
  const team = [
    {
      name: "Bhumika Raheja",
      role: "Frontend & UX",
      initials: "BR",
      desc: "Worked on the overall UI, layouts and color theme for the uWall platform."
    },
    {
      name: "Bhoomi Garg",
      role: "React & Routing",
      initials: "BG",
      desc: "Implemented navigation, pages and basic interactivity using React."
    },
    {
      name: "Bhavika Mehta",
      role: "Content & Flows",
      initials: "BM",
      desc: "Designed core user flows for events, uploads and campus engagement."
    }
  ];

  return (
    <section>
      <h2 className="section-heading">About uWall</h2>
      <p className="section-subtitle">
        uWall is a basic frontend prototype for a Chitkara University event and photo sharing
        platform. It helps students discover upcoming events, fests and hackathons and allows
        users to upload and share event moments with their peers.
      </p>
      <div style={{ marginBottom: "1.8rem", fontSize: "0.9rem", color: "#444" }}>
        <p>
          The goal of uWall is to improve campus engagement and community spirit by bringing
          everything happening at Chitkara onto one simple platform. From cultural nights and
          coding competitions to sports leagues, students can quickly see what is happening today
          and in the coming weeks.
        </p>
      </div>
      <h3 className="section-heading" style={{ fontSize: "1.1rem" }}>
        Our team
      </h3>
      <div className="team-grid">
        {team.map((member) => (
          <div key={member.name} className="team-card">
            <div className="team-avatar">{member.initials}</div>
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.role}</div>
            <div className="team-desc">{member.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} uWall · Made for Chitkara University</span>
        <div className="footer-links">
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppShell />);

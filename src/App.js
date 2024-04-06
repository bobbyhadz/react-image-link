import './App.css';

import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        {/* 👇️ React Router link */}
        <Link to="/about">
          <img
            src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
            alt="example"
          />
        </Link>

        <br />
        <br />

        {/* 👇️ Anchor link */}
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp"
            alt="example"
          />
        </a>
      </div>
    </Router>
  );
}

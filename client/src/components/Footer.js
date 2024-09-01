import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              မလိခ is a cozy guesthouse offering comfort and tranquility. Feel at home away from home.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#" className="text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="bg-white"/>
        <p className="mb-0">&copy; 2024 မလိခ Guesthouse. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
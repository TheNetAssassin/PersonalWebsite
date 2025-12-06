function Socialmedia() {
  return (
    <div className="Footer" id="footer">
      <div class="socialmedia">
        <br />
        <a href="https://www.instagram.com/thenetassassin/">
          <i className="fa fa-instagram" id="instagram"></i>
        </a>
        <a href="mailto:www.nazarnasenawaf@gmail.com">
          <i class="fa-solid fa-square-envelope" id="email"></i>
        </a>
        <a href="https://www.linkedin.com/in/naseeraparvin">
          <i class="fa-brands fa-linkedin" id="linkedin"></i>
        </a>
        <a href="https://www.upwork.com/freelancers/~011f5546b2558ad7ce">
          <i class="fa-solid fa-user-secret" id="upwork"></i>
        </a>

        <p className="end">
          © {new Date().getFullYear()} TheNetAssassin. All Rights Reserved.
        </p>
      </div>
      <div class="bottomwave"></div>
    </div>
  );
}
export default Socialmedia;

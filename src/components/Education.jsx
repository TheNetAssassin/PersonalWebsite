function Education() {
  return (
    <div className="education" id="education">
      <h2>Education</h2>

      <div className="row edurow">
        <div className="col-md-4 degree">
          <h4>Bachelor Of Science (B.Sc.,)</h4>
          <h6>2015-2018</h6>
        </div>

        <div className="col-md-8 brief">
          <h5>Sengamala Thayaar Educational Trust </h5>
          <p className="briefpara">
            Graduated Bachelor's of Science in computer science from
            Bharathidasan University. Here, I dig deep in programming such as
            PHP, JS, SQl and No-Sql databases and more.
          </p>
          <p className="bploc">
            <i class="fas fa-map-marker-alt"></i> TamilNadu,India
          </p>
        </div>
      </div>

      <div className="row edurow eduroweven">
        <div className="col-md-8 briefeven">
          <h5>St.Joseph's Higher Sec School</h5>
          <p className="briefparaeven">
            I have completed my Higher Secondary Education under the Board Of
            HSE. Here, I learned basics of programmings like C, C++, java and
            much more that led me to make awesome frontend websites.
          </p>
          <p className="bploc bploceven">
            <i class="fas fa-map-marker-alt"></i> TamilNadu,India
          </p>
        </div>

        <div className="col-md-4 degree">
          <h4>Higher Secondary Education(HSE) </h4>
          <h6>2015</h6>
        </div>
      </div>

      <div className="row edurow">
        <div className="col-md-4 degree">
          <h4> Secondary School Leaving Cerificate (SSLC)</h4>
          <h6>2013</h6>
        </div>

        <div className="col-md-8 brief">
          <h5>St.Joseph's Matriculation School</h5>
          <p className="briefpara">
            I have finished my Secondary School Leaving Education on 2013 under
            the Board Of Public Examination, TamilNadu.{" "}
          </p>
          <p className="bploc">
            <i class="fas fa-map-marker-alt"></i> TamilNadu,India
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;

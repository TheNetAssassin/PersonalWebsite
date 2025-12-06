import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const gallery = document.getElementById("gallery");
    if (!gallery) return; // safety

    let pending = false;
    let mouseX = 0;
    let mouseY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!pending) {
        pending = true;

        requestAnimationFrame(() => {
          pending = false;

          const xDecimal = mouseX / window.innerWidth;
          const yDecimal = mouseY / window.innerHeight;

          const maxX = gallery.offsetWidth - window.innerWidth;
          const maxY = gallery.offsetHeight - window.innerHeight;

          const panX = maxX * xDecimal * -1;
          const panY = maxY * yDecimal * -1;

          gallery.style.transform = `translate(${panX}px, ${panY}px)`;
        });
      }
    };

    gallery.addEventListener("mousemove", handleMove);

    // Cleanup on unmount
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="sd" id="showcase">
      <h2>Showcase</h2>
      <div id="gallery">
        <div class="tile">
          <img
            src="images/ownprojectsss/travelblog.png"
            alt="Travel Blog Site"
          />
          <p>Travel Blog</p>
        </div>
        <div class="tile">
          <img src="images/ownprojectsss/moveit.png" alt="pic" />
          <p>Shipment Logistics</p>
        </div>
        <div class="tile">
          <img src="images/ownprojectsss/weather.png" alt="pic" />
          <p>Weather App</p>
        </div>
        <div class="tile">
          <img src="images/ownprojectsss/minigames.png" alt="pic" />
          <p>Mini Games</p>
        </div>
        <div class="tile">
          <img src="images/ownprojectsss/bfc.png" alt="pic" />
          <p>Community Based Site</p>
        </div>
        <div class="tile">
          <img src="images/ownprojectsss/personalportfolio.png" alt="pic" />
          <p>Personal Portfolio</p>
        </div>
        <div class="tile">
          <img src="images/ownprojectsss/carousel.png" alt="pic" />
          <p>Carousel Gallery</p>
        </div>
        <div class="tile">
          <img src="images/ownprojectsss/ABT.png" alt="pic" />
          <p>Service Oriented Site</p>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import svg from "../Assests/1.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Acesx...</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={svg} alt="loading.."></img>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          assumenda odio autem et tempora. <br />
          Optio tempore quis magnam tenetur voluptatum nulla veniam minus, cum
          perferendis assumenda! Laborum incidunt magni atque?
          <br /> ullam ab perspiciatis sit quam reiciendis fugiat vero unde? Eum
          perferendis animi cum accusamus?
        </p>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            consectetur esse itaque, rerum aut reprehenderit quam ipsum?
            Repellat itaque <br />
            nulla asperiores minus saepe animi delectus, minima laborum eaque!
            Error omnis neque tempora, vel, mollitia, ipsam nobis asperiores
            aliquam nihil officiis quas fuga nisi. Inventore enim expedita quis
            perferendis omnis officia.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;

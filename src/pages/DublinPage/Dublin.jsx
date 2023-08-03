import React from "react";
import Header from "../../Header/Header";
import "./sstyleDublin/stylescss.scss";
export default function Dublin() {
  const styleSize = {
    width: "400px",
    height: "255px",
  };
  return (
    <>
      <main className="dublinMain">
        <Header />
        <div className="header">
          <h1>Dublin</h1>
        </div>
        <div className="flex">
          <div className="dublin_info">
            <div className="text">
              <h1>Briefly about Dublin</h1>
              <p>
                Dublin is the capital and largest city of Ireland, located on
                the
                <br />
                east coast of the island. Here are some basic facts about
                Dublin:
                <br />
                History: Dublin has a rich history that stretches back over a
                <br />
                thousand years. The city was founded by the Vikings in the 9th
                <br />
                century and subsequently became a center of culture, education
                and
                <br />
                trade. Culture and Arts: Dublin is famous for its rich cultural
                <br />
                heritage. The city is home to many famous literary figures such
                as
                <br />
                Jonathan Swift, Oscar Wilde and James Joyce. Dublin is also home
                to
                <br />
                many museums, galleries and theaters that offer a variety of art
                <br />
                exhibitions and performances.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="second_header">
          <h1>Dublin itinerary</h1>
        </div>
        <div className="grid">
          <div className="block">
            <img
              src={require("../../images/Dublin_image/pictureD1.png")}
              alt="error"
              style={styleSize}
            />
            <p>
              The historical castle, which played an important role in the
              <br />
              history of the city and the country. Here you can take a tour and
              <br />
              learn more about the history of Dublin. <br />
            </p>
          </div>
          <div className="block">
            <img
              src={require("../../images/Dublin_image/pictureD2.png")}
              alt="error"
              style={styleSize}
            />
            <p>
              The area, home to many buildings and attractions, includes St.{" "}
              <br />
              Patrick's Cathedral (St. Patrick's Cathedral), Christ Church.{" "}
              <br />
            </p>
          </div>
          <div className="block">
            <img
              src={require("../../images/Dublin_image/pictureD3.png")}
              alt="error"
              style={styleSize}
            />
            <p>
              One of the oldest universities in Europe, founded in 1592. Here is{" "}
              <br />
              the Old Library, where you can see the Book of Kells and other{" "}
              <br />
              rare books. <br />
            </p>
          </div>
          <div className="block">
            <img
              src={require("../../images/Dublin_image/pictureD4.png")}
              alt="error"
              style={styleSize}
            />
            <p>
              Museum of Art, which presents a collection of Irish and European{" "}
              <br />
              art. Here you can see the works of artists such as Jack B. Yeats,{" "}
              <br />
              Paul Clay, Rembrandt and others. <br />
            </p>
          </div>
          <div className="block">
            <img
              src={require("../../images/Dublin_image/pictureD5.png")}
              alt="error"
              style={styleSize}
            />
            <p>
              Illustrated manuscript from the ninth century held in the Trinity{" "}
              <br />
              College Library. This is one of Ireland's most famous and valuable{" "}
              <br />
              treasures. <br />
            </p>
          </div>
          <div className="block">
            <img
              src={require("../../images/Dublin_image/pictureD6.png")}
              alt="error"
              style={styleSize}
            />
            <p>
              Historical prison turned into a museum. Here you can learn about{" "}
              <br />
              the struggle for Irish independence and the history of political{" "}
              <br />
              prisoners. <br />
            </p>
          </div>
          <div className="block">
            <img
              src={require("../../images/Dublin_image/pictureD7.png")}
              alt="error"
              style={styleSize}
            />
            <p>
              Historical prison turned into a museum. Here you can learn about  <br />
              the struggle for Irish independence and the history of political <br />
              prisoners. <br />
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

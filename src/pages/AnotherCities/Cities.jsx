import React from "react";
import Header from "../../Header/Header";
import GalwaySlides from "../../Components/GalwaySlides/GalwaySlides";
import CorkSlides from "../../Components/CorkSlides/CorkSlides";
import corkData from "../../data/corkData";
import galwayData from "../../data/galwayData";
import LimerickSlides from "../../Components/LimerickSlides/LimerickSlides";
import limerickData from "../../data/limerickData";
import BelfastSlides from "../../Components/BelfastSlides/BelfastSlides";
import belfastData from "../../data/belfastData";
import "./styleCities/scssCities.scss";
export default function Cities() {
  return (
    <main className="cities_main">
      <Header />
      <div className="block">
        <h1>Galway</h1>
        <GalwaySlides slidesGalway={galwayData} />
          <p>
            Galway is a port city on the west coast of Ireland at the confluence<br />
            of the Corrib River into the Atlantic Ocean. In the center of the<br />
            city lies the 18th century Eyre Square, a popular meeting place for<br />
            locals and tourists. It is surrounded by shops and old-fashioned<br />
            pubs that often feature Irish folk music. The stone-lined, winding<br />
            streets of the Latin Quarter, which has the remains of medieval <br />
            fortifications, are full of cafes, shops and art galleries. <br />
          </p>
      </div>
      <div className="block">
        <h1>Cork</h1>
        <CorkSlides slidesCork={corkData} />
          <p>
            Cork is a university city located at some distance from the <br />
            southwest coast of Ireland. The historic center of the city is<br />
            located on an island on the River Lea, which flows into the natural<br />
            harbor of Cork, from which you can get into the Celtic Sea. Built in<br />
            1824, the fortress-like city prison housed prisoners who were sent<br />
            to Australia. Now it houses exhibitions dedicated to the history of<br />
            the building. The symbol of Cork is the spire of the church of St.<br />
            Anne of the 18th century. <br />
          </p>
      </div>
      <div className="block">
        <h1>Limerick</h1>
        <LimerickSlides slidesLimerick={limerickData} />
          <p>
            Limerick is a city-county in Ireland, located on the borders of the <br />
            counties of Limerick and Clare. A large commercial and <br />
            administrative center, the third largest city in Ireland. <br />
          </p>
      </div>
      <div className="block">
        <h1>Belfast</h1>
        <BelfastSlides slidesBelfast={belfastData} />
          <p>
            Belfast is the capital of Northern Ireland, where the British <br />
            transatlantic steamer Titanic was launched, collided with an iceberg <br />
            and sank in 1912. You can learn about its history at the <br />
            reconstructed shipyards of the Titanic quarter, which houses the <br />
            Titanic Belfast museum, lined with sheets of aluminum, resembling a <br />
            ship's hull, the drawing rooms of the Harland and Wolf shipbuilders <br />
            and the Titanic slipway, which hosts open-air concerts. <br />
          </p>
      </div>
    </main>
  );
}

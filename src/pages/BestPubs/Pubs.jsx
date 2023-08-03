import React from "react";
import "./stylePub/scsstyle.scss";
import Header from "../../Header/Header";
export default function Pubs() {
  return (
    <>
      <main className="pubs_main">
        <Header />
        <div className="block1">
          <div className="flex_adress">
            <p className="adress">
              Address: 47-48 Temple Bar, Dublin 2, D02 N725, Ireland
            </p>
          </div>
          <div className="flex_desc">
            <p className="desc">
              Located in the vibrant Temple Bar neighborhood, it is one of
              Dublin's <br />
              most famous and iconic pubs. It offers live traditional Irish
              music, a <br />
              wide selection of drinks, and a lively atmosphere. <br />
            </p>
          </div>
        </div>
        <div className="block2">
          <div className="flex_adress">
            <p className="adress">
              Address: 20 Lower Bridge St, The Liberties, Dublin 8, D08 WC64,
              Ireland
            </p>
          </div>
          <div className="flex_desc">
            <p className="desc">
              Claiming to be Ireland's oldest pub, The Brazen Head has a rich{" "}
              <br />
              history dating back to 1198. It features traditional Irish music{" "}
              <br />
              sessions, hearty food, and a cozy ambiance. <br />
            </p>
          </div>
        </div>
        <div className="block3">
          <div className="flex_adress">
            <p className="adress">
              Address: St James's Gate, Ushers, Dublin 8, D08 VF8H, Ireland
            </p>
          </div>
          <div className="flex_desc">
            <p className="desc">
              While not a traditional pub, the Guinness Storehouse is a <br />
              must-visit for beer enthusiasts. Located at the Guinness Brewery,{" "}
              <br />
              it offers a multi-story visitor experience, including a rooftop{" "}
              <br />
              bar with panoramic views of Dublin. <br />
            </p>
          </div>
        </div>
        <div className="block4">
          <div className="flex_adress">
            <p className="adress">
              Address: 8 Poolbeg St, Dublin 2, D02 R235, Ireland
            </p>
          </div>
          <div className="flex_desc">
            <p className="desc">
              A classic pub with a long history, Mulligan's is known for its{" "}
              <br />
              traditional atmosphere and excellent Guinness. It has been a{" "}
              <br />
              favorite spot for writers and literary figures throughout the{" "}
              <br />
              years.
            </p>
          </div>
        </div>
        <div className="block5">
          <div className="flex_adress">
            <p className="adress">
              Address: 21 Fleet St, Temple Bar, Dublin 2, D02 K832, Ireland
            </p>
          </div>
          <div className="flex_desc">
            <p className="desc">
              Situated on Fleet Street, The Palace Bar is a charming pub with a{" "}
              <br />
              timeless appeal. It has preserved its original Victorian decor and{" "}
              <br />
              serves a wide range of Irish whiskeys. <br />
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

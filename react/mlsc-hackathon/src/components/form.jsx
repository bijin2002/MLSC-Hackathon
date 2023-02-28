import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
const COLORS = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet",
  "Black",
  "White",
  "Gray",
];
const types = ["high-top", "low-top", "mid-top"];
const brands = [
  "Nike",
  "Adidas",
  "Converse",
  "Vans",
  "Puma",
  "Reebok",
  "New Balance",
  "Asics",
  "Jordan",
  "Under Armour",
];
const inspirationalShoesV = [
  "Air Jordan 1",
  "Air Jordan 3",
  "Air Jordan 4",
  "Yeezy 350 V2",
  "Yeezy 500",
  "Yeezy 700",
  "Air Force 1",
  "Air Max 90",
  "Air Max 95",
  "Air Max 97",
  "Air Max 270",
  "Dunks",
  "SB Dunks",
];

const api_url = "https://v1.genr.ai/api/circuit-element/generate-image";
const gen_caption = "https://v1.genr.ai/api/circuit-element/generate-captions";

export default function ColorSelector() {
  const colorDrops = ["toeBox", "heelCounter", "upper", "color", "sole"];
  const [toeBox, setToeBox] = useState("");
  const [heelCounter, setHeelCounter] = useState("");
  const [upper, setUpper] = useState("");
  const [color, setColor] = useState("");
  const [sole, setSole] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [inspirationalShoes, setInspirationalShoes] = useState("");

  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      color &&
      type &&
      brand &&
      inspirationalShoes &&
      toeBox &&
      heelCounter &&
      upper &&
      sole
    ) {
      const params = {
        prompt: `A stunning cinematic interpretation of ${color} coloured ${brand} ${type} shoe sneaker similar to ${inspirationalShoes} with ${heelCounter} colored heel counter,${upper} coloured upper, ${sole} coloured sole, ${toeBox} coloured toebox placed in a monochromatic white background:: cinematic,advertisement,luxary,elite,hyper detailed,ultrarealistic,modern,high resolution,digital art,fantasy art,side view, full view, product presentation, product design, representation`,
        height: 512,
        width: 512,
        model: "dall-e",
        n_images: 1,
      };

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_description: `A stunning cinematic interpretation of ${color} coloured ${brand} ${type} shoe sneaker similar to ${inspirationalShoes} with ${heelCounter} colored heel counter,${upper} coloured upper, ${sole} coloured sole, ${toeBox} coloured toebox placed in a monochromatic white background}`,
          temperature: 0.5,
          platform: "Instagram",
          target_audience: "Gen Z",
        }),
      };

      fetch(api_url, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.output), setImage(data.output);
        })
        .catch((error) => console.error(error))
        .then(() => {
          fetch(
            "https://v1.genr.ai/api/circuit-element/generate-product-ad",
            options
          )
            .then((response) => response.json())
            .then((response) => setCaption(response.output))
            .catch((err) => console.error(err));
        })
        .catch((error) => console.error(error));

      alert(
        `You have selected: Toe Box - ${toeBox}, Heel Counter - ${heelCounter}, Upper - ${upper}, Sole - ${sole}, Color: :${color}, Brand: ${brand}, Type: ${type}, Inspirational shoes: ${inspirationalShoes}`
      );
    }
  };

  function setValue(type, color) {
    switch (type) {
      case "toeBox":
        setToeBox(color);
        setDropDownValue(type, color);
        break;
      case "heelCounter":
        setHeelCounter(color);
        break;
      case "upper":
        setUpper(color);
        break;
      case "sole":
        setSole(color);
        break;
      case "color":
        setColor(color);
        break;
      default:
        break;
    }
  }
  const [dropdownValues, setDropdownValues] = useState({});
  const setDropDownValue = (type, selectedColor) => {
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [type]: selectedColor,
    }));
  };

  return (
    <>
      <div className={!image ? "form" : "form single"}>
        {!image && (
          <>
            {colorDrops.map((type, index) => {
              const fieldVal = dropdownValues[type] || type;
              return (
                <Dropdown key={type}>
                  <Dropdown.Toggle
                    variant="outline-primary"
                    id="dropdown-basic"
                  >
                    {fieldVal}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {COLORS.map((color) => {
                      return (
                        <Dropdown.Item
                          key={color}
                          onClick={() => {
                            setValue(type, color);
                            setDropDownValue(type, color);
                          }}
                        >
                          {color}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              );
            })}

            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                {brand || "Brand"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {brands.map((brand) => {
                  return (
                    <Dropdown.Item
                      key={brand}
                      onClick={() => {
                        setBrand(brand);
                      }}
                    >
                      {brand}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                {type || "Type"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {types.map((type) => {
                  return (
                    <Dropdown.Item key={type} onClick={() => setType(type)}>
                      {type}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                {inspirationalShoes || "Inspirational Shoes"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {inspirationalShoesV.map((inspirationalShoes) => {
                  return (
                    <Dropdown.Item
                      key={inspirationalShoes}
                      onClick={() => setInspirationalShoes(inspirationalShoes)}
                    >
                      {inspirationalShoes}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}

        {!image && !caption && (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {image && caption && image && caption && (
          <div className="results">
            <img src={image} alt="Generated shoe" />
            {caption && <p>{caption}</p>}
            <br /> <br />
            <div className="container">
              <a href="/" className="button">
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">RESTART</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
              </a>
            </div>
          </div>
        )}
      </div>
      <br />
      {!image && (
        <div className="container">
          <button onClick={handleSubmit} className="button">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">SUBMIT</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </button>
        </div>
      )}
    </>
  );
}

import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const COLORS = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet',
  'Black',
  'White',
  'Gray'
];
const type = [
  'high-top',
  'low-top',
  'mid-top',
]
const brand = [
  'Nike',
  'Adidas',
  'Converse',
  'Vans',
  'Puma',
  'Reebok',
  'New Balance',
  'Asics',
  'Jordan',
  'Under Armour'
]
const inspirationalShoes = [
  'Air Jordan 1',
  'Air Jordan 3',
  'Air Jordan 4',
  'Yeezy 350 V2',
  'Yeezy 500',
  'Yeezy 700',
  'Air Force 1',
  'Air Max 90',
  'Air Max 95',
  'Air Max 97',
  'Air Max 270',
  'Dunks',
  'SB Dunks',
]

const api_url = "https://v1.genr.ai/api/circuit-element/generate-image";

export default function ColorSelector() {
  const [selectedColors, setSelectedColors] = useState({
    toeBox: '',
    heelCounter: '',
    upper: '',
    sole: '',
    color: '',
    brand: '',
    type: '',
    inspirationalShoes: ''
  });

  const [image, setImage] = useState('');
  const handleSelect = (key, value) => {
    setSelectedColors(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {color, type, brand, inspirationalShoes, toeBox, heelCounter, upper, sole } = selectedColors;
    if (color && type && brand && inspirationalShoes && toeBox && heelCounter && upper && sole) {
      const params = {
        "prompt": `A stunning cinematic interpretation of ${color} coloured ${brand} ${type} shoe sneaker similar to ${inspirationalShoes} with ${heelCounter} colored heel counter,${upper} coloured upper, ${sole} coloured sole, ${toeBox} coloured toebox :: cinematic,advertisement,luxary,elite,hyper detailed,ultrarealistic,modern,high resolution,digital art,fantasy art,side view, full view, product presentation, product design, representation`,
        "height": 512,
        "width": 512,
        "model": "dall-e",
        "n_images": 1
      };

      fetch(api_url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {console.log(data.output), setImage(data.output[0])})
        .catch(error => console.error(error));

      alert(`You have selected: Toe Box - ${toeBox}, Heel Counter - ${heelCounter}, Upper - ${upper}, Sole - ${sole}, Color: :${color}, Brand: ${brand}, Type: ${type}, Inspirational shoes: ${inspirationalShoes}`);
    }
  };

  return (
    <div className='changes'>
    {!image && <>
      {Object.keys(selectedColors).map((key) => (
        <Dropdown key={key} onSelect={(value) => handleSelect(key, value)}>
          <Dropdown.Toggle variant="success" id={`dropdown-${key}`}>
            {`Select a ${key} color`}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {COLORS.map((color) => (
              <Dropdown.Item key={color} eventKey={color}>
                {color}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
       
        </Dropdown>
      ))}
    </>}
      {image && <img src={image} alt="Generated shoe" />}
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );

}

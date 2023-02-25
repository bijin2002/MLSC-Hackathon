import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function Form() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "gray",
    "black",
    "white",
  ];

  return (
    <form>
      <DropdownButton id="color-dropdown" title="Select a Color">
        {colors.map((color) => (
          <Dropdown.Item
            key={color}
            onSelect={() => props.onSelectColor(color)}
          >
            {color}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </form>
  );
}

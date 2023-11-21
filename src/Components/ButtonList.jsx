import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="md:flex  w-full  p-4 gap-3 relative hidden">
      <Button name={"All"} />
      <Button name={"Computer programming"} />
      <Button name={"Gaming"} />
      <Button name={"Mixes"} />
      <Button name={"Music"} />
      <Button name={"Laptops"} />
      <Button name={"Universities"} />
      <Button name={"News"} />
      <Button name={"Podcasts"} />
      <Button name={"Tamil Movies"} />
      <Button name={"Cricket Live"} />
      <Button name={"Bolltwood"} />
    </div>
  );
};

export default ButtonList;

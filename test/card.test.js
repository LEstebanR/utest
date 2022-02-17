import Card from "../components/Card";
import {render} from "@testing-library/react";

const data = {
  id: "1",
  name: "card",
  image: "This is the image",
  status: "This is the status",
  location: {
    name: "This is the location",
    type: "This is the type",
  }
} 


describe(" render Card", () => {
  it("should render Card", () => {
    const  getByTestId  = render(<Card data={data}/>);
    expect(getByTestId.getByText("card"));
  });
})
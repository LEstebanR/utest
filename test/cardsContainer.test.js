import CardsContainer from "../components/CardsContainer";
import {render} from "@testing-library/react";


const data = [
  {
  id: "1",
  name: "card container",
  image: "This is the image",
  status: "This is the status",
  location: {
    name: "This is the location",
    type: "This is the type"
  }
}
]

describe("Cards Container", () => {
  it("should render Cards Container", () => {
    const  getByTestId  = render(<CardsContainer data={data}/>);
    expect(getByTestId.getByText("card container"));
    
  });
})
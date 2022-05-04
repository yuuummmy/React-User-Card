import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/Searchinput";
import { UserCard } from "./components/organisms/user/UserCard";
import { Defaultlayout } from "./components/templates/DefalutLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "Uknown",
  image: "https://source.unsplash.com/CzH-YUXzL2k",
  email: "1234@gmail.com",
  phone: "090-1234-1566",
  company: {
    name: "TEST Company corp"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <Defaultlayout>
        <PrimaryButton>test</PrimaryButton>
        <SecondaryButton>search</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </Defaultlayout>
    </BrowserRouter>
  );
}

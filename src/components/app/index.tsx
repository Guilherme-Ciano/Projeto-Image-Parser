import { FaRegClipboard } from "react-icons/fa";
import ImageToText from "../parser/parser";
import { BottomOptions, Exit, Navbar, Wrapper } from "./styles";
import { IoSettingsSharp } from "react-icons/io5";
import { BiImport } from "react-icons/bi";
import { Option } from "../styles";
import Banner from "../banner";

export default function MainApp() {
  return (
    <>
      <Wrapper>
        <Navbar>
          Parser
          <Exit>Exit</Exit>
        </Navbar>

        <ImageToText />

        <BottomOptions>
          <Option>
            Copy from clipboard
            <FaRegClipboard />
          </Option>
          <Option>
            Find your file
            <BiImport />
          </Option>
          <Option>
            Settings
            <IoSettingsSharp />
          </Option>
        </BottomOptions>
      </Wrapper>
      <Banner />
    </>
  );
}

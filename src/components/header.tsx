import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="bg-white mx-auto h-[60px]  flex items-center shadow-md">
      <header className="w-full mx-auto  max-w-5xl  ">
        <img src={Logo} alt="BeTalent" className="w-[91px] h-[34px]" />
      </header>
    </header>
  );
};
export default Header;

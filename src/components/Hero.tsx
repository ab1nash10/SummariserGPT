import logo from "../assets/logo.svg";
import Button from "./Button";
const Hero = () => {
  return (
    <header className={`w-full flex flex-col justify-center items-center`}>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <Button
          onClick={() =>
            window.open("https://github.com/ab1nash10/summariserGPT")
          }
          className={`black_btn`}
        >
          Github
        </Button>
      </nav>
      <h1 className="head_text">
        Summarise Articles with <br className={`max-md:hidden`} />
        <span className={`orange_gradient`}>OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with SummariserGPT, an open-source article
        summariser that transforms lengthy articles into clear and concise
        summaries
      </h2>
    </header>
  );
};

export default Hero;

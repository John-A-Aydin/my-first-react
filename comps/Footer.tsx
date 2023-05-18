function Socials(imgPath: string, link: string) {
    function handleClick() {
      window.open(link);
    }
    return (
      <img
        // className='pr-4'
        onClick={handleClick}
        src={imgPath}
        alt=""
      />
    )
  }

export default function Footer() {
    return (
        <div className="w-screen fixed bottom-0 flex justify-end bg-gray-800 border-t border-gray-950">
          {Socials("./icons/github.png", "https://github.com/John-A-Aydin")}
          {Socials("./icons/linkedin.png", "https://www.linkedin.com/in/johnaaydin/")}
        </div>
    );
  }
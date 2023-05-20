function Links(imgPath: string, link: string) {
    function handleClick() {
      window.open(link);
    }
    return (
      <img
        onClick={handleClick}
        src={imgPath}
        alt=""
      />
    )
  }

export default function Footer() {
    return (
        <div className="w-screen fixed bottom-0 flex justify-end bg-gray-800 border-t border-gray-950">
          {Links("./icons/resume-dark.svg", "./files/resume.pdf")}
          {Links("./icons/github.png", "https://github.com/John-A-Aydin")}
          {Links("./icons/linkedin.png", "https://www.linkedin.com/in/johnaaydin/")}
        </div>
    );
  }
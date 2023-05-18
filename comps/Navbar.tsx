function Destination(name:string, link:string) {
    return (
        <h1 className="flex justify-end p-2 text-xl font-mono hover:text-gray-950">{name}</h1>
    );
}
export default function Navbar() {
    return (
        <div className="w-screen h-12 fixed top-0 flex justify-end bg-gray-800 border-gray-950">
           {Destination("Projects", "TODO")}
           {Destination("Resume", "TODO")}
           {Destination("About", "TODO")}
        </div>
    );
}
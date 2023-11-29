import { FC, useState, ChangeEvent, FormEvent } from "react";

interface NavBarProps {
  onLocationChange: (location: string) => void;
}

const NavBar: FC<NavBarProps> = ({ onLocationChange }): JSX.Element => {
  const [location, setLocation] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLocationChange(location);
    setLocation(""); // Reset the location input after submitting
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <nav className="navBar p-4 flex items-center">
      <h1 className="text-4xl">My Weather</h1>
      <form onSubmit={handleSubmit} className="mt-2 ml-4">
        <input
          type="text"
          placeholder="Enter City"
          value={location}
          onChange={handleInputChange}
          className="p-2 border-2 rounded-md text-black"
        />
        <button
          type="submit"
          className="p-2 ml-2 bg-white text-blue-900 rounded-md"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;

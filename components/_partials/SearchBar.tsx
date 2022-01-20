import { SearchIcon } from "@heroicons/react/outline";

export default function SearchBar() {
  return (
    <div className="rounded flex bg-gray-100 text-sm w-full px-2 items-center justify-between">
      <input
        className="bg-transparent w-full p-2 text-dark-50 focus:outline-none"
        placeholder="Search courses or modules"
      />

      <SearchIcon className="h-5 w-5" />
    </div>
  );
}

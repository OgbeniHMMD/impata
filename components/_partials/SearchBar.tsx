export default function SearchBar() {
  return (
    <div className="rounded bg-gray-100 text-sm w-full">
      <input
        className="bg-transparent w-full p-2 text-dark-50 focus:outline-none"
        placeholder="Search courses or modules"
        type="search"
      />
    </div>
  );
}

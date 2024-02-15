import { Button } from "@/components/ui/button";
import { SearchCheck, SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex justify-center items-center bg-whiten">
      <div className="flex justify-center items-center bg-whiter p-5 w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-b border-primarydark dark:border-primarytext text-primarydark dark:text-primarytext focus:outline-none"
        />
        <Button>
          <SearchIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Search;

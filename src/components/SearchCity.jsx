import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const SearchCity = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();  
  return (
    <Form
      className="d-flex search-container my-4"
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/Cities/${searchInput}`)
      }}
    >
      <Form.Control
        type="text"
        placeholder="Search"
        className="ms-3"
        aria-label="Search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <Button type="submit" variant="link">
        <Search className=" nav-link" />
      </Button>
    </Form>
  );
};

export default SearchCity;

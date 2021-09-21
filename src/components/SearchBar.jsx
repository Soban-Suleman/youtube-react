import React, { useState } from "react";
import { Input } from "antd";
import { Row, Col } from "antd";
import "../App.css";
const { Search } = Input;
const SearchBar = ({ onFormSubmit }) => {
  const [searchInput, setSearchInput] = useState("");
  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    setSearchInput("");
    onFormSubmit(searchInput);
  };
  return (
    <div className={"ui segment"}>
      <Row justify="center">
        <Col span={24}>
          <form onSubmit={onSearch}>
            <Search
              className="searchBar"
              placeholder="input search text"
              value={searchInput}
              onChange={onInputChange}
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;

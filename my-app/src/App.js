import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Clicky Game!</h1>
    <FriendCard
      name={friends[0].name}
      image={friends[0].image}
      occupation={friends[0].occupation}
      location={friends[0].location}
    />
    <FriendCard
      name={friends[1].name}
      image={friends[1].image}
      occupation={friends[1].occupation}
      location={friends[1].location}
    />
    <FriendCard
      name={friends[2].name}
      image={friends[2].image}
      occupation={friends[2].occupation}
      location={friends[2].location}
    />
       <FriendCard
      name={friends[3].name}
      image={friends[3].image}
      occupation={friends[3].occupation}
      location={friends[3].location}
    />
     <FriendCard
      name={friends[4].name}
      image={friends[4].image}
      occupation={friends[4].occupation}
      location={friends[4].location}
    />
    <FriendCard
      name={friends[5].name}
      image={friends[5].image}
      occupation={friends[5].occupation}
      location={friends[5].location}
    />
  </Wrapper>
);

export default App;

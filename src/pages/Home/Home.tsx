import React, { useEffect } from "react";
import { People } from "@/data/people";
import { PeopleTable } from "./components/";
import { addPeople } from "@/redux/states";
import { useDispatch } from "react-redux";


export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return (
    <PeopleTable/>
  );
};

export default Home;

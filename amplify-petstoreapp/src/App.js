// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import {
  Pets 
 } from './ui-components';
 import {
  NavBarHeader 
 } from './ui-components';
 import {
  AddPet 
 } from './ui-components';
 import {
  PetDetails 
 } from './ui-components';
 import { withAuthenticator } from "@aws-amplify/ui-react";

  function App({ user, signOut }) {
    // const petProfileOverride = {
    //   Breed: { color: "blue" } 
    // }
    const [showForm, setShowForm] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [pet, setPet] = useState();
    const [updatePet, setUpdatePet] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [breed, setBreed] = useState();
    const [about, setAbout] = useState();
    const [color, setColor] = useState();
    const [image, setImage] = useState();
    
    const formOverride = {
      TextField29766922: {
        placeholder: name
      },
      TextField29766923: {
        placeholder: age
      },
      TextField29766924: {
        placeholder: breed
      },
      TextField38554509: {
        placeholder: about
      },
      TextField38554516: {
        placeholder: color
      },
      TextField38554523: {
        placeholder: image
      },
      // image: {
      //   src: updatePet === null ? "https://images.unsplash.com/photo-1557053503-0c252e5c8093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmlzaHx8fHx8fDE2NTI3MzMxMTE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" : updatePet.image, 
      // },
      Button38554536: {
          isDisabled: !updatePet ? true : false
      },
      Button29766926: {
          isDisabled: updatePet ? true : false
      },
      MyIcon: {
        style: {
          cursor: "pointer"
        },
        onClick: () => {
          setShowForm(false);
        },
      },
    };
    const detailsOverride = {
      Close: {
        style: {
          cursor: "pointer"
        },
        onClick: () => {
          setShowForm(false);
        },
      },
    };
    const navbarOverrides = {
      Button: {
          onClick: signOut,
      },
      image: {
        // src: "https://img.icons8.com/color/50/000000/cat",
        src: user?.attributes?.profile,
      },
      "Add Pet": {
        style: {
          cursor: "pointer"
        },
        onClick: () => {
          // alert("Hello");
          setShowForm(!showForm)
        }
      },
    };
  return (
    <div className="App">
      <NavBarHeader
        width={"100%"}
        overrides = {navbarOverrides}
      />
      <header className="App-header">
        { showForm && (
          <AddPet
            pet={updatePet}
            overrides={formOverride}
            style={{
              textAlign: "left",
              margin: "1rem"
            }} 
        />
        )}
        { showDetails && (
          <PetDetails
            overrides={detailsOverride}
            pet={pet}
            style={{
              textAlign: "left",
              margin: "1rem"
            }}
           />
        )}
        <Pets
          overrideItems={({item, index}) => ({
            overrides: {
              Breed: { color: "blue" },
              Button29766907: {
                onClick: () => {
                  setShowDetails(!showDetails)
                  setPet(item)
                },
              },
              Button38554536: {
                onClick: () => {
                  if (showForm) setShowForm(true)
                  setUpdatePet(item)
                  setName(item.name)
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);                        
                },
              },
            },
          })} 
        />
        {/* <PetProfile 
          overrides={petProfileOverride}
        /> */}
      </header>
    </div>
  );
}

export default withAuthenticator(App);

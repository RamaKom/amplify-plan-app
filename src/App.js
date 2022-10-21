import { useState } from "react";
import "./App.css";
import { Profiles } from "./ui-components";

import { RMBAR } from "./ui-components";
import { RMFOOTER } from "./ui-components";
import { RMADDEDITPROFILECARD } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ user, signOut }) {
  const [showForm, setShowForm] = useState(false);
  const [updatePlanSponsor, setUpdatePlanSponsor] = useState();
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [logoimage, setLogoImage] = useState("");
  const [colortheme, setColortheme] = useState("");

  const rmbarOverrrides = {
    Button: {
      onClick: signOut,
    },
    image: { src: "https://img.icons8.com/color/50/000000/cat" },
    "ADD PLAN": {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowForm(!showForm);
      },
    },
  };
  const editPlanSponsorOverrides = {
    TextField29766922: {
      placeholder: name,
    },
    TextField29766923: {
      placeholder: about,
    },
    TextField34602699: {
      placeholder: logoimage,
    },
    TextField29766924: {
      placeholder: colortheme,
    },
    Button34622726: {
      isDisabled: !updatePlanSponsor ? true : false,
    },
    // Button34612712: {
    //   isDisabled: updatePlanSponsor ? true : false,
    // },

    Vector: {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowForm(false);
        // setUpdatePlanSponsor(false);
        // alert("hello");
      },
    },
  };
  return (
    <div className="App">
      <RMBAR width={"100%"} overrides={rmbarOverrrides} />
      <header className="App-header">
        {showForm && (
          <RMADDEDITPROFILECARD overrides={editPlanSponsorOverrides} />
        )}
        {!showForm && (
          <Profiles
            overrideItems={({ item, index }) => ({
              overrides: {
                "99 Followers": { color: "blue" },
                Button34522693: {
                  onClick: () => {
                    if (!showForm) setShowForm(true);
                    setUpdatePlanSponsor(item);
                    setName(item.name);
                    setAbout(item.about);
                    setLogoImage(item.logo);
                    setColortheme(item.colortheme);
                  },
                },
              },
            })}
          />
        )}
      </header>{" "}
      <RMFOOTER width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);

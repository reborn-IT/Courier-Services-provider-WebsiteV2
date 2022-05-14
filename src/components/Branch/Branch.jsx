import React from "react";
import "../Branch/Branch.css";
import SearchableDropDown from "../../BaseComponents/SearchableDropdown/index";

export const Branch = () => {

    return(
      <div className="branch-container">
        <div className="branch-left">
          <div className="branch-left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63122.11406983307!2d81.1781970518058!3d8.583292591778383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbcb6902dbe27%3A0x7de76a7a331b0fbb!2sTrincomalee!5e0!3m2!1sen!2slk!4v1650349576646!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy" >

            </iframe>
          </div>
        </div>

        <div className="branch-right">
          <div className="branch-right">


            <div classname="branch-form">
              <div className="branch-heading"> Our Branch Network</div>
                {/* <select className="branch-select">
                  <option value="Option 1">Select Branch <i class="fa-solid fa-caret-down"></i></option>
                  <option value="Option 2">Branch 1</option>
                  <option value="Option 3">Branch 2</option>
                  <option value="Option 4">Branch 3</option>
                </select> */}

        <SearchableDropDown
              data={[
               {
                id: 1,
                title: "Dog",
                },
               {
               id: 2,
                title: "Cat",
              },
              {
                id: 3,
                title: "Parrot",
              },
                  ]}
              extraTailwind={{
                  createButton: "bg-rebornit-primary text-white",
                  item: "hover:bg-rebornit-primary hover:text-white",
              }}
              />
               
              <br /> <br />

              <div>
                <input className="branch-output" type="text" name="address" placeholder="Address of the branch" /> <br /><br />
                <input className="branch-output" type="text" name="address" placeholder="Contact number of the branch" />
              </div>

            </div>
          </div>
        </div>
      </div>

    )
}

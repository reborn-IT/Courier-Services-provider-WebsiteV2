import '../Branch/BranchStyle.css';
import SearchableDropDown from "../../BaseComponents/SearchableDropdown/index";
import RoundedInput from "../../BaseComponents/RoundedInput";

export const Branch = () => {

    return(
      <div id="branch" className="container">
        <div className="row mt-32 padding-class">
           <div className="col-md-6 branch-left">
              <div className="branch-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63122.11406983307!2d81.1781970518058!3d8.583292591778383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbcb6902dbe27%3A0x7de76a7a331b0fbb!2sTrincomalee!5e0!3m2!1sen!2slk!4v1650349576646!5m2!1sen!2slk"
                          width="100%"
                          height="500vh"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy" >
                </iframe>
              </div>
          </div>

          <div className="col-md-6 branch-right p-4">
            <div classname="branch-form ">
              <div className="branch-heading text-center font-bold text-3xl mb-6 mt-1 sm:mt-10 md:mt-10"> Our Branch Network</div>
                <div className=" p-4">
                   <SearchableDropDown
                        data={[
                         {
                          id: 1,
                          title: "Badulla",
                          },
                         {
                         id: 2,
                          title: "Ratnapura",
                        },
                        {
                         id: 3,
                          title: "Dalugama",
                        },
                        {
                          id: 4,
                          title: "Bambalapitiya",
                        },
                        {
                          id: 5,
                          title: "Kaluthara",
                        },
                        {
                          id: 6,
                          title: "Gampaha",
                        },
                        {
                          id: 7,
                          title: "Colombo 07",
                        }
                            ]}
                         extraTailwind={{
                               createButton: "bg-rebornit-primary text-white",
                                item: "hover:bg-rebornit-primary hover:text-white",
                            }}

                         placeholder={"Search Nearby Branch"}
                     /> 
                  <br /> 

                    <RoundedInput type="text" name="address" placeholder="Address of the branch"/>
                    <RoundedInput type="text" name="mobile" placeholder="Contact number of the branch"/>
                    </div>
            </div>
          </div>

        </div>
      </div>
    )
}

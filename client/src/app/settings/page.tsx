"use client";


import {

useEffect,

useState

}

from "react";


import Card
from "@/components/ui/Card";


import Input
from "@/components/ui/Input";


import Select
from "@/components/ui/Select";


import Button
from "@/components/ui/Button";


import PageAnimation
from "@/components/PageAnimation";


import {

getProfile,

updateProfile

}

from "@/lib/userApi";


import {

useAuth

}

from "@/context/AuthContext";



export default function SettingsPage(){



  const {

    user,

    refreshUser

  } = useAuth();




  const [

    form,

    setForm

  ] = useState({

    name:"",

    currency:"USD"

  });





  const [

    loading,

    setLoading

  ] = useState(false);





  useEffect(()=>{


    if(user){


      setForm({

        name:user.name,

        currency:user.currency

      });


    }


  },[user]);







  const save = async()=>{


    try{


      setLoading(true);



      await updateProfile(

        form

      );



      await refreshUser();



    }

    catch(error){


      console.error(

        "Update failed",

        error

      );


    }

    finally{


      setLoading(false);


    }


  };







  return (

    <PageAnimation>


      <div

        className="
        space-y-8
        "

      >



        <div>


          <h1

            className="
            text-3xl
            font-bold
            "

          >

            Account Settings

          </h1>



          <p

            className="
            text-gray-500
            mt-2
            "

          >

            Manage your profile and preferences.

          </p>


        </div>







        <Card>



          <h2

            className="
            text-xl
            font-bold
            mb-6
            "

          >

            Profile Information

          </h2>





          <div

            className="
            space-y-5
            "

          >



            <Input

              placeholder="Name"

              value={form.name}

              onChange={(e)=>

                setForm({

                  ...form,

                  name:e.target.value

                })

              }

            />






            <Input

              value={user?.email || ""}

              disabled

            />







            <Select

              value={form.currency}

              onChange={(e)=>

                setForm({

                  ...form,

                  currency:e.target.value

                })

              }

            >


              <option value="USD">

                USD - US Dollar

              </option>


              <option value="CAD">

                CAD - Canadian Dollar

              </option>


              <option value="GBP">

                GBP - British Pound

              </option>


              <option value="INR">

                INR - Indian Rupee

              </option>


            </Select>








            <Button

              onClick={save}

            >

              {

                loading

                ?

                "Saving..."

                :

                "Save Changes"

              }

            </Button>





          </div>





        </Card>





      </div>


    </PageAnimation>

  );

}
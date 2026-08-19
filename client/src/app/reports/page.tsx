"use client";


import {
  useEffect,
  useState
} from "react";


import PageAnimation
from "@/components/PageAnimation";


import Card
from "@/components/ui/Card";


import Button
from "@/components/ui/Button";


import ReportCard
from "@/components/reports/ReportCard";


import ReportFilter
from "@/components/reports/ReportFilter";


import {
  getReports,
  exportPDF,
  exportExcel
}
from "@/lib/reportApi";



export default function ReportsPage(){


  const [

    report,

    setReport

  ] = useState<any>(null);



  const [

    period,

    setPeriod

  ] = useState("month");



  const [

    loading,

    setLoading

  ] = useState(true);





  const loadReport = async()=>{


    try{


      setLoading(true);


      const data = await getReports(period);


      setReport(data);


    }

    catch(error){


      console.error(

        "Failed loading reports",

        error

      );


    }

    finally{


      setLoading(false);


    }


  };







  useEffect(()=>{


    loadReport();


  },[period]);








  if(loading){


    return (

      <div className="p-6">

        Loading reports...

      </div>

    );

  }







  return (

    <PageAnimation>


      <div

        className="
        space-y-8
        "

      >





        {/* Header */}


        <div

          className="
          flex
          justify-between
          items-center
          flex-wrap
          gap-4
          "

        >


          <div>


            <h1

              className="
              text-3xl
              font-bold
              "

            >

              Reports & Analytics

            </h1>



            <p

              className="
              text-gray-500
              mt-2
              "

            >

              Understand your financial performance.

            </p>


          </div>





          <ReportFilter

            period={period}

            setPeriod={setPeriod}

          />


        </div>









        {/* Summary Cards */}


        <div

          className="
          grid
          md:grid-cols-3
          gap-6
          "

        >



          <ReportCard

            title="Income"

            value={`$${report?.income || 0}`}

            icon="💰"

          />



          <ReportCard

            title="Expenses"

            value={`$${report?.expenses || 0}`}

            icon="💸"

          />



          <ReportCard

            title="Savings"

            value={`$${report?.savings || 0}`}

            icon="📈"

          />



        </div>









        <div

          className="
          grid
          xl:grid-cols-2
          gap-6
          "

        >







          {/* Category Spending */}



          <Card>


            <h2

              className="
              text-xl
              font-bold
              mb-5
              "

            >

              Spending by Category

            </h2>





            {

              report?.categories &&

              report.categories.length > 0

              ?


              report.categories.map(

                (item:any)=>(


                  <div

                    key={item.name}

                    className="
                    mb-5
                    "

                  >



                    <div

                      className="
                      flex
                      justify-between
                      mb-2
                      "

                    >



                      <span>

                        {item.name}

                      </span>



                      <span>

                        ${item.amount}

                      </span>



                    </div>






                    <div

                      className="
                      bg-gray-200
                      rounded-full
                      h-3
                      overflow-hidden
                      "

                    >



                      <div

                        className="
                        bg-blue-600
                        h-3
                        rounded-full
                        "

                        style={{

                          width:

                          `${item.percent || 0}%`

                        }}

                      />



                    </div>



                  </div>


                )

              )


              :


              (

                <p

                  className="
                  text-gray-500
                  "

                >

                  No spending data available yet.

                </p>

              )


            }





          </Card>









          {/* Export Section */}



          <Card>


            <h2

              className="
              text-xl
              font-bold
              mb-5
              "

            >

              Export Reports

            </h2>





            <p

              className="
              text-gray-500
              mb-6
              "

            >

              Download your financial reports for record keeping.

            </p>






            <div

              className="
              flex
              gap-4
              flex-wrap
              "

            >



              <Button

                onClick={()=>exportPDF(period)}

              >

                Export PDF

              </Button>






              <Button

                onClick={()=>exportExcel(period)}

              >

                Export Excel

              </Button>





            </div>





          </Card>







        </div>






        {/* Monthly Trend */}



        <Card>


          <h2

            className="
            text-xl
            font-bold
            mb-5
            "

          >

            Monthly Trend

          </h2>





          {

            report?.trend &&

            report.trend.length > 0

            ?


            report.trend.map(

              (month:any)=>(


                <div

                  key={month.month}

                  className="
                  flex
                  justify-between
                  border-b
                  py-3
                  "

                >


                  <span>

                    {month.month}

                  </span>



                  <span

                    className="
                    font-semibold
                    "

                  >

                    ${month.amount}

                  </span>



                </div>


              )

            )


            :


            (

              <p

                className="
                text-gray-500
                "

              >

                No monthly trend data available.

              </p>

            )


          }




        </Card>






      </div>


    </PageAnimation>

  );

}
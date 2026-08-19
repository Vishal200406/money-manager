"use client";


import Button
from "@/components/ui/Button";


import {

downloadPDF,

downloadExcel

}

from "@/lib/exportApi";



export default function ExportPage(){


return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Export Reports

</h1>



<div className="flex gap-4">


<Button

onClick={downloadPDF}

>

Download PDF

</Button>




<Button

onClick={downloadExcel}

>

Download Excel

</Button>


</div>


</div>

);

}
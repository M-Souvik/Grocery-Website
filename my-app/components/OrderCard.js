import React from 'react'

const OrderCard = ({order,index}) => {
  return (
    <div>
    <Collapsible>
    <CollapsibleTrigger>
    <div className="flex gap-10">
       <h1 className="text-lg"> Ordered On:</h1>
    </div>
    </CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects. No attribution
      required.
    </CollapsibleContent>
  </Collapsible>
  </div>
  )
}

export default OrderCard
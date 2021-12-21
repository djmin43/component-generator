import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { brand } = router.query;
  console.log(router.query);

  return (
    <div>
      this is home page
      this brand is: {brand}
    </div>
  );
};

export default Index;

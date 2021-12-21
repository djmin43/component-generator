import React from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { page, id } = router.query;
  
  return (
    <div>
      hello world!
      this page is: {page}
      id : {id}
    </div>
  );
};

export default Page;

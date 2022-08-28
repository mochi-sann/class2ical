import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { GetClaender } from "src/lib/ical";

const Home: NextPage = () => {
  const [fileUrl, setFileUrl] = useState("");

  return (
    <div>
      <Button
        onClick={() => {
          console.log("クリックしたで");
          const CalenderBlob = GetClaender().toBlob();
          const url = window.URL.createObjectURL(
            new Blob([CalenderBlob], { type: "text/calendar" })
          );
          setFileUrl(url);
          window.open(url);
        }}
      >
        This is Button
      </Button>
      <p>file is {fileUrl}</p>
    </div>
  );
};

export default Home;

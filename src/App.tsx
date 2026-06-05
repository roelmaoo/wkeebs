import { useState } from "react";
import { supabase } from "./utils/supabase";

function App() {
  const { data } = supabase.storage
    .from("product-images")
    .getPublicUrl("prebuilts/akko-mu01.webp");

  console.log(data?.publicUrl);

  return (
    <>
      <section>
        <div>
          <img src={data?.publicUrl} alt="akko-mu01" />
        </div>
      </section>
    </>
  );
}

export default App;

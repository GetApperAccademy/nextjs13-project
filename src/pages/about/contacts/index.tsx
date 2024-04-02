import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";

type ContacsProps = {
  User: {
    email: string;
    password: number;
  };
};

const Contacs = memo(({ User }: ContacsProps) => {
  return (
    <>
      <AppHead title="Contacs" description="" />
      <h2>Contacts</h2>
      <p>{User.email}</p>
      <p>{User.password}</p>
    </>
  );
});
Contacs.displayName = "Contacs";

export default Contacs;

export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<ContacsProps>
> {
  // Simulazione accesso al DB
  const User = {
    email: "lucarossi@gmail.com",
    password: 1234 + Math.random(),
  };
  return {
    props: { User },
  };
}

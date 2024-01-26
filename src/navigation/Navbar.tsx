import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className=" flex flex-wrap text-xl justify-center">{props.children}</ul>
);

export { Navbar };

import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-slate-200  bg-opacity-10 text-black p-4 text-center">
      <p className="text-sm">
        © {year} Keeper App. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;

import { ModeToggle } from "../toggler/theme-toggler";

const Footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto py-10">
        <div className="text-center text-xs ">
          &copy; 2024 Store. All rights reserved.
        </div>
      </div>
      <div className="fixed bottom-1 right-1">
        <ModeToggle />
      </div>
    </footer>
  );
};

export default Footer;

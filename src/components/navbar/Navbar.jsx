import { ShoppingCart, UserPlus, LogIn, Lock, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { useCartStore } from "../../stores/useCartStore";
import NavAccMenu from "./NavbarAcc";
import { useState, useCallback } from "react";
import { BsChevronDown } from "react-icons/bs";
import Avatar from "/avatar.png";
import Search from "../Search";

const Navbar = () => {
  const { user } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();
  const [showAcc, setShowAcc] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleShowAcc = useCallback(() => {
    setShowAcc((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((current) => !current);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3 md:px-8 lg:px-12">
        {/* Desktop & Tablet Navigation */}
        <div className="hidden md:flex flex-wrap justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-emerald-400 items-center space-x-2 flex"
          >
            E-Commerce
          </Link>

          <nav className="flex flex-row items-center ml-auto gap-7">
            <Search />
            {user && (
              <Link
                to={"/cart"}
                className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 
                                ease-in-out"
              >
                <ShoppingCart
                  className="inline-block mr-1 group-hover:text-emerald-400"
                  size={20}
                />
                <span className="hidden lg:inline">Cart</span>
                {cart.length > 0 && (
                  <span
                    className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 
                                        text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out"
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            )}
            {isAdmin && (
              <Link
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
                                transition duration-300 ease-in-out flex items-center"
                to={"/secret-dashboard"}
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden lg:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <div
                onClick={toggleShowAcc}
                className="relative flex flex-row items-center gap-2 cursor-pointer"
              >
                <div className="w-4 h-4 overflow-hidden rounded-md lg:w-8 lg:h-8">
                  <img src={Avatar} alt="" />
                </div>
                <BsChevronDown
                  className={`text-white transition ${
                    showAcc ? "rotate-180" : "rotate-0"
                  }`}
                />
                <NavAccMenu visible={showAcc} />
              </div>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 
                                    rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <UserPlus className="mr-2" size={18} />
                  <span className="hidden lg:inline">Sign Up</span>
                </Link>
                <Link
                  to={"/login"}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
                                    rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogIn className="mr-2" size={18} />
                  <span className="hidden lg:inline">Login</span>
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-emerald-400">
            E-Commerce
          </Link>

          <div className="flex items-center gap-4">
            
            {user && (
              <Link
                to={"/cart"}
                className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 
                                ease-in-out"
              >
                <ShoppingCart className="inline-block" size={20} />
                {cart.length > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 
                                        text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out"
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            )}
            <button onClick={toggleMobileMenu} className="text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md p-4">
              <nav className="flex flex-col gap-4">
			  	<Search />
                {isAdmin && (
					
                  <Link
                    to={"/secret-dashboard"}
                    className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-2 rounded-md font-medium
                                        transition duration-300 ease-in-out flex items-center"
                  >
                    <Lock className="inline-block mr-2" size={18} />
                    Dashboard
                  </Link>
                )}
                {!user && (
                  <>
                    <Link
                      to={"/signup"}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 
                                            rounded-md flex items-center transition duration-300 ease-in-out"
                    >
                      <UserPlus className="mr-2" size={18} />
                      Sign Up
                    </Link>
                    <Link
                      to={"/login"}
                      className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
                                            rounded-md flex items-center transition duration-300 ease-in-out"
                    >
                      <LogIn className="mr-2" size={18} />
                      Login
                    </Link>
                  </>
                )}
                {user && (
                  <div
                    onClick={toggleShowAcc}
                    className="flex items-center justify-between cursor-pointer bg-gray-800 p-3 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 overflow-hidden rounded-md">
                        <img src={Avatar} alt="User Avatar" />
                      </div>
                      <span className="text-white">
                        {user?.name || "User Profile"}
                      </span>
                    </div>
                    <BsChevronDown
                      className={`text-white transition ${
                        showAcc ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                )}

                {showAcc && user && (
                  <div className="mt-2">
                    <NavAccMenu visible={true} isMobile={true} />
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

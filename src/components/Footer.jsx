import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-16 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold">KeenKeeper</h2>
        <p className="text-gray-200 mt-4 text-sm max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="mt-8 font-semibold">Social Links</h3>

        <div className="flex justify-center gap-4 mt-4">
          <button className="btn btn-circle btn-sm bg-white text-black">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle btn-sm bg-white text-black">
            <FaInstagram />
 
          </button>
          <button className="btn btn-circle btn-sm bg-white text-black">
            <FaXTwitter />
 
          </button>
        </div>

        <div className="flex justify-between text-xs text-gray-300 mt-12">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}